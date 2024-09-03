package com.muhammet.stoktakipotomasyon.repository;

import com.muhammet.stoktakipotomasyon.entity.Marka;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MarkaRepository  extends JpaRepository<Marka,Long> {
    List<Marka> findAllByAdContaining(String markaAdi);

    List<Marka> findAllByAdContainingIgnoreCase(String markaAdi);
}
