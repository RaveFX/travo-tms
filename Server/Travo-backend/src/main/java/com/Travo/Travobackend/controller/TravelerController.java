package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.TravelerDTO;
import com.Travo.Travobackend.model.entity.Traveler;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Travo.Travobackend.service.TravelerService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/v1/traveler")
@RequiredArgsConstructor
public class TravelerController {

    private final TravelerService travelerService;

    @GetMapping("/search/{keyword}")
    public ResponseEntity<List<TravelerDTO>> search(@PathVariable String keyword) throws IOException {
        List<TravelerDTO> result = travelerService.search(keyword);
        if (result != null && !result.isEmpty()) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/details/{travelerId}")
    public ResponseEntity<TravelerDTO> getTravelerDetails(@PathVariable Integer travelerId) throws IOException {
        return ResponseEntity.ok(travelerService.getTravelerDetails(travelerId));
    }


    // update user information by traveler
    @PutMapping("/update/{travelerId}")
    public ResponseEntity<TravelerDTO> updateTravelerDetails(@PathVariable Integer travelerId, @RequestBody TravelerDTO travelerDTO) throws IOException {
        return ResponseEntity.ok(travelerService.updateTravelerDetails(travelerId, travelerDTO));
    }

}

