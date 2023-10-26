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
@Table(name = "trip_attraction")
public class TripAttraction {
    @Id
    @GeneratedValue
    private Integer id;
    private String place_id;
    private String name;
    private String address;

    @Column(length = 1000)
    private String img_url;

    private Integer day;
    private Integer longitude;
    private Integer latitude;

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;

}
