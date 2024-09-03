package com.muhammet.stoktakipotomasyon.controller;

import com.muhammet.stoktakipotomasyon.service.ModelService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class ModelController {
    private final ModelService modelService;
}
