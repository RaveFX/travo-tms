package com.Travo.Travobackend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.sql.Time;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "event")

public class Event {
    @Id
    @GeneratedValue
    private Integer event_id;
    private String event_name;
    private String event_description;
    private Date date;
    private Time start_time;
    private Time end_time;
    private Integer ticket_price;
    private Integer ticket_quantity;

    @ManyToOne
    @JoinColumn(name = "agent_id", referencedColumnName = "agent_id" )
    private ActivityAgent activityAgent;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private Set<TicketBooking> ticketBookings = new HashSet<>();
}
