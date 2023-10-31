package com.Travo.Travobackend.model.entity;

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
@Table(name = "trip_hotel")
public class TripHotel {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer day;

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;

    @ManyToOne
    @JoinColumn(name = "hotel_id", referencedColumnName = "hotel_id" )
    private HotelAgent hotelAgent;

}
