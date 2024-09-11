<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        "brand_id",
        "category_children_id",
        'type',
        'slug',
        'sku',
        'name',
        "views",
        'img_thumbnail',
        'price_regular',
        'price_sale',
        "quantity",
        'description',
        "short_description",
        "status",
        'is_show_home',
        'trend',
        'is_new',

    ];

    public function brand(){
        return $this->belongsTo(Brand::class);
    }

    public function comments(){
        return $this->hasMany(Comments::class);
    }
    public function categorychildren(){
        return $this->belongsTo(CategoryChildren::class);
    }

    public function attributes(){
        return $this->belongsToMany(Attribute::class,"product_has_attributes","product_id","attribute_id")->withPivot("attribute_item_ids");
    }
    public function variants(){
        return $this->hasMany(ProductVariant::class);
    }
    public function galleries(){
        return $this->hasMany(ProductGallery::class);
    }
    public function tags(){
        return $this->belongsToMany(Tag::class,"product_tags");
    }

}
