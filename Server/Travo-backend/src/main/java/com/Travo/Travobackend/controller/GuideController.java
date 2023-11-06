package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.GuideInfoDTO;
import com.Travo.Travobackend.model.dto.RequestDTO;
import com.Travo.Travobackend.model.dto.ReviewDTO;
import com.Travo.Travobackend.model.other.RegisterRequest;
import com.Travo.Travobackend.model.other.Response;
import com.Travo.Travobackend.model.other.ServiceRegisterResponse;
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



    @GetMapping("/confirmed/{userId}")
    public List<RequestDTO> getConfirmRequests(@PathVariable Integer userId){

        return guideService.confirmrequests(userId);
    }

    @GetMapping("/reviews/{userId}")
    public List<ReviewDTO> getReviews(@PathVariable Integer userId){

        return guideService.reviews(userId);
    }
    @GetMapping("/info/{userId}")
    public List<GuideInfoDTO> getInfo(@PathVariable Integer userId){

        return guideService.info(userId);
    }

//    @PostMapping("/saveTours/{tourID}")
//    public ResponseEntity<ServiceRegisterResponse> save_tours(
//            @PathVariable Integer tourID,
//            @RequestBody RegisterRequest request
//    ){
//        return ResponseEntity.ok(guideService.save_tours(tourID, request));
//    }

    @PutMapping("/update-status/{hireId}/{newStatus}")
    public void updateStatus(
            @PathVariable Integer hireId,
            @PathVariable Status newStatus
    ) {
        System.out.println("not works" +hireId);
        guideService.updateUserStatus(hireId, newStatus);
    }
  }

