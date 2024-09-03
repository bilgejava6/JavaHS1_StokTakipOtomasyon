package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.Birim;
import com.muhammet.stoktakipotomasyon.repository.BirimRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import org.springframework.stereotype.Service;

@Service
public class BirimService extends ServiceManager<Birim,Long> {

    private final BirimRepository birimRepository;
    public BirimService(BirimRepository birimRepository) {
        super(birimRepository);
        this.birimRepository = birimRepository;
    }

}
