package com.muhammet.stoktakipotomasyon.controller;

import com.muhammet.stoktakipotomasyon.dto.request.AddBirimRequestDto;
import com.muhammet.stoktakipotomasyon.dto.response.ResponseDto;
import com.muhammet.stoktakipotomasyon.entity.Birim;
import com.muhammet.stoktakipotomasyon.service.BirimService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/birim")
@RequiredArgsConstructor
// DİKKAT!!! CrossOrigin illa method üzerinde işlenmek zorunda değğildir. sınıf üzerine tek sefer yazılması yeterlidir.
@CrossOrigin(origins = "*",methods = {RequestMethod.GET, RequestMethod.POST})
public class BirimController {
    private final BirimService birimService;

    @PostMapping("/add-birim")
    //@CrossOrigin("*")
    public ResponseEntity<ResponseDto<Boolean>> addBirim(@RequestBody AddBirimRequestDto dto){
        birimService.save(Birim.builder().aciklama(dto.aciklama()).ad(dto.ad()).build());
        return ResponseEntity.ok(ResponseDto.<Boolean>builder()
                        .code(200)
                        .message("Kayıt eklendi")
                        .data(true)
                .build());
    }

    @GetMapping("/get-all")
    //@CrossOrigin("*")
    public ResponseEntity<ResponseDto<List<Birim>>> getAll(){
        return ResponseEntity.ok(ResponseDto.<List<Birim>>builder()
                        .data(birimService.findAll())
                        .message("Ok")
                        .code(200)
                .build());
    }

}
