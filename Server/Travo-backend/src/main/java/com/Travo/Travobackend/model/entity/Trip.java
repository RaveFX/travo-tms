package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.TripState;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
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
    private String trip_name;

    @Enumerated(EnumType.STRING)
    private TripState State;

    private int Trip_creatorID;
    private LocalDate created_date;
    private LocalDate start_date;
    private LocalDate end_date;
    private String description;
    private Integer completed; //if completed 1

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

}
