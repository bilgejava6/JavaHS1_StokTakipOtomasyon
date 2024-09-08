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

    public Marka save(Marka marka){
      Boolean isMarka =  findByMarkaAdi(marka.getAd());
      if (isMarka) throw new StokTakipException(ErrorType.BAD_REQUEST_MARKA_ADI_ZATEN_KAYITLI);
      return markaRepository.save(marka);
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

    public Boolean findByMarkaAdi(String markaAdi) {
        /**
         * Bu işlem için önerlerim,
         * 1- Elasticsearch kullanmak en iyisi.
         * 2- Redis Kullanarak marka adlarının listesini tutmak ve burada arama yapmak.
         * 3- Veritabanındanki tüm markaların adlarını çekersiniz ve bunun içerisinden sorgulama yaparsınız.
         * 4- En hantal yöntem olarak direkt DB den kriterlere göre arama yaparak
         * çözebilirsiniz.
         *
         * ViewSonic -> View Sonic
         * ElasticSearch -> vievsonic
         */
        List<String> markaList = markaRepository.findAllMarkaAdList();
        Optional<String> result = markaList.stream().filter(x->
                x.equals(markaAdi) ||
                x.trim().toLowerCase().equals(markaAdi.trim().toLowerCase()) ||
                x.toLowerCase()
                        .replaceAll(" ","")
                        .replace("ş","s")
                        .replace("ç","c")
                        .replace("ü","u")
                        .replace("ğ","g")
                        .replace("ı","i").equals(
                                markaAdi.toLowerCase()
                                        .replaceAll(" ","")
                                        .replace("ş","s")
                                        .replace("ç","c")
                                        .replace("ü","u")
                                        .replace("ğ","g")
                                        .replace("ı","i")
                        )
        ).findAny();
        return result.isPresent();
    }
}
