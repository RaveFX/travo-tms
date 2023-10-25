package com.Travo.Travobackend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/v1/places")
@RequiredArgsConstructor
public class AttractionsController {
    @Value("${google.maps.api.key}") // Inject your Google Maps API key from application.properties
    private String googleMapsApiKey;

    @GetMapping("/attractions")
    public ResponseEntity<String> getAttractions() {
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+in+Sri+Lanka&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }
}
