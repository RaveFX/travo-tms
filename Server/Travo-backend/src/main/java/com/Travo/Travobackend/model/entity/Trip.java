package com.Travo.Travobackend.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.sql.Time;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "trip")
public class Trip {
    @Id
    @GeneratedValue
    private Integer Trip_id;
    @ManyToOne
    @JoinColumn(name = "traveler_id", referencedColumnName = "traveler_id" )
    private Traveler traveler;
    private String name;
    private Date Created_date;
    private String Start_location;
    private String Description;
    private Date Start_date;
    private Date End_date;
    private Time Start_time;
    private String Travel_mode;
    private String Destination;
    @ManyToOne
    @JoinColumn(name = "Vehicle_id", referencedColumnName = "Vehicle_id" )
    private Vehicles vehicles;
    private Integer Total_distance;
    private Boolean TravelBuddy_status;

    @JsonIgnore
    @OneToMany(mappedBy = "trip")
    private Set<Hire> hires = new HashSet<>();

}
