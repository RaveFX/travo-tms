package com.Travo.Travobackend.model.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "group_messages")
public class GroupMessages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String content;

//    @ManyToOne
//    @JoinColumn(name = "sender_id")
    private Integer sender_id;

//    @ManyToOne
//    @JoinColumn(name = "trip_id")
    private Integer trip_id;

    // Add fields for timestamp, message type, or any other relevant data
    // Getters and setters...
    private LocalDateTime datetime;


}
