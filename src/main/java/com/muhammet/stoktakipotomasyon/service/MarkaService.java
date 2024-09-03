package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.repository.MarkaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MarkaService {
    private final MarkaRepository markaRepository;
}
