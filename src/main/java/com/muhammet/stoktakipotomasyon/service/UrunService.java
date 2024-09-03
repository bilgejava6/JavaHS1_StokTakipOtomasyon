package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.Urun;
import com.muhammet.stoktakipotomasyon.repository.UrunRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class UrunService  extends ServiceManager<Urun,Long> {
    private final UrunRepository urunRepository;
    public UrunService(UrunRepository urunRepository) {
        super(urunRepository);
        this.urunRepository = urunRepository;
    }
}
