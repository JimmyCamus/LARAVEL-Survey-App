<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
  public function login(Request $request)
  {
    $credentials = $request->validate([
      'email' => ['required', 'email', 'exists:users,email'],
      'password' => ['required'],
    ]);

    if (Auth::attempt($credentials)) {
      $request->session()->regenerate();
      $user = Auth::user();
      return response()->json([
        "status" => "success",
        "user" => $user
      ]);
    }

    return response()->json([
      "status" => "failed",
      "message" => "validation error, the credentials do not match"
    ]);
  }
}
