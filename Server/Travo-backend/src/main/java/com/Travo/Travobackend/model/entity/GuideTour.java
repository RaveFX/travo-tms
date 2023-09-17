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
@Table(name = "guide_tour")
public class GuideTour {
    @Id
    @GeneratedValue
    private Integer tour_id;
    private String topic;
    private String description;
    @ManyToOne
    @JoinColumn(name = "guide_id", referencedColumnName = "guide_id" )
    private Guide guide;

}
