package com.Travo.Travobackend.model.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripDTO {
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
}





