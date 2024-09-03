package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.repository.YoneticiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class YoneticiService {
    private final YoneticiRepository yoneticiRepository;
}
