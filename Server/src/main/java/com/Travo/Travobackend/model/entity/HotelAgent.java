package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.Membership;
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
@Table(name = "hotelAgent")
@PrimaryKeyJoinColumn(name="hotel_id")
public class HotelAgent extends User {
    private String hotel_name;
    private String brn;
    private String description;
    private String bank;
    private String branch;
    private String acc_name;
    private Integer acc_num;

    @Enumerated(EnumType.STRING)
    private Membership membership;


}
