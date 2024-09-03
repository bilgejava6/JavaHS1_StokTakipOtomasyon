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
@Table(name = "tbl_marka")
public class Marka {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String ad;
    String aciklama;
    String yetkili;
    String iletisimTel;
    String acikAdres;
}
