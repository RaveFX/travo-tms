package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import java.sql.Time;
//import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BudgetDTO {
    private int user_id;
    private int tripId;
    private String cause;
    private int cost;
    private String date;
    private String type;
    private String receipt;


}