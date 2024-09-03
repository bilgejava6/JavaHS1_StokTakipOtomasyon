package com.muhammet.stoktakipotomasyon.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "tbl_urun")
public class Urun {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String ad;
    String aciklama;
    String stokKodu;
    Long barkod;
    Long markaId;
    Long modelId;
    Double fiyat;
    Integer kdv;
    Double toplamFiyat;
    Integer stokAdedi;
    String resimUrl;
    Long birimId;
}
