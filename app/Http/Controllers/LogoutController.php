<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
  public function logout()
  {
    if (!Auth::check()) {
      return response()->json([
        "status" => "failed",
        "data" => "B",
      ]);
    }
    Auth::logout();
    return response()->json([
      "status" => "success",
      "data" => "A",
    ]);
  }
}
