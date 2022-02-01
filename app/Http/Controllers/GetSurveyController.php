<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Survey;
use App\Models\Question;
use App\Models\Answer;

class GetSurveyController extends Controller
{
  public function getSurvey(Request $request)
  {
    try {
      $answered = false;
      if (count(Answer::where("survey_id",$request->id)->where("user_id", Auth::user()->id)->get()) > 0){
        $answered = true;
      }
      $survey = Survey::find($request->id);
      $questions = Question::where('survey_id', $request->id)->get();
      return response()->json([
        'status' => 'success',
        'survey' => (object)["id" => $survey->id, "title" => $survey->title, "answered" => $answered],
        'questions' => $questions,
        'answered' => $answered
      ]);
    } catch (\Throwable $th) {
      return response()->json([
        'status' => 'failed',
        'message' => 'Unexpected error, please try later'
      ]);
    }
  }
}
