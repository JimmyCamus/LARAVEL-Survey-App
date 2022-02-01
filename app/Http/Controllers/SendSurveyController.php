<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Answer;

class SendSurveyController extends Controller
{
  public function sendSurvey(Request $request)
  {
    $answers = [];
    foreach(explode(",", $request->questions) as $question){
      $split = explode("-", $question);
      $id = explode(":", $split[0])[1];
      $value = explode(":", $split[1])[1];
      $questionObject = (object)["id" => $id, "answer_number" => $value];
      $answers[] = $this->createAnswer($request->survey_id, $questionObject);
    }

    foreach($answers as $answer){
      $answer->save();
    }
    return response()->json([
      "status" => "success"
    ]);
  }

  private function createAnswer($survey_id, $question)
  {
    $newAnswer = new Answer();
    $newAnswer->survey_id = $survey_id;
    $newAnswer->question_id = $question->id;
    $newAnswer->answer_number = $question->answer_number;
    $newAnswer->user_id = Auth::user()->id;
    return $newAnswer;
  }
}
