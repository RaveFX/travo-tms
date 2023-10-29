package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.CommunityDTO;
import com.Travo.Travobackend.model.entity.Community;
import com.Travo.Travobackend.model.entity.Traveler;
import com.Travo.Travobackend.repository.CommunityRepo;
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
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommunityService {

    private final CommunityRepo communityRepo;
    private final TravelerRepository travelerRepo;

    public Community createPost(CommunityDTO communityDTO) {

        Community community = Community.builder()
                .creator_id(communityDTO.getCreator_id())
                .post_img(communityDTO.getPost_img())
                .description(communityDTO.getDescription())
                .Likes(communityDTO.getLikes())
                .build();

        return communityRepo.save(community);
    }


    public Object Post(CommunityDTO communityDTO) {
        Community existingPost = communityRepo.findById((long) communityDTO.getPost_id()).orElse(null);

        if(existingPost != null){

            System.out.println("Likes");
            existingPost.setLikes(communityDTO.getLikes());
            return communityRepo.save(existingPost);
        }else{
            return new CommunityDTO("Post not found");
        }
    }

    // Function getPost with parameter id with default value null
     public List<CommunityDTO> getAllPost(Long creatorId) throws IOException {
         List<Community> posts;
         if (creatorId == null) {
            posts = communityRepo.findAll();
        } else {
            posts = communityRepo.findPostsByCreatorId(creatorId);
        }
        // Initialize CommunityDTO list
        List<CommunityDTO> communityDTOList = new ArrayList<>();

        String rootDirectory = System.getProperty("user.dir");
        String imageUploadPath = rootDirectory + "/src/main/resources/static/posts/images";
         String profileImageUploadPath = rootDirectory + "/src/main/resources/static/profile/profileImages";
        //For each to traverse posts lists
        for(Community post : posts){
            //Add the images to send to the frontend
            Path imagePath = Paths.get(imageUploadPath, post.getPost_img());
            byte[] image = Files.readAllBytes(imagePath);

            var creator = travelerRepo.findById(post.getCreator_id()).orElse(null);
            Path profileImagePath = Paths.get(profileImageUploadPath, creator.getProfileImage());
            byte[] profileImage = Files.readAllBytes(profileImagePath);

            var c = CommunityDTO.builder()
                    .post_id(post.getPost_id())
                    .creator_id(post.getCreator_id())
                    .firstName(creator.getFirstname())
                    .lastName(creator.getLastname())
                    .profileImage(profileImage)
                    .description(post.getDescription())
                    .Likes(post.getLikes())
                    .image(image)
                    .build();

            communityDTOList.add(c);

        }

        return communityDTOList;

    }

}
