package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.Urun;
import com.muhammet.stoktakipotomasyon.repository.UrunRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
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

    public Page<Urun> findAllByModelId(Long modelId, Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber,pageSize);
        Page<Urun> result = urunRepository.findAllByModelId(modelId,pageable);
        return result;
    }

    public Page<Urun> findAllByUrunAdi(String urunAdi, Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber,pageSize);
        Page<Urun> result = urunRepository.findAllByAdContainingIgnoreCase(urunAdi,pageable);
        return result;
    }

    public Page<Urun> findAllByFiyatBetween(Double start, Double end, Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber,pageSize);
        Page<Urun> result = urunRepository.findAllByFiyatBetween(start,end,pageable); //  where fiyat >= ?  and fiyat<= ?
        return result;
    }

    public Page<Urun> findAllByStokAdediLessThanEqual(Integer kritikSeviye, Integer pageNumber, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNumber,pageSize);
        Page<Urun> result = urunRepository.findAllByStokAdediLessThanEqual(kritikSeviye,pageable);
        return result;
    }
}
