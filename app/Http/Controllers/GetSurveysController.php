<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Survey;

class GetSurveysController extends Controller
{
  public function getSurveys()
  {
    try {
      $surveys = Survey::where('user_id', Auth::user()->id)->get();
      return response()->json([
        "status" => "success",
        "surveys" => $surveys
      ]);
    } catch (\Throwable $th) {
      return response()->json([
        "status" => "failed",
        "message" => "Unexpected error, please try later."
      ]);
    }
  }
}
