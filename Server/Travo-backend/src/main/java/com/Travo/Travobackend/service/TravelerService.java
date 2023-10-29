package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.TravelerDTO;
import com.Travo.Travobackend.model.entity.Community;
import com.Travo.Travobackend.model.entity.Traveler;
import com.Travo.Travobackend.model.entity.User;
import com.Travo.Travobackend.repository.TravelerRepository;
import com.Travo.Travobackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
@RequiredArgsConstructor
public class TravelerService {
    private final UserRepository userRepository;
    private final TravelerRepository travelerRepository;

    public TravelerDTO getTravelerDetails(Integer travelerId) throws IOException {
        Traveler traveler = travelerRepository.findDetailsById(travelerId);

        return TravelerDTO.builder()
                .firstname(traveler.getFirstname())
                .lastname(traveler.getLastname())
                .addressLine1(traveler.getAddressLine1())
                .addressLine2(traveler.getAddressLine2())
                .city(traveler.getCity())
                .contact_num(traveler.getContact_num())
                .DOB(traveler.getDOB())
                .district(traveler.getDistrict())
                .emergency_contact(traveler.getEmergency_contact())
                .build();
    }



}
