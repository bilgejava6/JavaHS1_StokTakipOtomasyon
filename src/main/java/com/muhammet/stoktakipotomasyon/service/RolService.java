package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.Rol;
import com.muhammet.stoktakipotomasyon.repository.RolRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class RolService  extends ServiceManager<Rol,Long> {
    private final RolRepository rolRepository;
    public RolService(RolRepository rolRepository) {
        super(rolRepository);
        this.rolRepository = rolRepository;
    }
}
