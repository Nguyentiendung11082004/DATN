<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreProduct;
use App\Http\Requests\Product\UpdateProduct;
use App\Models\Attribute;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductGallery;
use App\Models\ProductVariant;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try {
            $product = Product::query()->latest('id')->get();
            return response()->json([
                'data' => $product
            ], Response::HTTP_OK);
        } catch (\Exception $ex) {
            Log::error('API/V1/Admin/ProductController@index: ', [$ex->getMessage()]);

            return response()->json([
                'message' => 'Đã có lỗi nghiêm trọng xảy ra'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function create()
    {
        try {
            $category = Category::query()->latest('id')->get();
           
            $tag = Tag::query()->latest('id')->get();
            $attribute = Attribute::with(["attributeitems"])->get();
            $brand = Brand::query()->get();
            return response()->json([
                'category' => $category,
                'tag' => $tag,
                'attribute' => $attribute,
                "brand" => $brand
            ], Response::HTTP_OK);
        } catch (\Exception $ex) {
            Log::error('API/V1/Admin/ProductController@create: ', [$ex->getMessage()]);

            return response()->json([
                'message' => 'Đã có lỗi nghiêm trọng xảy ra'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProduct $request)
    {
       
        try {

            $respone = DB::transaction(function () use ($request) {

                $dataProduct = $request->except(["attribute_id", "attribute_item_id", "product_variant"]);

                $dataProduct["slug"] = Str::slug($request->input("name"));
                if ($request->hasFile('img_thumbnail')) {
                    $path = Storage::put("public/product", $dataProduct["img_thumbnail"]);
                    $url = url(Storage::url($path));
                    $dataProduct["img_thumbnail"] = $url;
                }
                $product = Product::query()->create($dataProduct);
                foreach ($request->gallery as  $gallery) {


                    $path = Storage::put("public/product", $gallery);
                    $url = url(Storage::url($path));
                    ProductGallery::query()->create([
                        "product_id" => $product->id,
                        "image" => $url

                    ]);
                }
                $product->tags()->attach($dataProduct['tags']);


                if ($request->input('type') == 1) {
                    // create product_has_attribute

                    foreach ($request->input("attribute_item_id") as $attributeId => $attributeItemId) {
                        $product->attributes()->attach($attributeId, ["attribute_item_ids" => json_encode($attributeItemId)]);
                    }
                    // thêm mới productvariant

                    foreach ($request->input("product_variant") as $item) {
                        $url = null;
                        // dd($item);
                        if (isset(($item["image"]))) {

                            $path = Storage::put("public/product", $item["image"]);
                            $url = url(Storage::url($path));
                        }
                        $productVariant = ProductVariant::query()->create([
                            "product_id" => $product->id,
                            "price_regular" => $item["price_regular"],
                            "price_sale" => $item["price_sale"],
                            "quantity" => $item["quantity"],
                            "image" => $url,
                            "sku" => $item["sku"],

                        ]);
                        foreach ($item["attribute_item_id"] as $key => $id) {
                            $productVariant->attributes()->attach($request->input('attribute_id')[$key], ["attribute_item_id" => $id]);
                        }
                    }
                }

                return [
                    "message" => "thêm mới thành công !",
                    "data" => $product
                ];
            });
            return response()->json($respone, Response::HTTP_CREATED);
        } catch (\Exception $ex) {

            // dd($ex->getMessage());
            return response()->json([
                'message' => $ex->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            // dd($id);
            $product = Product::query()->latest('id')->findOrFail($id)->load(["brand", "category", "attributes", "variants", "galleries", "tags"]);
            // dd($product->toArray());
            $category = Category::query()->latest('id')->get();
            // dd($category->toArray());
            $tag = Tag::query()->latest('id')->pluck('name', 'id');
            $attribute = Attribute::with(["attributeitems"])->get();
            $brand = Brand::query()->pluck('name', 'id');
            return response()->json([
                "product" => $product,
                "category" => $category,
                "tag" => $tag,
                "attribute" => $attribute,
                "brand" => $brand,

            ], Response::HTTP_OK);
            // dd($product->toArray());
        } catch (\Exception $ex) {
            Log::error('API/V1/Admin/ProductController@show: ', [$ex->getMessage()]);

            return response()->json([
                'message' => 'Đã có lỗi nghiêm trọng xảy ra'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProduct $request, string $id)
    {
        
        try {


            $product = Product::query()->findOrFail($id);


            DB::transaction(function () use ($request, $product) {
                $dataProduct = $request->except([
                    "attribute_id",
                    "attribute_item_id",
                    "product_variant",
                    "gallery",
                    "tags"
                ]);
                if ($request->hasFile('img_thumbnail')) {
                    //    echo 1;die;
                    $path = Storage::put("public/product", $dataProduct["img_thumbnail"]);
                    $dataProduct["img_thumbnail"] = url(Storage::url($path));
                    $relativePath = str_replace("/storage/", 'public/', parse_url($product->img_thumbnail, PHP_URL_PATH));
                    Storage::delete($relativePath);
                }
                $dataProduct['slug'] = Str::slug($dataProduct["name"]);

                // Xử lý ảnh gallery
                // dd($request->input('gallery'));
                if ($request->has('gallery') && is_array($request->input('gallery'))) {

                    foreach ($request->gallery as $galleryItem) {
                        // dd($galleryItem);
                        // Kiểm tra xem ID có tồn tại và ảnh có mới không
                        if (isset($galleryItem['id']) && isset($galleryItem['image'])) {

                            // Cập nhật ảnh gallery dựa trên ID
                            // echo 1;die;
                            $gallery = ProductGallery::query()->findOrFail($galleryItem['id']);
                            // dd($gallery);
                            if ($gallery) {
                                // Xóa ảnh cũ nếu có
                                $relativePath = str_replace("/storage/", 'public/', parse_url($gallery->image, PHP_URL_PATH));
                                Storage::delete($relativePath);

                                // Lưu ảnh mới
                                $path = Storage::put("public/product", $galleryItem['image']);
                                // dd($path);
                                $url = url(Storage::url($path));

                                // Cập nhật thông tin ảnh trong gallery
                                $gallery->update([
                                    "image" => $url
                                ]);
                            }
                        }
                    }
                }
                // dd($request->tags);
                $product->tags()->sync($request->tags);

                if ($request->input('type') == 1) {
                    // Xử lý thêm hoặc cập nhật các thuộc tính của sản phẩm
                    $syncData = [];
                    foreach ($request->input("attribute_item_id") as $attributeId => $attributeItemId) {
                        $syncData[$attributeId] = ["attribute_item_ids" => json_encode($attributeItemId)];
                    }
                    $product->attributes()->sync($syncData);

                    // Lấy biến thể hiện tại của sản phẩm từ database
                    $variant = $product->load(["variants"])->toArray();
                    $syncVariant = [];

                    foreach ($request->product_variant as $keys => $item) {

                        if (isset($item["image"]) && $request->hasFile("product_variant.$keys.image")) {
                           
                            $path = Storage::put("public/product", $item["image"]);
                            $url = url(Storage::url($path));
                            $relativePath = str_replace("/storage/", 'public/', parse_url($variant["variants"][$keys]["image"]??null, PHP_URL_PATH));
                            Storage::delete($relativePath);
                        } else {
                            // Giữ ảnh cũ nếu không upload ảnh mới
                            $url = $variant["variants"][$keys]["image"] ?? null;
                        }

                        // Kiểm tra xem biến thể có tồn tại trong DB không, nếu có thì update, nếu không thì tạo mới
                        if (isset($variant["variants"][$keys])) {
                            ProductVariant::where('id', $variant["variants"][$keys]["id"])
                                ->update([
                                    "product_id" => $product->id,
                                    "price_regular" => $item["price_regular"],
                                    "price_sale" => $item["price_sale"],
                                    "quantity" => $item["quantity"],
                                    "image" => $url,
                                    "sku" => $item["sku"],
                                ]);

                            $productVariant = ProductVariant::findOrFail($variant["variants"][$keys]["id"]);
                        } else {
                            // Nếu không có, tạo mới biến thể
                            $productVariant = ProductVariant::create([
                                "product_id" => $product->id,
                                "price_regular" => $item["price_regular"],
                                "price_sale" => $item["price_sale"],
                                "quantity" => $item["quantity"],
                                "image" => $url,
                                "sku" => $item["sku"],
                            ]);
                        }

                        // Xử lý thuộc tính của biến thể
                        foreach ($item["attribute_item_id"] as $key => $id) {
                            $syncVariant[$request->input('attribute_id')[$key]] = ["attribute_item_id" => $id];
                        }
                        $productVariant->attributes()->sync($syncVariant);
                    }
                }
                if ($request->input('type') == 0 && $product->type == 1) {
                    $variants = ProductVariant::where('product_id', $product->id)->get();

                    foreach ($variants as $variant) {
                        if ($variant->image) {
                            $relativePath = str_replace("/storage/", 'public/', parse_url($variant->image, PHP_URL_PATH));
                            Storage::delete($relativePath);
                        }
                    }

                    DB::table('product_variant_has_attributes')->whereIn('product_variant_id', function ($query) use ($product) {
                        $query->select('id')
                            ->from('product_variants')
                            ->where('product_id', $product->id);
                    })->delete();

                    ProductVariant::where('product_id', $product->id)->delete();

                    DB::table('product_has_attributes')->where('product_id', $product->id)->delete();
                }


                $product->update($dataProduct);
            });


            return [
                "message" => "cập nhật thành công !",

            ];

            return response()->json($respone, Response::HTTP_CREATED);
        } catch (\Exception $ex) {

            // Log::debug();
            return response()->json([
                "message" => $ex->getMessage(),

            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        try {
            $product = Product::query()->findOrFail($id);
            $respone = DB::transaction(function () use ($product) {
                if (!empty($product->img_thumbnail)) {
                    $relativePath = str_replace("/storage/", 'public/', parse_url($product->img_thumbnail, PHP_URL_PATH));
                    Storage::delete($relativePath);
                }
                $gallerys = ProductGallery::query()->where('product_id', $product->id)->get()->toArray();
                // dd($gallerys);
                foreach ($gallerys as  $item) {
                    if (!empty($item)) {
                        // dd($item);
                        $relativePath = str_replace("/storage/", 'public/', parse_url($item["image"], PHP_URL_PATH));
                        Storage::delete($relativePath);
                    }
                }
                ProductGallery::query()->where('product_id', $product->id)->delete();
                $product->tags()->sync([]);
                if ($product->type == 1) {
                    $variants = ProductVariant::where('product_id', $product->id)->get();

                    foreach ($variants as $variant) {
                        if ($variant->image) {
                            $relativePath = str_replace("/storage/", 'public/', parse_url($variant->image, PHP_URL_PATH));
                            Storage::delete($relativePath);
                        }
                    }

                    DB::table('product_variant_has_attributes')->whereIn('product_variant_id', function ($query) use ($product) {
                        $query->select('id')
                            ->from('product_variants')
                            ->where('product_id', $product->id);
                    })->delete();

                    ProductVariant::where('product_id', $product->id)->delete();

                    $product->attributes()->sync([]);
                }
                $product->delete();

                return [
                    "message" => "xóa dữ liệu thành công"
                ];
            });
            return response()->json($respone);
        } catch (\Exception $ex) {
            return response()->json(
                [
                    "message" => $ex->getMessage()
                ]
            );
        }
    }
}