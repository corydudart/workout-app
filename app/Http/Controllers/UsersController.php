<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function checkUniqueEmail(Request $request){
        if (request('email')) {
            $data = [
               'isUnique' => User::where('email', request('email'))->get()->isEmpty()
            ];
            return response()->json($data);
        }else
            return 0;
    }
}
