<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth')->group(function(){

    //Exercise Routes
    Route::get('/exercises', 'ExerciseController@getExercises');
    Route::put('/exercises', 'ExerciseController@createOrUpdateExercise');
    Route::delete('/exercises/{id}', 'ExerciseController@deleteExercise');

});

Route::get('check-unique-email/', 'UsersController@checkUniqueEmail');
