package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.TripRole;
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
@Table(name = "trip_member")
public class TripMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer member_id;

    private String member_fname;
    private String image;

    @Enumerated(EnumType.STRING)
    private TripRole tripRole = TripRole.MEMBER;

    private Integer trip_id;
    private Integer user_id;


//    @ManyToOne
//    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
//    private Trip trip;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id", referencedColumnName = "user_id" )
//    private User user;



}
