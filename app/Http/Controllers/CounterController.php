<?php

namespace App\Http\Controllers;

use App\Models\counter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CounterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $counter = Counter::firstOrCreate(['id' => 1], ['value' => 0]);
        return Inertia::render('Counter', ['counter' => $counter, 'logs' => $counter->logs()->latest()->take(10)->get()]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, counter $counter)
    {
        $counter = Counter::first();
        if ($request->action === 'increment') {$counter->increment('value');} 
        elseif ($request->action === 'decrement') {$counter->decrement('value');}
        
        $counter->logs()->create(['value' => $counter->value]);
        return redirect()->back();
    }
}
