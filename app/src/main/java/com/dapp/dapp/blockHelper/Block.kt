package com.dapp.dapp.blockHelper

import androidx.annotation.Nullable

data class Block constructor(
    val previousHash: String,
    @Nullable var currentHash: String?,
    val message: String,
    val from: String
)

