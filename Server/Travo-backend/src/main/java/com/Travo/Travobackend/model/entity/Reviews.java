package com.Travo.Travobackend.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reviews")
public class Reviews {
    @Id
    @GeneratedValue
    private Integer review_id;

    private Integer service_id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id" )
    private User user;
    private LocalDate review_date;
    private Integer stars;
    private String review;

    @PrePersist
    protected void onCreate() {
        review_date = LocalDate.now();
    }

}
