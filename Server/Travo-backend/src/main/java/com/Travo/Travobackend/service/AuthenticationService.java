package com.Travo.Travobackend.service;

import com.Travo.Travobackend.config.JwtService;
import com.Travo.Travobackend.enumeration.Membership;
import com.Travo.Travobackend.enumeration.Role;
import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.enumeration.TokenType;
import com.Travo.Travobackend.model.entity.*;
import com.Travo.Travobackend.model.other.*;
import com.Travo.Travobackend.repository.*;
import com.Travo.Travobackend.repository.JDBCDao.ServiceProviderJDBCDao;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final TravelerRepository travelerRepository;
    private final HotelAgentRepository hotelAgentRepository;
    private final VehicleRenterRepository vehicleRenterRepository;
    private final GuideRepository guideRepository;
    private final ActivityAgentRepository activityAgentRepository;
    private final StoreManagerRepository storeManagerRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;

    @Autowired
    private ServiceProviderJDBCDao serviceProviderJDBCDao;

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
        var savedUser = travelerRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser,jwtToken);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .id(user.getUser_id())
                .role(user.getRole())
                .build();

    }

    public Response checkEmail(String email) {
        var user = repository.findByEmail(email);
        if (user.isPresent()) {
            return GlobalService.response("Error", "Email Already Exists");
        } else {
            return GlobalService.response("Success", "Email Available");
        }
    }

    public Response checkBrn(String brn) {
        var hotel = hotelAgentRepository.findByBrn(brn);
        var store = storeManagerRepository.findByBrn(brn);
        var vehicle = vehicleRenterRepository.findByBrn(brn);
        var activity = activityAgentRepository.findByBrn(brn);
        if (hotel.isPresent() || store.isPresent() || vehicle.isPresent() || activity.isPresent()) {
            return GlobalService.response("Error", "Brn Already Exists");
        } else {
            return GlobalService.response("Success", "Brn Available");
        }
    }

    public Response checkStore(Integer userID){
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        var store = storeManagerRepository.findByUserId(user);
        if (store.isPresent()){
            var storeActive = storeManagerRepository.findByUserIdAndStatus(user);
            if(storeActive.isPresent()) {
                return GlobalService.response("Active", "acc active");
            }else{
                return GlobalService.response("Pending", "acc pending");
            }
        }else{
            return GlobalService.response("Error", "acc doesn't exists");
        }
    }

    public Response checkGuide(Integer userID){
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        var guide = guideRepository.findByUserId(user);
        if (guide.isPresent()){
            var guideActive = guideRepository.findByUserIdAndStatus(user);
            if(guideActive.isPresent()) {
                return GlobalService.response("Active", "acc active");
            }else{
                return GlobalService.response("Pending", "acc pending");
            }
        }else{
            return GlobalService.response("Error", "acc doesn't exists");
        }
    }

    public Response checkHotel(Integer userID){
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        var hotel = hotelAgentRepository.findByUserId(user);
        if (hotel.isPresent()){
            var hotelActive = hotelAgentRepository.findByUserIdAndStatus(user);
            if(hotelActive.isPresent()) {
                return GlobalService.response("Active", "acc active");
            }else{
                return GlobalService.response("Pending", "acc pending");
            }
        }else{
            return GlobalService.response("Error", "acc doesn't exists");
        }
    }

    public Response checkActivityAgent(Integer userID){
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        var agent = activityAgentRepository.findByUserId(user);
        if (agent.isPresent()){
            var agentActive = activityAgentRepository.findByUserIdAndStatus(user);
            if(agentActive.isPresent()) {
                return GlobalService.response("Active", "acc active");
            }else{
                return GlobalService.response("Pending", "acc pending");
            }
        }else{
            return GlobalService.response("Error", "acc doesn't exists");
        }
    }

    public Response checkVehicleRenter(Integer userID){
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        var renter = vehicleRenterRepository.findByUserId(user);
        if (renter.isPresent()){
            var renterActive = vehicleRenterRepository.findByUserIdAndStatus(user);
            if(renterActive.isPresent()) {
                return GlobalService.response("Active", "acc active");
            }else{
                return GlobalService.response("Pending", "acc pending");
            }
        }else{
            return GlobalService.response("Error", "acc doesn't exists");
        }
    }

//    public Response checkVehicleRenter(Integer userID){
//        Optional<User> userOptional = repository.findById(userID);
//        User user = userOptional.get();
//        var store = guideRepository.findByUserId(user);
//        //StoreManager store = serviceProviderJDBCDao.findByUser(userID);
//        if (store.isPresent()){
//            var storeActive = storeManagerRepository.findByUserIdAndStatus(user);
//            if(storeActive.isPresent()) {
//                return GlobalService.response("Active", "acc active");
//            }else{
//                return GlobalService.response("Pending", "acc pending");
//            }
//        }else{
//            return GlobalService.response("Error", "acc doesn't exists");
//        }
//    }

    public AuthenticationResponse authenticate(HttpServletResponse response, AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var status = repository.findByEmailAndStatus(request.getEmail())
                .orElseThrow();

            var accessToken = jwtService.generateToken(user);
            var refreshToken = jwtService.generateRefreshToken(user);
            updateUserToken(user, accessToken);
            createCookie(response, refreshToken, 604800);
            revokeAllUserTokens(user);
            return GlobalService.authenticationResponse(
                    accessToken,
                    user.getUser_id(),
                    user.getRole()
            );

    }

    public ServiceRegisterResponse register_hotel(Integer userID, RegisterRequest request) {
        var hotel = HotelAgent.builder()
                .contact_num(request.getContact_num())
                .hotel_name(request.getHotel_name())
                .longitude(request.getLongitude())
                .latitude(request.getLatitude())
                .brn(request.getBrn())
                .membership(Membership.SILVER)
                .status(Status.PENDING)
                .build();
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        hotel.setUser(user);
        var savedUser = hotelAgentRepository.save(hotel);
        return ServiceRegisterResponse.builder()
                .id(hotel.getHotel_id())
                .build();
    }

    public ServiceRegisterResponse register_guide(Integer userID, RegisterRequest request) {
        var guide = Guide.builder()
                .fname(request.getFname())
                .lname(request.getLname())
                .nic(request.getNic())
                .gender(request.getGender())
                .contact_num(request.getContact_num())
                .addressLine1(request.getAddressLine1())
                .addressLine2(request.getAddressLine2())
                .city(request.getCity())
                .district(request.getDistrict())
                .qualifications(request.getQualifications())
                .status(Status.PENDING)
                .build();
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        guide.setUser(user);
        var savedUser = guideRepository.save(guide);
        return ServiceRegisterResponse.builder()
                    .id(guide.getGuide_id())
                    .build();
        }

    public ServiceRegisterResponse register_store(Integer userID, RegisterRequest request) {
        var store = StoreManager.builder()
                .contact_num(request.getContact_num())
                .addressLine1(request.getAddressLine1())
                .addressLine2(request.getAddressLine2())
                .city(request.getCity())
                .district(request.getDistrict())
                .shop_name(request.getShop_name())
                .brn(request.getBrn())
                .membership(Membership.SILVER)
                .status(Status.PENDING)
                .build();
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        store.setUser(user);
        var savedUser = storeManagerRepository.save(store);
        return ServiceRegisterResponse.builder()
                    .id(store.getStore_id())
                    .build();
    }

    public ServiceRegisterResponse register_vehicleRenter(Integer userID, RegisterRequest request) {
        var renter = VehicleRenter.builder()
                .contact_num(request.getContact_num())
                .addressLine1(request.getAddressLine1())
                .addressLine2(request.getAddressLine2())
                .city(request.getCity())
                .district(request.getDistrict())
                .company_name(request.getCompany_name())
                .brn(request.getBrn())
                .membership(Membership.SILVER)
                .status(Status.PENDING)
                .build();
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        renter.setUser(user);
        var savedUser = vehicleRenterRepository.save(renter);
        return ServiceRegisterResponse.builder()
                    .id(renter.getRenter_id())
                    .build();
    }

    public ServiceRegisterResponse register_activityAgent(Integer userID, RegisterRequest request) {
        var agent = ActivityAgent.builder()
                .contact_num(request.getContact_num())
                .company_name(request.getCompany_name())
                .brn(request.getBrn())
                .longitude(request.getLongitude())
                .latitude(request.getLatitude())
                .category(request.getCategory())
                .membership(Membership.SILVER)
                .status(Status.PENDING)
                .build();
        Optional<User> userOptional = repository.findById(userID);
        User user = userOptional.get();
        agent.setUser(user);
        var savedUser = activityAgentRepository.save(agent);
        return ServiceRegisterResponse.builder()
                    .id(agent.getAgent_id())
                    .build();
    }


    private void updateUserToken(User user, String jwtToken) {
        var storedToken = tokenRepository.findByUser_User_id(user.getUser_id()).orElse(null);
        if (storedToken != null) {
            storedToken.setToken(jwtToken);
            storedToken.setExpired(false);
            storedToken.setRevoked(false);
            tokenRepository.save(storedToken);
        }
    }


    private void saveUserToken(User user, String jwtToken) {
        var token = TokenDTO.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(true)
                .revoked(true)
                .build();
        tokenRepository.save(token);
    }

    private void createCookie(HttpServletResponse response, String refreshToken, Integer MaxAge) {
        Cookie refreshTokenCookie = new Cookie("refreshToken", refreshToken);
        refreshTokenCookie.setHttpOnly(true);  // Make the cookie accessible only through HTTP
        refreshTokenCookie.setMaxAge(MaxAge);  // Set the cookie's expiration time in seconds
        refreshTokenCookie.setPath("/");  // Set the cookie's path to the root
        response.addCookie(refreshTokenCookie);
    }

    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String refreshToken = null;
        final String email;

        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("refreshToken")) {
                    refreshToken = cookie.getValue();
                    break;
                }
            }
        }

        if (refreshToken == null) {
            return;
        }

        email = jwtService.extractEmail(refreshToken);
        if (email != null) {
            var user = this.repository.findByEmail(email).orElseThrow();

            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                updateUserToken(user, accessToken);
                var authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .id(user.getUser_id())
                        .role(user.getRole())
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }

    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getUser_id());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }


}
