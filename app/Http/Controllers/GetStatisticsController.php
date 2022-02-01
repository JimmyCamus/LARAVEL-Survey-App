<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Survey;
use App\Models\Question;
use App\Models\Answer;

class GetStatisticsController extends Controller
{
  public function getStatistics(Request $request)
  {
    try {
      $survey = Survey::find($request->id);
      $questions = Question::where('survey_id', $request->id)->get();
      $answers = Answer::where('survey_id', $request->id)->get();
      $questionsArray = [];
      foreach ($questions as $question) {
        $questionObject = [
          'title' => $question->title,
          'answer_1' => 0,
          'answer_2' => 0,
          'answer_3' => 0,
          'answer_4' => 0,
          'total' => 0
        ];
        foreach ($answers as $answer) {
          if ($question->id == $answer->question_id) {
            $questionObject["answer_{$answer->answer_number}"]++;
            $questionObject['total']++;
          }
        }
        $questionsArray[] = $questionObject;
      }

      return response()->json([
        'status' => 'success',
        'questions' => $questionsArray,
        'survey' => $survey,
        'questionObject' => $questions
      ]);
    } catch (\Throwable $th) {
      return response()->json([
        'status' => 'failed',
        'message' => 'Unexpected error, please try later'
      ]);
    }
  }
}
