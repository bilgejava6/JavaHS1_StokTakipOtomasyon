package com.muhammet.stoktakipotomasyon.dto.request;

public record AddMarkaRequestDto(
        Long id,
        String ad,
        String aciklama,
        String yetkili,
        String iletisimTel,
        String acikAdres) {
}
