package com.Travo.Travobackend.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
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
    private Integer trip_id;
    private LocalDate created_date;
    private String trip_name;
    private String trip_admin;
    private String description;
    private LocalDate start_date;
    private LocalDate end_date;
    private Integer completed; //if completed 1
    private String uniqueLink;

    @ManyToOne
    @JoinColumn(name = "admin_id", referencedColumnName = "user_id" )
    private User user;

    @PrePersist
    protected void onCreate() {
        created_date = LocalDate.now();
    }

    @OneToMany(mappedBy = "trip")
    private Set<TripMember> tripMembers = new HashSet<>();

    @OneToMany(mappedBy = "trip")
    private Set<TripAttraction> attractions = new HashSet<>();

    @OneToMany(mappedBy = "trip")
    private Set<TripHotel> hotels = new HashSet<>();

    @OneToMany(mappedBy = "trip")
    private Set<TripActivity> activities = new HashSet<>();
    
    @OneToMany(mappedBy = "trip")
    private Set<TripSchedule> schedules = new HashSet<>();

    public String getUniqueLink() {
        return uniqueLink;
    }

    // Setter method for uniqueLink
    public void setUniqueLink(String uniqueLink) {
        this.uniqueLink = uniqueLink;
    }
    
    @OneToMany(mappedBy = "trip")
    private Set<Reservation> reservations = new HashSet<>();

    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL)
    private Set<TicketBooking> ticketBookings = new HashSet<>();

}
