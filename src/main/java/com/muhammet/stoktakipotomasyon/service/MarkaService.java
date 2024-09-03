package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.Marka;
import com.muhammet.stoktakipotomasyon.repository.MarkaRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import org.springframework.stereotype.Service;

@Service
public class MarkaService extends ServiceManager<Marka,Long> {
    private final MarkaRepository markaRepository;
    public MarkaService(MarkaRepository markaRepository) {
        super(markaRepository);
        this.markaRepository = markaRepository;
    }
}
