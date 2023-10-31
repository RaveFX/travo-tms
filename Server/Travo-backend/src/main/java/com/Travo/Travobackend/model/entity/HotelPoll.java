package com.Travo.Travobackend.model.entity;

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
@Table(name = "hotel_poll")
public class HotelPoll {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer hotel_id;
    private Integer trip_id;
    private Integer total_votes;
    private Integer day;
    @OneToMany(mappedBy = "hotelPoll")
    private Set<PollUser> pollUsers = new HashSet<>();
}