package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.repository.ModelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ModelService {
    private final ModelRepository modelRepository;
}
