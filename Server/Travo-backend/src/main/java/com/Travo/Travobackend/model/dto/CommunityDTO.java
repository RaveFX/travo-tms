package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CommunityDTO {
    private int post_id;
    private int creator_id;
    private String description;
    private String post_img;
    private int  Likes;

}
