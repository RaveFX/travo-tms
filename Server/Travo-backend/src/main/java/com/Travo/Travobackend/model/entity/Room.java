package com.Travo.Travobackend.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue
    private Integer room_id;

    @ManyToOne
    @JoinColumn(name = "hotel_id", referencedColumnName = "hotel_id" )
    private HotelAgent hotelAgent;

    private String room_name;
    private String description;
    private Integer adult_count;
    private Integer child_count;
    private Integer price;
    private Integer discount;
    private String view;
    private Boolean ac;
    private Boolean wifi;
    private Boolean breakfast;
    private Boolean lunch;
    private Boolean Dinner;

    @JsonIgnore
    @OneToMany(mappedBy = "room")
    private Set<Reservation> reservations = new HashSet<>();
}
