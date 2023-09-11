package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.RequestDTO;
import com.Travo.Travobackend.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/guide")
@RequiredArgsConstructor
public class GuideController {

    @Autowired
    private final GuideService guideService;

    @GetMapping("/requests")
    public List<RequestDTO> getRequests(){

        return guideService.requests();
    }
//    @GetMapping("/requestsMore")
//    public List<RequestDTO> getRequestsMore(){
//
//        return guideService.requestsMore();
//    }

//    @GetMapping("/tours")
//    public List<ToursDTO> getTours(){
//
//        return guideService.requests();
//    }
}
