<?php

use App\Http\Controllers\Api\V1\Admin\ClientController;
use App\Http\Controllers\Api\V1\Admin\EmployeeController;
use App\Http\Controllers\Api\V1\Client\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->get('/user', 
function (Request $request) {
    return $request->user();
});

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
  

Route::post('logout', [AuthController::class, 'logout'])  
->middleware('auth:sanctum');

Route::prefix("v1/")->group(function () {

    Route::resource('employees', EmployeeController::class);
    Route::resource('clients', ClientController::class);
});
