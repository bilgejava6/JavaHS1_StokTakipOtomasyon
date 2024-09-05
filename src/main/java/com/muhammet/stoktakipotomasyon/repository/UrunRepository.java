package com.muhammet.stoktakipotomasyon.repository;

import com.muhammet.stoktakipotomasyon.entity.Urun;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UrunRepository  extends JpaRepository<Urun,Long> {
    Page<Urun> findAllByMarkaIdIn(List<Long> markaIdList, Pageable pageable);

    Page<Urun> findAllByModelId(Long modelId, Pageable pageable);

    Page<Urun> findAllByAdContainingIgnoreCase(String urunAdi, Pageable pageable);

    Page<Urun> findAllByFiyatBetween(Double start, Double end, Pageable pageable);

    Page<Urun> findAllByStokAdediLessThanEqual(Integer kritikSeviye, Pageable pageable);
}
