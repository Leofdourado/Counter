<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;
    protected $fillable = ['counter_id', 'value'];
    public function counter()
    {
        return $this->belongsTo(Counter::class);
    }
}
