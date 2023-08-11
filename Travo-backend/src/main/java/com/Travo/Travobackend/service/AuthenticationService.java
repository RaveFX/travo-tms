package com.Travo.Travobackend.service;

import com.Travo.Travobackend.config.JwtService;
import com.Travo.Travobackend.enumeration.Membership;
import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.entity.*;
import com.Travo.Travobackend.model.other.RegisterRequest;
import com.Travo.Travobackend.enumeration.Role;
import com.Travo.Travobackend.model.other.AuthenticationRequest;
import com.Travo.Travobackend.model.other.AuthenticationResponse;
import com.Travo.Travobackend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final TravelerRepository travelerRepository;
    private final HotelAgentRepository hotelAgentRepository;
    private final VehicleRenterRepository vehicleRenterRepository;
    private final GuideRepository guideRepository;
    private final StoreManagerRepository storeManagerRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    //traveler signup
    public AuthenticationResponse register(RegisterRequest request) {
        var user = Traveler.builder()
                .fname(request.getFname())
                .lname(request.getLname())
                .email(request.getEmail())
                .profileImage("profileImage.jpg")
                .password(passwordEncoder.encode((request.getPassword())))
                .role(Role.TRAVELLER)
                .status(Status.ACTIVE)
                .build();
        travelerRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();

    }

    public AuthenticationResponse register_hotel(RegisterRequest request) {
        var user = HotelAgent.builder()
                .email(request.getEmail())
                .contact_num(request.getContact_num())
                .addressLine1(request.getAddressLine1())
                .addressLine2(request.getAddressLine2())
                .city(request.getCity())
                .district(request.getDistrict())
                .hotel_name(request.getHotel_name())
                .brn(request.getBrn())
                .profileImage("profileImage.jpg")
                .password(passwordEncoder.encode((request.getPassword())))
                .role(Role.HOTEL_AGENT)
                .membership(Membership.SILVER)
                .status(Status.PENDING)
                .build();
        hotelAgentRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse register_guide(RegisterRequest request) {
        var user = Guide.builder()
                .fname(request.getFname())
                .lname(request.getLname())
                .email(request.getEmail())
                .nic(request.getNic())
                .gender(request.getGender())
                .addressLine1(request.getAddressLine1())
                .addressLine2(request.getAddressLine2())
                .city(request.getCity())
                .district(request.getDistrict())
                .qualifications(request.getQualifications())
                .profileImage("profileImage.jpg")
                .password(passwordEncoder.encode((request.getPassword())))
                .role(Role.GUIDE)
                .status(Status.PENDING)
                .build();
        guideRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse register_store(RegisterRequest request) {
        var user = StoreManager.builder()
                .email(request.getEmail())
                .contact_num(request.getContact_num())
                .addressLine1(request.getAddressLine1())
                .addressLine2(request.getAddressLine2())
                .city(request.getCity())
                .district(request.getDistrict())
                .shop_name(request.getShop_name())
                .brn(request.getBrn())
                .profileImage("profileImage.jpg")
                .password(passwordEncoder.encode((request.getPassword())))
                .membership(Membership.SILVER)
                .role(Role.STORE_MANAGER)
                .status(Status.PENDING)
                .build();
        storeManagerRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse register_vehicleRenter(RegisterRequest request) {
        var user = VehicleRenter.builder()
                .email(request.getEmail())
                .contact_num(request.getContact_num())
                .addressLine1(request.getAddressLine1())
                .addressLine2(request.getAddressLine2())
                .city(request.getCity())
                .district(request.getDistrict())
                .company_name(request.getCompany_name())
                .brn(request.getBrn())
                .profileImage("profileImage.jpg")
                .password(passwordEncoder.encode((request.getPassword())))
                .membership(Membership.SILVER)
                .role(Role.VEHICLE_RENTER)
                .status(Status.PENDING)
                .build();
        vehicleRenterRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
