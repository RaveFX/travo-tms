package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.other.AuthenticationRequest;
import com.Travo.Travobackend.model.other.AuthenticationResponse;
import com.Travo.Travobackend.model.other.RegisterRequest;
import com.Travo.Travobackend.model.other.Response;
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
@CrossOrigin("http://127.0.0.1:5173")

public class AuthenticationController {
    //traveler registration
    private final AuthenticationService service;

    @GetMapping("/checkEmail/{email}")
    public ResponseEntity<Response> checkEmail(@PathVariable String email) {
        return ResponseEntity.ok(service.checkEmail(email));
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

    @PostMapping("/register/activity_agent")
    public ResponseEntity<AuthenticationResponse> register_activityAgent(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(service.register_activityAgent(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            HttpServletResponse response,
            @RequestBody AuthenticationRequest request
    ){
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
