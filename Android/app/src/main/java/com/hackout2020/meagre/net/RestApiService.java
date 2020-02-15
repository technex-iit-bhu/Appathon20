package com.hackout2020.meagre.net;


import java.util.HashMap;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Header;
import retrofit2.http.Headers;
import retrofit2.http.POST;

public interface RestApiService {


    @Headers({"Content-Type: application/json",
            "Connection:close"
    })
    @POST("/update_token")
    Call<ResponseBody> updateToken(@Body HashMap<String, Object> body);

}
