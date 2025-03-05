<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginPostRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    final public function login(LoginPostRequest $request): JsonResponse
    {
        $request->validated();
        return response()->json(["La validation est passée"]);
    }

    final public function user(Request $request)
    {
        return $request->user();
    }
}
