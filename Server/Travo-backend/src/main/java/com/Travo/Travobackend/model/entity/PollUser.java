package com.Travo.Travobackend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.OnDelete;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "poll_user")
public class PollUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer user_id;


    @ManyToOne
    @JoinColumn(name = "hotelpoll_id", referencedColumnName = "id" )
    private HotelPoll hotelPoll;


    @ManyToOne
    @JoinColumn(name = "attractionpoll_id", referencedColumnName = "id" )
    @OnDelete(action = OnDeleteAction.CASCADE)
    private AttractionPoll attractionPoll;



}



