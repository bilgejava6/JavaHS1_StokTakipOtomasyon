package com.muhammet.stoktakipotomasyon.repository;

import com.muhammet.stoktakipotomasyon.entity.Urun;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UrunRepository  extends JpaRepository<Urun,Long> {
}
