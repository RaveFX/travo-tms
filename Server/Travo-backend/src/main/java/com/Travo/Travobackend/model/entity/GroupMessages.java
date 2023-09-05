package com.Travo.Travobackend.model.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "group_messages")
public class GroupMessages {
    @Id
    @GeneratedValue
    private Integer id;

    private Integer group_id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id" )
    private User user;

//    @ManyToOne
//    @JoinColumn(name = "group_id", referencedColumnName = "trip_id" )
//    private Trip trip;

    private String messages;
    private LocalDateTime datetime;


}
