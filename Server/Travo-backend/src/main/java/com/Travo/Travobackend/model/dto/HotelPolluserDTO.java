package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.model.entity.AttractionPoll;
import com.Travo.Travobackend.model.entity.HotelPoll;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
public class HotelPolluserDTO {
    private Integer id;
    private Integer user_id;
    private HotelPoll hotelPoll;
}
