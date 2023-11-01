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
    @GeneratedValue
    private Integer id;

    private String member_fname;
    private String image;

    @Enumerated(EnumType.STRING)
    private TripRole tripRole = TripRole.MEMBER;


    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;

    @ManyToOne
    @JoinColumn(name = "member_id", referencedColumnName = "user_id" )
    private User user;



}
