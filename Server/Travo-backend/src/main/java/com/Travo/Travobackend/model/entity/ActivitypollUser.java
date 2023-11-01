package com.Travo.Travobackend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "activitypoll_user")
public class ActivitypollUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer user_id;


    @ManyToOne
    @JoinColumn(name = "activitypoll_id", referencedColumnName = "id" )
    @OnDelete(action = OnDeleteAction.CASCADE)
    private ActivityPoll activityPoll;

}
