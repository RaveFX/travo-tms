package com.Travo.Travobackend.model.dto;

import com.Travo.Travobackend.enumeration.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceProviderDTO {
    Integer service_id;
    Status status;
}
