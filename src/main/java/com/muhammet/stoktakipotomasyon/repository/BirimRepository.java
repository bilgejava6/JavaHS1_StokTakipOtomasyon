package com.muhammet.stoktakipotomasyon.repository;

import com.muhammet.stoktakipotomasyon.entity.Birim;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BirimRepository  extends JpaRepository<Birim,Long> {
}
