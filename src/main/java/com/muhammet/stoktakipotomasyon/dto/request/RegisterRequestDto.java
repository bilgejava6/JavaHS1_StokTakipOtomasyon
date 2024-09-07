package com.muhammet.stoktakipotomasyon.dto.request;

public record RegisterRequestDto(
        String userName,
        String password,
        String email
) {
}
