<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Auto extends Migration
{

    public function up()
    {
        Schema::create('auto', function (Blueprint $table) {
            $table->id();
            $table->string('model')->comment('Модель');
            $table->decimal('price', 12, 2)->comment('Цена');
            $table->string('image')->nullable()->comment('Изображение');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
}
