package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.UserInformationDTO;
import com.Travo.Travobackend.model.dto.VehicleRenterDTO;
import com.Travo.Travobackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;
import com.Travo.Travobackend.enumeration.Status;


import java.util.List;



@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor

public class UserController {
    private final UserService userService;

    @GetMapping("/information/")
    public List<UserInformationDTO> getInformation() {
        return userService.userInformation();
    }

    @PutMapping("/update-status/{userId}/{newStatus}")
    public void updateStatus(
            @PathVariable Integer userId,
            @PathVariable Status newStatus
    ) {
//        System.out.println("not works" +userId);
        userService.updateUserStatus(userId, newStatus);
    }

    @GetMapping("/pending/information")
    public List<UserInformationDTO> getpendinginfomation() {
        return userService.pendingUsers();
    }

    @GetMapping("/information/{userId}")
    public List<VehicleRenterDTO> getPendingVehicleRenter(@PathVariable int userId) {
        return userService.getPendingVehicleRenters(userId);
    }
    @GetMapping("/information-hotel/{userId}")
    public List<HotelDTO> getPendingHotel(@PathVariable int userId) {
        return userService.getPendingHotel(userId);
    }

    @PutMapping("/update-status-verenter/{userId}/{newStatus}")
    public void updateVehicleRenterStatus(
            @PathVariable Integer userId,
            @PathVariable Status newStatus
    ) {
        System.out.println("not works" +userId);
        userService.updateVehicleRenterStatus(userId, newStatus);
    }

    @GetMapping("/userpersonalinfo/{userId}")
    public List<UserInformationDTO> getUserpersonalinfo(@PathVariable int userId) {
        return userService.getUserpersonalinfo(userId);
    }




}
