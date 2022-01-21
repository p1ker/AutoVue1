<?php

namespace App\Domain\Car\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $price
 * @property string $image
 */
class Car extends Model
{
    protected $table = 'car';

    protected $fillable = [
        'name',
        'price',
        'image'
    ];
}
