package com.Travo.Travobackend.model.entity;

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
     private LocalDate created_date;
     private String trip_name;
     private String description;
     private LocalDate start_date;
     private LocalDate end_date;
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
//
//import com.Travo.Travobackend.enumeration.TripState;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import java.time.LocalDate;
//import java.util.HashSet;
//import java.util.Set;
//
//import java.sql.Timestamp;

//@AllArgsConstructor
//@NoArgsConstructor
//@Builder
//@Entity
//@Data
//@Table(name = "Trip")
//public class Trip {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int trip_id;
//    private String trip_name;
//
//    @Enumerated(EnumType.STRING)
//    private TripState State;
//
//    private int Trip_creatorID;
//    private Timestamp created_date;
//    private Timestamp start_date;
//    private Timestamp end_date;
//    private String description;
//    private Integer completed; //if completed 1
//
//     @ManyToOne
//     @JoinColumn(name = "admin_id", referencedColumnName = "user_id" )
//     private User user;
//
//    @OneToMany(mappedBy = "trip")
//     private Set<TripMember> tripMembers = new HashSet<>();
//
//     @OneToMany(mappedBy = "trip")
//     private Set<TripAttraction> attractions = new HashSet<>();
//
//     @OneToMany(mappedBy = "trip")
//     private Set<TripHotel> hotels = new HashSet<>();
//
//     @OneToMany(mappedBy = "trip")
//     private Set<TripActivity> activities = new HashSet<>();

}
