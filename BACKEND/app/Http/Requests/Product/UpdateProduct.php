<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProduct extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $productId=$this->route('product');
        // dd($product);
        return [
            'brand_id' => 'required|integer|exists:brands,id',
            'category_id' => 'required|integer|exists:categories,id',
            'tags' => 'required|array|min:1',
            'tags.*' => 'integer|exists:tags,id',
            'gallery' => 'array|min:1',
            'gallery.*.id' => 'integer|exists:product_galleries,id', // Kiểm tra 'id' tồn tại trong bảng galleries
            'gallery.*.image' => 'image|mimes:jpeg,png,jpg', // Kiểm tra 'image' là chuỗi

            'type' => 'required|integer|in:0,1', // Type chỉ có 2 loại: 0 (simple) và 1 (variant)
            'sku' => 'required|string|max:255|unique:products,sku,' . $productId,
            'name' => 'required|string|max:255|unique:products,name,' . $productId,

            'img_thumbnail' => 'image|mimes:jpeg,png,jpg',

            // Nếu type = 0 thì các trường này là bắt buộc, nếu type = 1 thì không bắt buộc
            'price_regular' => 'numeric|min:0|required_if:type,0',
            'price_sale' => 'numeric|min:0|lt:price_regular|required_if:type,0',
            'quantity' => 'integer|min:1|required_if:type,0',

            'description' => 'required|string',
            'short_description' => 'required|string',

            // Nếu type = 1 thì các thuộc tính, biến thể là bắt buộc
            'attribute_id' => 'required_if:type,1|array|min:1',
            'attribute_id.*' => 'integer|exists:attributes,id',

            'attribute_item_id' => 'required_if:type,1|array',
            'attribute_item_id.*' => 'array|min:1',
            'attribute_item_id.*.*' => 'integer|exists:attribute_items,id',

            'product_variant' => 'required_if:type,1|array|min:1',
            'product_variant.*.attribute_item_id' => 'required_if:type,1|array|min:1',
            'product_variant.*.attribute_item_id.*' => 'integer|exists:attribute_items,id',
            'product_variant.*.sku' => 'required_if:type,1|string|max:255|distinct',
            'product_variant.*.quantity' => 'integer|min:1|required_if:type,1',
            'product_variant.*.price_regular' => 'numeric|min:0|required_if:type,1',
            'product_variant.*.price_sale' => 'numeric|min:0|lt:product_variant.*.price_regular|required_if:type,1',
            'product_variant.*.image' => 'nullable|image|mimes:jpeg,png,jpg',


        ];
    }
}