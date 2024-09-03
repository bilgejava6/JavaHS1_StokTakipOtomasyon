package com.muhammet.stoktakipotomasyon.dto.request;

public record AddMarkaRequestDto(
        String ad,
        String aciklama,
        String yetkili,
        String iletisimTel,
        String acikAdres) {
}
