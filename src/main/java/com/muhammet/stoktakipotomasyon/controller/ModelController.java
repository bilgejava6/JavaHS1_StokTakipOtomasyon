package com.muhammet.stoktakipotomasyon.controller;

import com.muhammet.stoktakipotomasyon.dto.request.AddModelRequestDto;
import com.muhammet.stoktakipotomasyon.dto.request.EditModelRequestDto;
import com.muhammet.stoktakipotomasyon.dto.response.ModelListResponseDto;
import com.muhammet.stoktakipotomasyon.dto.response.ResponseDto;
import com.muhammet.stoktakipotomasyon.entity.Model;
import com.muhammet.stoktakipotomasyon.service.ModelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/model")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ModelController {
    private final ModelService modelService;

    @PostMapping("/add-model")
    public ResponseEntity<ResponseDto<Boolean>> addModel(@RequestBody AddModelRequestDto dto){
        modelService.save(Model.builder().markaId(dto.markaId()).modelAdi(dto.modelAdi()).build());
        return ResponseEntity.ok(ResponseDto.<Boolean>builder()
                .code(200)
                .message("Model Eklendi")
                .data(true).build());
    }

    @GetMapping("/get-all")
    public ResponseEntity<ResponseDto<List<ModelListResponseDto>>> getAll(){
        return  ResponseEntity.ok(ResponseDto.<List<ModelListResponseDto>>builder()
                        .code(200)
                        .message("Ok")
                        .data(modelService.findAllModel())
                .build());
    }

    @PostMapping("/edit-model")
    public ResponseEntity<ResponseDto<Boolean>> editModel(@RequestBody EditModelRequestDto dto){
        modelService.save(Model.builder()
                        .id(dto.id())
                        .markaId(dto.markaId())
                        .modelAdi(dto.modelAd())
                .build());
        return ResponseEntity.ok(ResponseDto.<Boolean>builder()
                        .data(true)
                        .message("Kayıt Başarılı olarak güncellendi.")
                        .code(200)
                .build());
    }

    @DeleteMapping("/delete-by-id")
    public ResponseEntity<ResponseDto<Boolean>> deleteById(Long modelId){
        modelService.deleteById(modelId);
        return ResponseEntity.ok(ResponseDto.<Boolean>builder()
                .data(true)
                .message("Kayıt Başarılı olarak silindi.")
                .code(200)
                .build());
    }
}
