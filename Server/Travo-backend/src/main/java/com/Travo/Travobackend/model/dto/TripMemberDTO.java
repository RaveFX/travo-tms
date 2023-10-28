package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.TripRole;
import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.entity.User;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripMemberDTO {
    private Integer member_id;
    private String member_fname;
    private String image;
    private TripRole tripRole;
    private Integer trip_id;
    private Integer user_id;
//    private Trip trip;
//    private User user;

}
