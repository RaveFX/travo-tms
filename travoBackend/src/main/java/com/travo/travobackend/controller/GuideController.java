package com.travo.travobackend.controller;

import com.travo.travobackend.model.Guide;
import com.travo.travobackend.repository.GuideRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GuideController {
    @Autowired
    private GuideRepository guideRepository;

    @PostMapping("/guide")
    Guide newGuide(@RequestBody Guide newGuide){
        return guideRepository.save(newGuide);
    }
    @GetMapping("/guides")
    List<Guide> getallGuides(){
        return guideRepository.findAll();
    }
}
