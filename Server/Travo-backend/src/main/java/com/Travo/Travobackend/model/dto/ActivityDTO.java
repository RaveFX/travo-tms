package com.Travo.Travobackend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActivityDTO {
    private Integer agent_id;
    private String company_name;
    private String description;
    private String activity_img;
    private Double total_reviews;
    private String category;
    private Integer trip_id;
    private Integer day;
    private Integer row_id;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private Integer event_id;
    private String event_name;
    private String event_description;
    private String Event_date; //like every sunday
    private Date date;
    private Time start_time;
    private Time end_time;
    private Integer ticket_price;
    private Integer ticket_quantity;
    private Integer quantity;
    private Integer price_per_ticket;
    private String Status;
    private Integer booking_id;
    private Integer user_id;
    private Integer sum_TicketCount;
    private Integer payment;


}