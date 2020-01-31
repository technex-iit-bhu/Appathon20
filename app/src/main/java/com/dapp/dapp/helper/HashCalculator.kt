package com.dapp.dapp.helper

object HashCalculator {
    fun hashOf(str:String):String{
        return str.hashCode().toString()
    }
}