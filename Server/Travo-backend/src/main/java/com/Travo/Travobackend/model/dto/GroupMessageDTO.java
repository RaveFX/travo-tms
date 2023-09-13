package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.model.entity.Trip;
import com.Travo.Travobackend.model.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroupMessageDTO {
    private Integer id;
    private String content;
    private User sender;
    private Trip trip;
    private LocalDateTime datetime;
}
