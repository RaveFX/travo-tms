package com.travo.travobackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

@Entity
public class Traveller {
    @Id
    @GeneratedValue
    private Long Traveller_id;
    private String Emergancy_contact;

//    @JoinColumn(name="User_id")
//    private User user;

    public Long getTraveller_id() {
        return Traveller_id;
    }

    public void setTraveller_id(Long traveller_id) {
        Traveller_id = traveller_id;
    }

    public String getEmergancy_contact() {
        return Emergancy_contact;
    }

    public void setEmergancy_contact(String emergancy_contact) {
        Emergancy_contact = emergancy_contact;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
}
