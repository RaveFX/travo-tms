package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.TravelerDTO;
import com.Travo.Travobackend.model.entity.Traveler;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Travo.Travobackend.service.TravelerService;

import java.io.IOException;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("api/v1/traveler")
@RequiredArgsConstructor
public class TravelerController {
    private final TravelerService travelerService;

    @GetMapping("/details/{travelerId}")
    public ResponseEntity<TravelerDTO> getTravelerDetails(@PathVariable Integer travelerId) throws IOException {
        return ResponseEntity.ok(travelerService.getTravelerDetails(travelerId));
    }

}
