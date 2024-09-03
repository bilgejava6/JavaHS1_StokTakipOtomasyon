package com.muhammet.stoktakipotomasyon.controller;

import com.muhammet.stoktakipotomasyon.service.StokIslemiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class StokController {
    private final StokIslemiService stokIslemiService;

}
