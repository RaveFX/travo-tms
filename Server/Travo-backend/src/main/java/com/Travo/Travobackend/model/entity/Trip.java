package com.Travo.Travobackend.model.entity;

// import jakarta.persistence.*;
// import lombok.AllArgsConstructor;
// import lombok.Data;
// import lombok.NoArgsConstructor;
// import lombok.experimental.SuperBuilder;

// import java.time.LocalDate;
// import java.util.HashSet;
// import java.util.Set;

// @Data
// @SuperBuilder
// @NoArgsConstructor
// @AllArgsConstructor
// @Entity
// @Table(name = "trip")
// public class Trip {
//     @Id
//     @GeneratedValue
//     private Integer trip_id;
//     private LocalDate created_date;
//     private String trip_name;
//     private String description;
//     private LocalDate start_date;
//     private LocalDate end_date;
//     private Integer completed; //if completed 1

//     @ManyToOne
//     @JoinColumn(name = "admin_id", referencedColumnName = "user_id" )
//     private User user;

//     @PrePersist
//     protected void onCreate() {
//         created_date = LocalDate.now();
//     }

//     @OneToMany(mappedBy = "trip")
//     private Set<TripMember> tripMembers = new HashSet<>();

//     @OneToMany(mappedBy = "trip")
//     private Set<TripAttraction> attractions = new HashSet<>();

//     @OneToMany(mappedBy = "trip")
//     private Set<TripHotel> hotels = new HashSet<>();

//     @OneToMany(mappedBy = "trip")
//     private Set<TripActivity> activities = new HashSet<>();

import com.Travo.Travobackend.enumeration.TripState;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Data
@Table(name = "Trip")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Trip_id;
    private String Trip_name;

    @Enumerated(EnumType.STRING)
    private TripState State;

    private int Trip_creatorID;
    private Timestamp Created_date;
    private Timestamp Start_Date;
    private Timestamp End_Date;
    private String Description;
}
