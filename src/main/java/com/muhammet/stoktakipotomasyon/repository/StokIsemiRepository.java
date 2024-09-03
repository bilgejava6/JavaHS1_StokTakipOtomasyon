package com.muhammet.stoktakipotomasyon.repository;

import com.muhammet.stoktakipotomasyon.entity.StokIslemi;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StokIsemiRepository extends JpaRepository<StokIslemi,Long> {
}
