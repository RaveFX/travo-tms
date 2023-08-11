package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.other.AuthenticationRequest;
import com.Travo.Travobackend.model.other.AuthenticationResponse;
import com.Travo.Travobackend.model.other.RegisterRequest;
import com.Travo.Travobackend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin("http://127.0.0.1:5173")

public class AuthenticationController {
    //traveler registration
    private final AuthenticationService service;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/register/hotel")
    public ResponseEntity<AuthenticationResponse> register_hotel(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_hotel(request));
    }



    @PostMapping("/register/guide")
    public ResponseEntity<AuthenticationResponse> register_guide(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_guide(request));
    }

    @PostMapping("/register/store")
    public ResponseEntity<AuthenticationResponse> register_store(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_store(request));
    }

    @PostMapping("/register/vehicle_renter")
    public ResponseEntity<AuthenticationResponse> register_vehicleRenter(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_vehicleRenter(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }


}
