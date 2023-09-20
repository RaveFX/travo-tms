package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.CommunityDTO;
import com.Travo.Travobackend.model.entity.Community;
import com.Travo.Travobackend.service.CommunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/community")
@RequiredArgsConstructor
public class CommunityController {

    private final CommunityService communityService;

    @PostMapping("/create-post")
    public ResponseEntity<Community> createPost(@RequestBody CommunityDTO communityDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(communityService.createPost(communityDTO));
    }
}
