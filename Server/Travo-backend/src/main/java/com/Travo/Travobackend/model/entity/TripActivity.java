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
@Table(name = "trip_activity")
public class TripActivity {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer day;

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;

    @ManyToOne
    @JoinColumn(name = "activity_id", referencedColumnName = "agent_id" )
    private ActivityAgent activityAgent;
}
