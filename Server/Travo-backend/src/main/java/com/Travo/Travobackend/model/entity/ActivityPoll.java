package com.Travo.Travobackend.model.entity;

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
@Table(name = "activity_poll")
public class ActivityPoll {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer day;

    private Integer total_votes;

    @ManyToOne
    @JoinColumn(name = "trip_id", referencedColumnName = "trip_id" )
    private Trip trip;

    @ManyToOne
    @JoinColumn(name = "activity_id", referencedColumnName = "agent_id" )
    private ActivityAgent activityAgent;

    @OneToMany(mappedBy = "activityPoll")
    private Set<ActivitypollUser> activitypollUser = new HashSet<>();
}
