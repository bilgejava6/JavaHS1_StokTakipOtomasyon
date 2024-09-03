package com.muhammet.stoktakipotomasyon.controller;

import com.muhammet.stoktakipotomasyon.dto.request.AddRolRequestDto;
import com.muhammet.stoktakipotomasyon.dto.response.ResponseDto;
import com.muhammet.stoktakipotomasyon.entity.Rol;
import com.muhammet.stoktakipotomasyon.service.RolService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rol")
@RequiredArgsConstructor
@CrossOrigin("*")
public class RolController {
    private final RolService rolService;

    @PostMapping("/add-rol")
    public ResponseEntity<ResponseDto<Boolean>> addRol(@RequestBody AddRolRequestDto dto){
        rolService.save(Rol.builder().aciklama(dto.aciklama()).ad(dto.ad()).yetki(dto.yetki()).build());
        return ResponseEntity.ok(ResponseDto.<Boolean>builder()
                .code(200)
                .message("Rol Eklendi")
                .data(true).build());
    }

    @GetMapping("/get-all")
    public ResponseEntity<ResponseDto<List<Rol>>> getAll(){
        return ResponseEntity.ok(ResponseDto.<List<Rol>>builder()
                        .code(200)
                        .message("Ok")
                        .data(rolService.findAll())
                .build());
    }
}
