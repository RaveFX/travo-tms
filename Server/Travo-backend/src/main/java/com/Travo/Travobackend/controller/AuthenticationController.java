package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.other.*;
import com.Travo.Travobackend.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor


public class AuthenticationController {
    //traveler registration
    private final AuthenticationService service;

    @GetMapping("/checkEmail/{email}")
    public ResponseEntity<Response> checkEmail(@PathVariable String email) {
        return ResponseEntity.ok(service.checkEmail(email));
    }

//    @GetMapping("/checkStore/{userID}")
//    public ResponseEntity<Response> checkStore(@PathVariable Integer userID){
//        return ResponseEntity.ok(service.checkStore(userID));
//    }

    @GetMapping("/checkGuide/{userID}")
    public ResponseEntity<Response> checkGuide(@PathVariable Integer userID){
        return ResponseEntity.ok(service.checkGuide(userID));
    }

    @GetMapping("/checkHotel/{userID}")
    public ResponseEntity<Response> checkHotel(@PathVariable Integer userID){
        return ResponseEntity.ok(service.checkHotel(userID));
    }

    @GetMapping("/checkActivityAgent/{userID}")
    public ResponseEntity<Response> checkActivityAgent(@PathVariable Integer userID){
        return ResponseEntity.ok(service.checkActivityAgent(userID));
    }

    @GetMapping("/checkVehicleRenter/{userID}")
    public ResponseEntity<Response> checkVehicleRenter(@PathVariable Integer userID){
        return ResponseEntity.ok(service.checkVehicleRenter(userID));
    }


    @GetMapping("/checkBRN/{brn}")
    public ResponseEntity<Response> checkBrn(@PathVariable String brn) {
        return ResponseEntity.ok(service.checkBrn(brn));
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/register/hotel/{userID}")
    public ResponseEntity<ServiceRegisterResponse> register_hotel(
            @PathVariable Integer userID,
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_hotel(userID, request));
    }



    @PostMapping("/register/guide/{userID}")
    public ResponseEntity<ServiceRegisterResponse> register_guide(
            @PathVariable Integer userID,
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_guide(userID, request));
    }

    @PostMapping("/register/store/{userID}")
    public ResponseEntity<ServiceRegisterResponse> register_store(
            @PathVariable Integer userID,
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_store(userID, request));
    }

    @PostMapping("/register/vehicle_renter/{userID}")
    public ResponseEntity<ServiceRegisterResponse> register_vehicleRenter(
            @PathVariable Integer userID,
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_vehicleRenter(userID, request));
    }

    @PostMapping("/register/activity_agent/{userID}")
    public ResponseEntity<ServiceRegisterResponse> register_activityAgent(
            @PathVariable Integer userID,
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_activityAgent(userID, request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            HttpServletResponse response,
            @RequestBody AuthenticationRequest request
    ){
        System.out.println("awa");
        return ResponseEntity.ok(service.authenticate(response,request));
    }

    @GetMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }



}
