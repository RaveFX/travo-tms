package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.CommunityDTO;
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
import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
@RequiredArgsConstructor
public class TravelerService {
    private final UserRepository userRepository;
    private final TravelerRepository travelerRepository;

    public TravelerDTO getTravelerDetails(Integer travelerId) throws IOException {
        Traveler traveler = travelerRepository.findDetailsById(travelerId);

        return TravelerDTO.builder()
                .email(traveler.getEmail())
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

    public List<TravelerDTO> search(String Keyword) throws IOException {

        String[] keywords = Keyword.split(" ");
        String name;
        String firstname;
        String lastname;
        List<Traveler> result;

        String rootDirectory = System.getProperty("user.dir");
        String profileImageUploadPath = rootDirectory + "/src/main/resources/static/profile/profileImages";

        if(keywords.length == 1){
            name = keywords[0];
            result = travelerRepository.findByName(name);
        } else if (keywords.length == 2){
            firstname = keywords[0];
            lastname = keywords[1];
            result = travelerRepository.findByNames(firstname,lastname);
        } else {
            return null;
        }

        List<TravelerDTO> travelerDTOList = new ArrayList<>();

        for(Traveler traveler : result){

            var t = travelerRepository.findById(traveler.getUser_id()).orElse(null);
            Path profileImagePath = Paths.get(profileImageUploadPath, t.getProfileImage());
            byte[] profileImage = Files.readAllBytes(profileImagePath);

            var c = TravelerDTO.builder()
                    .id(traveler.getUser_id())
                    .firstname(traveler.getFirstname())
                    .lastname(traveler.getLastname())
                    .profileImage(profileImage)
                    .build();

            travelerDTOList.add(c);

        }

        return travelerDTOList;

    }

    public TravelerDTO updateTravelerDetails(Integer travelerId, TravelerDTO travelerDTO) {
        Traveler traveler = travelerRepository.findDetailsById(travelerId);

        traveler.setFirstname(travelerDTO.getFirstname());
        traveler.setLastname(travelerDTO.getLastname());
        traveler.setAddressLine1(travelerDTO.getAddressLine1());
        traveler.setAddressLine2(travelerDTO.getAddressLine2());
        traveler.setCity(travelerDTO.getCity());
        traveler.setContact_num(travelerDTO.getContact_num());
        traveler.setDOB(travelerDTO.getDOB());
        traveler.setDistrict(travelerDTO.getDistrict());
        traveler.setEmergency_contact(travelerDTO.getEmergency_contact());

        travelerRepository.save(traveler);

        return travelerDTO;
    }
}
