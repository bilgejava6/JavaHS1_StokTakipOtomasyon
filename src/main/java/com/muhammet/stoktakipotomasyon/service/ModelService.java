package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.entity.Model;
import com.muhammet.stoktakipotomasyon.repository.ModelRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class ModelService  extends ServiceManager<Model,Long> {
    private final ModelRepository modelRepository;
    public ModelService(ModelRepository modelRepository) {
        super(modelRepository);
        this.modelRepository = modelRepository;
    }
}
