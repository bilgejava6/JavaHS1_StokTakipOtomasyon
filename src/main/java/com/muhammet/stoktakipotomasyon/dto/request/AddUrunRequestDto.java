package com.muhammet.stoktakipotomasyon.dto.request;

public record AddUrunRequestDto(
        String ad,
        String aciklama,
        String stokKodu,
        Long barkod,
        Long markaId,
        Long modelId,
        Double fiyat,
        Integer kdv,
        Integer stokAdedi,
        String resimUrl,
        Long birimId
) {
}
