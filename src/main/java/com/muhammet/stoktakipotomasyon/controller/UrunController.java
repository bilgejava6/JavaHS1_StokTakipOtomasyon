package com.muhammet.stoktakipotomasyon.controller;

import com.muhammet.stoktakipotomasyon.dto.request.AddUrunRequestDto;
import com.muhammet.stoktakipotomasyon.dto.response.ResponseDto;
import com.muhammet.stoktakipotomasyon.entity.Urun;
import com.muhammet.stoktakipotomasyon.service.UrunService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/urun")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UrunController {
    private final UrunService urunService;

    @PostMapping("/add-urun")
    public ResponseEntity<ResponseDto<Boolean>> addUrun(@RequestBody AddUrunRequestDto dto){
        urunService.save(
          Urun.builder()
                  .ad(dto.ad())
                  .aciklama(dto.aciklama())
                  .barkod(dto.barkod())
                  .birimId(dto.birimId())
                  .fiyat(dto.fiyat())
                  .kdv(dto.kdv())
                  .markaId(dto.markaId())
                  .modelId(dto.modelId())
                  .resimUrl(dto.resimUrl())
                  .stokAdedi(dto.stokAdedi())
                  .stokKodu(dto.stokKodu())
                  .toplamFiyat(dto.fiyat()* dto.kdv())
                  .build()
        );
        return ResponseEntity.ok(ResponseDto.<Boolean>builder()
                .code(200)
                .message("Ürün eklendi")
                .data(true).build());
    }
    /**
     * 1- belli bir markaya aiy ürünlerin listesi
     * 2- belli bir model in ürünleri
     * 3- adına göre ürün listesi
     * 4- fiyat aralığına göre listele
     * 5- stoğu azalan ürünler
     */


    /**
     * Burada marka adı verilen yada markaadının bir kısmı girilen değer ile liste içerisinde arama yapılır,
     * sayfa numarası ve sayfada görüntülenecek kayıt sayısı da alınarak arama yapılır ve kısıtlanır.
     * sonuçlar, Page yani, 1 sayfada belirtilen miktarda sonuç ile dönülür  ve ayrıca kaç kayıt olduğu
     * kaç sayfa olduğu gibi bilgilerde dönülür.
     * @param markaAdi
     * @param pageNumber
     * @param pageSize
     * @return
     */
    @GetMapping("/get-urun-list-from-marka-adi")
    public ResponseEntity<ResponseDto<Page<Urun>>> getUrunListFromMarkaAdi(String markaAdi, Integer pageNumber, Integer pageSize){
        return ResponseEntity.ok(ResponseDto.<Page<Urun>>builder()
                        .code(200)
                        .message("Ürünler listelendi.")
                        .data(urunService.findAllByMarkaAdi(markaAdi,pageNumber,pageSize))
                .build());
    }

    @GetMapping("/get-all-from-model-id")
    public ResponseEntity<ResponseDto<Page<Urun>>> getUrunListFromModelId(Long modelId, Integer pageNumber, Integer pageSize){
        return ResponseEntity.ok(ResponseDto.<Page<Urun>>builder()
                .code(200)
                .message("Ürünler listelendi.")
                .data(urunService.findAllByModelId(modelId,pageNumber,pageSize))
                .build());
    }

    @GetMapping("/get-all-by-urun-adi")
    public ResponseEntity<ResponseDto<Page<Urun>>> getAllByUrunAdi(String urunAdi, Integer pageNumber, Integer pageSize){
        return ResponseEntity.ok(ResponseDto.<Page<Urun>>builder()
                .code(200)
                .message("Ürünler listelendi.")
                .data(urunService.findAllByUrunAdi(urunAdi,pageNumber,pageSize))
                .build());
    }

    @GetMapping("/get-all-by-fiyat-between")
    public ResponseEntity<ResponseDto<Page<Urun>>> findAllByFiyatBetween(Double start,Double end,Integer pageNumber, Integer pageSize){
        return ResponseEntity.ok(ResponseDto.<Page<Urun>>builder()
                .code(200)
                .message("Ürünler listelendi.")
                .data(urunService.findAllByFiyatBetween(start,end,pageNumber,pageSize))
                .build());
    }
    @GetMapping("/get-all-stok-azalan")
    public ResponseEntity<ResponseDto<Page<Urun>>> getAllStokuAzalanlar(Integer kritikSeviye, Integer pageNumber, Integer pageSize){
        return ResponseEntity.ok(ResponseDto.<Page<Urun>>builder()
                .code(200)
                .message("Ürünler listelendi.")
                .data(urunService.findAllByStokAdediLessThanEqual(kritikSeviye,pageNumber,pageSize))
                .build());
    }

    @GetMapping("/get-all")
    public ResponseEntity<ResponseDto<List<Urun>>> getAllUrunList(){
        return ResponseEntity.ok(ResponseDto.<List<Urun>>builder()
                .code(200)
                .message("Ürünler listelendi.")
                .data(urunService.findAll())
                .build());
    }
}
