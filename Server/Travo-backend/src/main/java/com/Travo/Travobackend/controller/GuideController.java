package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.RequestDTO;
import com.Travo.Travobackend.model.other.Response;
import com.Travo.Travobackend.service.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/guide")
@RequiredArgsConstructor
public class GuideController {

    @Autowired
    private final GuideService guideService;

    @GetMapping("/requests/{userId}")
    public List<RequestDTO> getRequests(@PathVariable Integer userId){
        return guideService.requests(userId);
    }

//    @GetMapping("/checkHotel/{userID}")
//    public ResponseEntity<Response> checkRequest(@PathVariable Integer hireId){
//        return ResponseEntity.ok(guideService.checkRequest(hireId));
//    }

    @GetMapping("/confirmed/{userId}")
    public List<RequestDTO> getConfirmRequests(@PathVariable Integer userId){

        return guideService.confirmrequests(userId);
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

