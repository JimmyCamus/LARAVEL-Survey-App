<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Survey;
use App\Models\Question;

class CreateSurveyController extends Controller
{
  public function CreateSurvey(Request $request)
  {
    try {
      $newSurvey = new Survey();
      $newSurvey->id = Survey::count() + 1;
      $newSurvey->user_id = Auth::user()->id;
      $newSurvey->title = $request->title;

      $acc = 0;
      $question = [];
      $questionModelArray = [];

      foreach (explode(",", $request->questions) as $questionElement) {
        if ($acc == 5) {
          $questionModelArray[] = $this->createQuestion($question, $newSurvey);
          $question = [];
          $acc = 0;
        };
        $question[] = $questionElement;
        $acc++;
      }
      $questionModelArray[] = $this->createQuestion($question, $newSurvey);

      $newSurvey->save();
      foreach ($questionModelArray as $questionModel) {
        $questionModel->save();
      }

      return response()->json([
        "status" => "success"
      ]);
    } catch (\Throwable $th) {
      return response()->json([
        "status" => "failed"
      ]);
    }
  }

  private function createQuestion($question, $survey)
  {
    $newQuestion = new Question();
    $newQuestion->survey_id = $survey->id;
    $newQuestion->title = $question[0];
    $newQuestion->answer_1 = $question[1];
    $newQuestion->answer_2 = $question[2];
    $newQuestion->answer_3 = $question[3];
    $newQuestion->answer_4 = $question[4];
    return $newQuestion;
  }
}
