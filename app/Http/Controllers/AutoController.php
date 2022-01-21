<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use App\Models\Auto;

class AutoController extends Controller
{
    public function list()
    {
        return Auto::query()
                    ->orderBy('created_at', 'desc')
                    ->get();
    }


    public function info($id)
    {
        return [
            'id' => $id,
            'name' => 'AUDI A5' . $id,
            'price' => 178000
        ];
    }
}
