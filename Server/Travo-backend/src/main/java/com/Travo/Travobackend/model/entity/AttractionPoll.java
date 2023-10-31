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
@Table(name = "attraction_poll")
public class AttractionPoll {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String place_id;
    private String name;
    private Integer total_votes;
    private String address;

    @Column(length = 1000)
    private String img_url;

    private Integer day;

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;


    @OneToMany(mappedBy = "attractionPoll", cascade = CascadeType.REMOVE)
    private Set<PollUser> pollUsers = new HashSet<>();
}
