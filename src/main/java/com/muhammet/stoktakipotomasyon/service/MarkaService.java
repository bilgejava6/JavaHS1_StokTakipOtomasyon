package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.dto.request.AddMarkaRequestDto;
import com.muhammet.stoktakipotomasyon.dto.request.AddUrunRequestDto;
import com.muhammet.stoktakipotomasyon.entity.Marka;
import com.muhammet.stoktakipotomasyon.exceptions.ErrorType;
import com.muhammet.stoktakipotomasyon.exceptions.StokTakipException;
import com.muhammet.stoktakipotomasyon.repository.MarkaRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public void editMarka(AddMarkaRequestDto dto) {
        Optional<Marka> optionalMarka = markaRepository.findById(dto.id());
        if(optionalMarka.isEmpty()) throw new StokTakipException(ErrorType.BAD_REQUEST_INVALID_MARKA_ID);
        Marka marka = optionalMarka.get();
        marka.setAcikAdres(dto.acikAdres());
        marka.setAciklama(dto.aciklama());
        marka.setAd(dto.ad());
        marka.setIletisimTel(dto.iletisimTel());
        marka.setYetkili(dto.yetkili());
        markaRepository.save(marka);
    }
}
