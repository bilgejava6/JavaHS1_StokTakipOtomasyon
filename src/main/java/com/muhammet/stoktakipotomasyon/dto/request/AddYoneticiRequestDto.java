package com.muhammet.stoktakipotomasyon.dto.request;


public record AddYoneticiRequestDto(
        String ad,
        String soyad,
        String telefon,
        String email,
        String userName,
        String passord,
        Long rolId,
        String avatar
) {
}
