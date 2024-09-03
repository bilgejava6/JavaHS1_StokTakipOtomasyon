package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.repository.StokIsemiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StokIslemiService {
    private final StokIsemiRepository repository;
}
