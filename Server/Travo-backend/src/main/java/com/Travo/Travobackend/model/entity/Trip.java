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
    private Integer trip_id;
    private String trip_admin;
    private String trip_name;

    private Date created_date;
    private String Start_location;
    private String description;

    private Date start_date;
    private Date end_date;
    private Time start_time;
    private String travel_mode;
    private String destination;
    @ManyToOne
    @JoinColumn(name = "Vehicle_id", referencedColumnName = "Vehicle_id" )
    private Vehicles vehicles;
    private Integer total_distance;
    private Boolean travelBuddy_status;

    @JsonIgnore
    @OneToMany(mappedBy = "trip")
    private Set<Hire> hires = new HashSet<>();

    public Integer getTripId() {
        return trip_id;
    }

    public void setTripId(Integer tripId) {
        this.trip_id = tripId;
    }

    public String getTrip_admin() {
        return trip_admin;
    }

    public void setTrip_admin(String trip_admin) {
        this.trip_admin = trip_admin;
    }

    public String getTrip_name() {
        return trip_name;
    }

    public void setTrip_name(String trip_name) {
        this.trip_name = trip_name;
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
