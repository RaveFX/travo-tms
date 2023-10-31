package com.Travo.Travobackend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

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

    @GetMapping("/famous-places")
    public ResponseEntity<String> getFamousPlaces() {
        String query = "famous places in Sri Lanka"; // You can customize the query further
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

    @GetMapping("/temples")
    public ResponseEntity<String> getTemples() {
        String query = "temples in Sri Lanka";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

    @GetMapping("/rivers")
    public ResponseEntity<String> getRivers() {
        String query = "Rivers and Lakes in Sri Lanka";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

    @GetMapping("/waterfalls")
    public ResponseEntity<String> getWaterfalls() {
        String query = "waterfalls in Sri Lanka";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

    @GetMapping("/places-in-kandy")
    public ResponseEntity<String> getPlacesInKandy() {
        String query = "places to visit in Kandy";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

    @GetMapping("/places-in-galle")
    public ResponseEntity<String> getPlacesInGalle() {
        String query = "places to visit in Galle";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

    @GetMapping("/places-in-matara")
    public ResponseEntity<String> getPlacesInMatara() {
        String query = "places to visit in Matara";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

    @GetMapping("/places-in-trincomalee")
    public ResponseEntity<String> getPlacesInTrincomalee() {
        String query = "places to visit in Trincomalee";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }
    @GetMapping("/places-in-nuwaraeliya")
    public ResponseEntity<String> getPlacesInNuwaraEliya() {
        String query = "places to visit in Nuwara Eliya";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

    @GetMapping("/places-in-jaffna")
    public ResponseEntity<String> getPlacesInJaffna() {
        String query = "places to visit in Jaffna";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }
    @GetMapping("/places-in-colombo")
    public ResponseEntity<String> getPlacesInColombo() {
        String query = "places to visit in Colombo";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }
    @GetMapping("/places-in-anuradhapura")
    public ResponseEntity<String> getPlacesInAnuradhapura() {
        String query = "places to visit in Anuradhapura";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

    @GetMapping("/places-in-polonnaruwa")
    public ResponseEntity<String> getPlacesInPolonnaruwa() {
        String query = "places to visit in Polonnaruwa";
        String apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&key=" + googleMapsApiKey;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }




}
