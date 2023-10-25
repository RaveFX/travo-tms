package com.Travo.Travobackend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "trip_members")
public class TripMembers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer member_id;
    private Integer user_id;
    private Integer trip_id;
    private String member_fname;
    private String image;
    private boolean trip_admin;

    public Integer getMember_id() {
        return member_id;
    }

    public void setMember_id(Integer member_id) {
        this.member_id = member_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getTrip_id() {
        return trip_id;
    }

    public void setTrip_id(Integer trip_id) {
        this.trip_id = trip_id;
    }

    public String getMember_fname() {
        return member_fname;
    }

    public void setMember_fname(String member_fname) {
        this.member_fname = member_fname;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isTrip_admin() {
        return trip_admin;
    }

    public void setTrip_admin(boolean trip_admin) {
        this.trip_admin = trip_admin;
    }
}