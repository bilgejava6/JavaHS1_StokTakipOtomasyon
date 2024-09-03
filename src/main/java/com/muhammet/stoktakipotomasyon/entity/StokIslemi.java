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
@Table(name = "tbl_stok_islemi")
public class StokIslemi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    Long urunId;
    @Enumerated
    StokIslemTuru stokIslemi;
    Integer miktar;
    Long islemTarihi;
    Long yoneticiId;
    String aciklama;

}
