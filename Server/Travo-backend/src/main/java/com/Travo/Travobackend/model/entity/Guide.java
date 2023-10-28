package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.Status;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.HashSet;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "guide")
public class Guide {
    @Id
    @GeneratedValue
    private Integer guide_id;
    private String fname;
    private String lname;
    private String nic;
    private String gender;
    private String bank;
    private String branch;
    private String acc_name;
    private Integer acc_num;
    private String qualifications;
    private String description;
    private String contact_num;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private Integer postal_code;
    private String district;

    @Enumerated(EnumType.STRING)
    private Status status;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id" )
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "guide")
    private Set<GuideTour> guideTours = new HashSet<>();
}
