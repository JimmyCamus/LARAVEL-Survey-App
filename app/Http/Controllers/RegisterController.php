<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
  public function register(Request $request)
  {
    try {
      $validator = Validator::make($request->all(), [
        "name" => "required",
        "email" => "required|email|unique:users,email",
        "password" => "required"
      ]);

      if ($validator->fails()) {
        return response()->json([
          "status" => "failed", "message" => "validation error, the email is already taken "
        ]);
      }

      User::create([
        "name" => $request->name,
        "email" => $request->email,
        "password" => Hash::make($request->password),
      ]);

      return response()->json([
        "status" => "success",
        "message" => "regitration completed"
      ]);
    } catch (\Throwable $th) {
      return response()->json([
        "status" => "success",
        "message" => "unexpected error, please try later."
      ]);
    }
  }
}
