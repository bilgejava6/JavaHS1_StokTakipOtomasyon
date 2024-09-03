package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.Yonetici;
import com.muhammet.stoktakipotomasyon.repository.YoneticiRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import org.springframework.stereotype.Service;

@Service
public class YoneticiService  extends ServiceManager<Yonetici,Long> {
    private final YoneticiRepository yoneticiRepository;
    public YoneticiService(YoneticiRepository yoneticiRepository) {
        super(yoneticiRepository);
        this.yoneticiRepository = yoneticiRepository;
    }
}
