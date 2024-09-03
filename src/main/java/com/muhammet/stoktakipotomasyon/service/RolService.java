package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.repository.RolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RolService {
    private final RolRepository rolRepository;
}
