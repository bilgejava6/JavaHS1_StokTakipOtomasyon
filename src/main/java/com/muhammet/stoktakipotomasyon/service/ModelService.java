package com.muhammet.stoktakipotomasyon.service;

import com.muhammet.stoktakipotomasyon.dto.response.ModelListResponseDto;
import com.muhammet.stoktakipotomasyon.entity.Marka;
import com.muhammet.stoktakipotomasyon.entity.Model;
import com.muhammet.stoktakipotomasyon.repository.ModelRepository;
import com.muhammet.stoktakipotomasyon.utility.ServiceManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ModelService  extends ServiceManager<Model,Long> {
    private final ModelRepository modelRepository;
    private final MarkaService markaService;
    public ModelService(ModelRepository modelRepository, MarkaService markaService) {
        super(modelRepository);
        this.modelRepository = modelRepository;
        this.markaService = markaService;
    }

    public List<ModelListResponseDto> findAllModel() {
        List<Marka> markaList = markaService.findAll();
        List<Model> modelList = modelRepository.findAll();
        List<ModelListResponseDto> modelListResponseDtoList = new ArrayList<>();
        modelList.forEach(model->{
            modelListResponseDtoList.add(
                    new ModelListResponseDto(
                            model.getId(),
                            model.getMarkaId(),
                            markaList.stream().filter(x-> x.getId().equals(model.getMarkaId())).findFirst().get().getAd(),
                            model.getModelAdi()
                    )
            );
        });
        return modelListResponseDtoList;
    }
}
