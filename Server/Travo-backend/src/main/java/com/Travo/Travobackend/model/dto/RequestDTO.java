package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestDTO {
    private String fname;
    private Integer emergancy_contact;
    private String destination;
    private Integer attendance;
    private Date date;
}
