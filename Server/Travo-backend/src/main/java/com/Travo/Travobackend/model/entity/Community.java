package com.Travo.Travobackend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Data
@Table(name = "Community")
public class Community {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int post_id;
    private int creator_id;
    private String description;
    private String post_img;
    private int  Likes;

}
