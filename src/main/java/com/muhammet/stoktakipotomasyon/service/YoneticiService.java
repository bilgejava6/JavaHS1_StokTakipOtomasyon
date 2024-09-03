package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.config.JwtManager;
import com.muhammet.stoktakipotomasyon.dto.request.DoLoginRequestDto;
import com.muhammet.stoktakipotomasyon.dto.response.LoginResponseDto;
import com.muhammet.stoktakipotomasyon.entity.Yonetici;
import com.muhammet.stoktakipotomasyon.exceptions.ErrorType;
import com.muhammet.stoktakipotomasyon.exceptions.StokTakipException;
import com.muhammet.stoktakipotomasyon.repository.YoneticiRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service

public class YoneticiService  extends ServiceManager<Yonetici,Long> {
    private final YoneticiRepository yoneticiRepository;
    private final JwtManager jwtManager;
    public YoneticiService(YoneticiRepository yoneticiRepository,
                           JwtManager jwtManager) {
        super(yoneticiRepository);
        this.yoneticiRepository = yoneticiRepository;
        this.jwtManager = jwtManager;
    }

    public String doLogin(DoLoginRequestDto dto) {
       Optional<Yonetici> yoneticiOptional =
               yoneticiRepository.findOptionalByUserNameAndPassword(dto.userName(),dto.password());
       if(yoneticiOptional.isEmpty()) throw new StokTakipException(ErrorType.BAD_REQUEST_USERNAME_OR_PASSWORD_ERROR);
       Yonetici yonetici = yoneticiOptional.get();
       return jwtManager.createToken(yonetici.getId());
    }
}
