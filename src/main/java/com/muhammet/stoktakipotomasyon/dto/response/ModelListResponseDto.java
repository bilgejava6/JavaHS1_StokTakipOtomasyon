package com.muhammet.stoktakipotomasyon.dto.response;

public record ModelListResponseDto(
        Long id,
        Long markaId,
        String markaAdi,
        String modelAdi
) {
}
