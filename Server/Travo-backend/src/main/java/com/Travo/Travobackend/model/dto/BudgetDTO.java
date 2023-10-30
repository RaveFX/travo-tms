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
    private String cause;
    private int cost;
    private String date;
    private String type;
    private String receipt;
    private int user_id;

}