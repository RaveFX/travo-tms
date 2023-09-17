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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Trip_id;
    private String Trip_admin;
    private String Trip_name;

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

    public Integer getTripId() {
        return Trip_id;
    }

    public void setTripId(Integer tripId) {
        this.Trip_id = tripId;
    }

    public String getTrip_admin() {
        return Trip_admin;
    }

    public void setTrip_admin(String trip_admin) {
        this.Trip_admin = trip_admin;
    }

    public String getTrip_name() {
        return Trip_name;
    }

    public void setTrip_name(String trip_name) {
        this.Trip_name = trip_name;
    }


    private String uniqueLink;

    public String getUniqueLink() {
        return uniqueLink;
    }

    // Setter method for uniqueLink
    public void setUniqueLink(String uniqueLink) {
        this.uniqueLink = uniqueLink;
    }

}
