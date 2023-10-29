package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class CommunityDTO {
    private String firstName;
    private String lastName;
    private int post_id;
    private int creator_id;
    private String description;
    private String post_img;
    private int  Likes;
    private byte[] image;
    private byte[] profileImage;

    public CommunityDTO(String success) {
    }

    public CommunityDTO(String success, String fillAdded) {
    }
}
