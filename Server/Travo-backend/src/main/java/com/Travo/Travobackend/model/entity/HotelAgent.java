package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.Membership;
import com.Travo.Travobackend.enumeration.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.HashSet;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hotelAgent")
public class HotelAgent {
    @Id
    @GeneratedValue
    private Integer hotel_id;
    private String hotel_name;
    private String brn;
    private String description;
    private String bank;
    private String branch;
    private String acc_name;
    private Integer acc_num;
    private String contact_num;
    private Integer longitude;
    private Integer latitude;


    @Enumerated(EnumType.STRING)
    private Membership membership;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private Status status;

    @OneToMany(mappedBy = "hotelAgent", cascade = CascadeType.ALL)
    private Set<Room> room = new HashSet<>();

    @OneToMany(mappedBy = "hotelAgent", cascade = CascadeType.ALL)
    private Set<TripHotel> tripHotels = new HashSet<>();


    //private Set<Reservation> reservations = new HashSet<>();


}
