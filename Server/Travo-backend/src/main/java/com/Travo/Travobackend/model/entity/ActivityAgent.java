package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.Membership;
import com.Travo.Travobackend.enumeration.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "activityAgent")
public class ActivityAgent {
    @Id
    @GeneratedValue
    private Integer agent_id;
    private String company_name;
    private String brn;
    private String description;
    private String bank;
    private String branch;
    private String acc_name;
    private Integer acc_num;
    private String contact_num;

    @Column(precision = 10, scale = 8)
    private BigDecimal latitude;

    @Column(precision = 11, scale = 8)
    private BigDecimal longitude;

    private String category;
    private String activity_img= "activity_img.jpg";
    private Double total_reviews;


    @Enumerated(EnumType.STRING)
    private Membership membership;

    @Enumerated(EnumType.STRING)
    private Status status;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id" )
    private User user;

    @OneToMany(mappedBy = "activityAgent", cascade = CascadeType.ALL)
    private Set<TripActivity> tripActivities = new HashSet<>();
}
