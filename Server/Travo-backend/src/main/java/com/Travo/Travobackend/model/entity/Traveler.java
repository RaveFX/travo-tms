package com.Travo.Travobackend.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "traveler")
@PrimaryKeyJoinColumn(name="traveler_id")
public class Traveler extends User {
    private String fname;
    private String lname;
    private String gender;
    private Integer emergency_contact;
    private Date DOB;

    @JsonIgnore
    @OneToMany(mappedBy = "traveler")
    private Set<Hire> hires = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "traveler")
    private Set<Trip> trips = new HashSet<>();
}
