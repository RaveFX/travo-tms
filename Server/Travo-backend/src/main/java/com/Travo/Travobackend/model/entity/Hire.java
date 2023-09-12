package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Date;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hire")
public class Hire {
    @Id
    @GeneratedValue
    private Integer Hire_Id;
    @ManyToOne
    @JoinColumn(name = "guide_id", referencedColumnName = "guide_id" )
    private Guide guide;
    @ManyToOne
    @JoinColumn(name = "traveler_id", referencedColumnName = "traveler_id" )
    private Traveler traveler;
//    private String name;
//    private Integer emergency_contact;
    private Date Date;
//    private Date Start_date;
    private Integer Num_of_days;
    private Integer Payment;
//    private String Status;
    private Integer Attendance;
//    private String Destination;
    @ManyToOne
    @JoinColumn(name = "Trip_id", referencedColumnName = "Trip_id" )
    private Trip trip;
    private Boolean accepted;

    @Enumerated(EnumType.STRING)
    private Status status;
}
