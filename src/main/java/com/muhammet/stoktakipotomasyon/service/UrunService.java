package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.Urun;
import com.muhammet.stoktakipotomasyon.repository.UrunRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UrunService  extends ServiceManager<Urun,Long> {
    private final UrunRepository urunRepository;
    private final MarkaService markaService;
    public UrunService(UrunRepository urunRepository, MarkaService markaService) {
        super(urunRepository);
        this.urunRepository = urunRepository;
        this.markaService = markaService;
    }

    public Page<Urun> findAllByMarkaAdi(String markaAdi, Integer pageNumber, Integer pageSize) {
        List<Long> markaIdList = markaService.findAllMarkaIdByMarkaAdi(markaAdi);
        Pageable pageable = PageRequest.of(pageNumber,pageSize);
        Page<Urun> result = urunRepository.findAllByMarkaIdIn(markaIdList, pageable);
        return result;
    }
}
