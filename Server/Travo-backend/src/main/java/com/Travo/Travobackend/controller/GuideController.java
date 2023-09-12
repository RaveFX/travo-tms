package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.RequestDTO;
import com.Travo.Travobackend.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/confirmed")
    public List<RequestDTO> getConfirmRequests(){

        return guideService.confirmrequests();
    }

    @PutMapping("/update-status/{hireId}/{newStatus}")
    public void updateStatus(
            @PathVariable Integer hireId,
            @PathVariable Status newStatus
    ) {
        System.out.println("not works" +hireId);
        guideService.updateUserStatus(hireId, newStatus);
    }
  }

