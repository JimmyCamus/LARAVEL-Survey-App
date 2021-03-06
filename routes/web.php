<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return view('welcome');
});

Route::get("/login", function () {
  return view('welcome');
})->where('any', '.*');

Route::get("/register", function () {
  return view('welcome');
})->where('any', '.*');

Route::get("/createSurvey", function () {
  return view('welcome');
})->where('any', '.*');

Route::get("/mySurveys", function () {
  return view('welcome');
})->where('any', '.*');

Route::get("/survey/{id}", function () {
  return view('welcome');
})->where('any', '.*');

Route::get("/statistics/{id}", function () {
  return view('welcome');
})->where('any', '.*');
