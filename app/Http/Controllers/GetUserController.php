<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class GetUserController extends Controller
{
  public function getUser()
  {
    if (!Auth::check()) {
      return response()->json([
        "status" => "succes",
        "userStatus" => "off",
        "data" => (object)array("name" => "", "email" => ""),
      ]);
    }

    $user = Auth::user();
    return response()->json([
      "status" => "succes",
      "userStatus" => "on",
      "data" => (object)array("name" => $user->name, "email" => $user->email),
    ]);
  }
}
