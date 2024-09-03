package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.StokIslemi;
import com.muhammet.stoktakipotomasyon.repository.StokIsemiRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class StokIslemiService  extends ServiceManager<StokIslemi,Long> {
    private final StokIsemiRepository repository;
    public StokIslemiService(StokIsemiRepository repository) {
        super(repository);
        this.repository = repository;
    }
}
