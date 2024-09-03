package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.Marka;
import com.muhammet.stoktakipotomasyon.repository.MarkaRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarkaService extends ServiceManager<Marka,Long> {
    private final MarkaRepository markaRepository;
    public MarkaService(MarkaRepository markaRepository) {
        super(markaRepository);
        this.markaRepository = markaRepository;
    }

    /**
     * Marka adı verilen ya da marka adının bir kısmı verilen değer ile arama yapılarak
     * uyan tüm kayıtların id bilgisi dönülür.
     * @param markaAdi
     * @return
     */
    public List<Long> findAllMarkaIdByMarkaAdi(String markaAdi){
       List<Marka> markaList = markaRepository.findAllByAdContainingIgnoreCase(markaAdi);
       return markaList.stream().map(y-> y.getId()).toList();
    }
}
