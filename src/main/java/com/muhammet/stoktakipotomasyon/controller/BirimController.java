package com.muhammet.stoktakipotomasyon.controller;

import com.muhammet.stoktakipotomasyon.dto.request.AddBirimResponseDto;
import com.muhammet.stoktakipotomasyon.dto.response.ResponseDto;
import com.muhammet.stoktakipotomasyon.service.BirimService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/birim")
@RequiredArgsConstructor
public class BirimController {
    private final BirimService birimService;

    @PostMapping("/add-birim")
    @CrossOrigin("*")
    public ResponseEntity<ResponseDto<Boolean>> addBirim(@RequestBody AddBirimResponseDto dto){

        return ResponseEntity.ok(ResponseDto.<Boolean>builder()
                        .code(200)
                        .message("Kayıt eklendi")
                        .data(true)
                .build());
    }
}
