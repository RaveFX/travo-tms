package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.dto.CommunityDTO;
import com.Travo.Travobackend.model.entity.Community;
import com.Travo.Travobackend.service.CommunityService;
import com.Travo.Travobackend.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/v1/community")
@RequiredArgsConstructor
public class CommunityController {

    private final CommunityService communityService;
    private final ImageService imageService;

    @PostMapping("/create-post")
    public ResponseEntity<Community> createPost(@RequestBody CommunityDTO communityDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(communityService.createPost(communityDTO));
    }

    @PostMapping("/upload-image")
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile image) {

        try {
            String imageUrl = imageService.uploadImage(image); // Implement image upload logic here
            System.out.println(imageUrl);
            return ResponseEntity.ok(imageUrl); // Return the image URL
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading image");
        }
    }

   @GetMapping("all-post")
    public ResponseEntity<List<CommunityDTO>> getAllPost() throws IOException {

        List<CommunityDTO> community = communityService.getAllPost();
        if(community != null){
            return ResponseEntity.ok(community);
        }else {
            return ResponseEntity.ok(null);
        }
    }

    //Function to get the images
//    @GetMapping("/post_img/{id}")
//    public ResponseEntity<byte[]> getPostImg(@PathVariable Integer id) throws IOException {
//
//
//        return ResponseEntity.ok().body(images);
//}
//    @PutMapping("/post")
//    public ResponseEntity<Object> Post(@RequestBody CommunityDTO communityDTO){
//        return ResponseEntity.ok(communityService.Post(communityDTO));
//    }

}
