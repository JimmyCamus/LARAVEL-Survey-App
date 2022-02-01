<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\GetUserController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\GetSurveyController;
use App\Http\Controllers\GetSurveysController;
use App\Http\Controllers\SendSurveyController;
use App\Http\Controllers\CreateSurveyController;
use App\Http\Controllers\GetAllSurveysController;
use App\Http\Controllers\GetStatisticsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get("getuser", [GetUserController::class, "getUser"]);
Route::get("getSurveys", [GetSurveysController::class, "getSurveys"]);
Route::get("logout", [LogoutController::class, "logout"]);
Route::get("getAllSurveys", [GetAllSurveysController::class, "getAllSurveys"]);
Route::post("login", [LoginController::class, "login"]);
Route::post("register", [RegisterController::class, "register"]);
Route::post("createSurvey", [CreateSurveyController::class, "createSurvey"]);
Route::post("getSurvey", [GetSurveyController::class, "getSurvey"]);
Route::post("getStatistics", [GetStatisticsController::class, "getStatistics"]);
Route::post("sendSurvey", [SendSurveyController::class, "sendSurvey"]);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
