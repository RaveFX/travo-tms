package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.UserInformationDTO;
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

    @GetMapping("/information")
    public List<UserInformationDTO> getInformation() {
        return userService.userInformation();
    }

    @PutMapping("/update-status/{userId}/{newStatus}")
    public void updateStatus(
            @PathVariable Integer userId,
            @PathVariable Status newStatus
    ) {
        System.out.println("not works" +userId);
        userService.updateUserStatus(userId, newStatus);
    }




}
