package com.muhammet.stoktakipotomasyon.repository;

import com.muhammet.stoktakipotomasyon.entity.Yonetici;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface YoneticiRepository extends JpaRepository<Yonetici,Long> {
    Optional<Yonetici> findOptionalByUserNameAndPassword(String s, String password);
}
