package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.CommunityDTO;
import com.Travo.Travobackend.model.entity.Community;
import com.Travo.Travobackend.repository.CommunityRepo;
import com.Travo.Travobackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CommunityService {

    private final CommunityRepo communityRepo;
    private final UserRepository userRepo;

    public Community createPost(CommunityDTO communityDTO) {

        Community community = Community.builder()
                .creator_id(communityDTO.getCreator_id())
                .post_img(communityDTO.getPost_img())
                .description(communityDTO.getDescription())
                .Likes(communityDTO.getLikes())
                .build();

        return communityRepo.save(community);
    }


}
