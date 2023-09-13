package com.Travo.Travobackend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "trip_group")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tripId;
    private String trip_admin;
    private String tripName;

    public Integer getTripId() {
        return tripId;
    }

    public void setTripId(Integer tripId) {
        this.tripId = tripId;
    }

    public String getTrip_admin() {
        return trip_admin;
    }

    public void setTrip_admin(String trip_admin) {
        this.trip_admin = trip_admin;
    }

    public String getTripName() {
        return tripName;
    }

    public void setTripName(String tripName) {
        this.tripName = tripName;
    }

    public List<GroupMessages> getGroupMessages() {
        return groupMessages;
    }

    public void setGroupMessages(List<GroupMessages> groupMessages) {
        this.groupMessages = groupMessages;
    }

    private String uniqueLink;

    public String getUniqueLink() {
        return uniqueLink;
    }

    // Setter method for uniqueLink
    public void setUniqueLink(String uniqueLink) {
        this.uniqueLink = uniqueLink;
    }

    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<GroupMessages> groupMessages = new ArrayList<>();

    // Other trip-related fields and getters/setters...
}
