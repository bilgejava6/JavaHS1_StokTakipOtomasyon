package com.muhammet.stoktakipotomasyon.controller;

import com.muhammet.stoktakipotomasyon.dto.request.AddYoneticiRequestDto;
import com.muhammet.stoktakipotomasyon.dto.request.DoLoginRequestDto;
import com.muhammet.stoktakipotomasyon.dto.request.RegisterRequestDto;
import com.muhammet.stoktakipotomasyon.dto.response.LoginResponseDto;
import com.muhammet.stoktakipotomasyon.dto.response.ResponseDto;
import com.muhammet.stoktakipotomasyon.entity.State;
import com.muhammet.stoktakipotomasyon.entity.Yonetici;
import com.muhammet.stoktakipotomasyon.service.YoneticiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/yonetici")
@RequiredArgsConstructor
@CrossOrigin("*")
public class YoneticiController {
    private final YoneticiService yoneticiService;

    @PostMapping("/add-yonetici")
    public ResponseEntity<ResponseDto<Boolean>> addYonetici(@RequestBody AddYoneticiRequestDto dto){
        yoneticiService.save(Yonetici.builder()
                        .ad(dto.ad())
                        .soyad(dto.soyad())
                        .avatar(dto.avatar())
                        .email(dto.email())
                        .password(dto.passord())
                        .rolId(dto.rolId())
                        .telefon(dto.telefon())
                        .userName(dto.userName())
                        .state(State.AKTIF)
                .build());
        return ResponseEntity.ok(ResponseDto.<Boolean>builder()
                        .code(200)
                        .message("Kullanıcı Eklendi")
                        .data(true)
                .build());
    }

    @GetMapping("/get-all")
    public ResponseEntity<ResponseDto<List<Yonetici>>> getAll(){
        return ResponseEntity.ok(ResponseDto.<List<Yonetici>>builder()
                        .code(200)
                        .message("Ok")
                        .data(yoneticiService.findAll())
                .build());
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseDto<LoginResponseDto>> doLogin(@RequestBody DoLoginRequestDto dto){
        String token = yoneticiService.doLogin(dto);
        return ResponseEntity.ok(ResponseDto.<LoginResponseDto>builder()
                        .code(200)
                        .message("Giriş yapıldı")
                        .data(new LoginResponseDto(token))
                .build());
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDto<Boolean>> register(@RequestBody RegisterRequestDto dto){
        yoneticiService.register(dto);
        return ResponseEntity.ok(
                ResponseDto.<Boolean>builder()
                        .code(200)
                        .message("Üyelik Başarıyla eklendi")
                        .data(true)
                        .build()
        );
    }
}
