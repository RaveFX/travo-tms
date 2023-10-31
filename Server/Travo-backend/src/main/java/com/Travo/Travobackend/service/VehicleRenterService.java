package com.Travo.Travobackend.service;


import com.Travo.Travobackend.repository.VehicleRenterRepository;

import org.springframework.stereotype.Service;



@Service
public class VehicleRenterService {
        private final VehicleRenterRepository vehicleRenterRepository;

        public VehicleRenterService(VehicleRenterRepository vehicleRenterRepository) {
            this.vehicleRenterRepository = vehicleRenterRepository;
        }



}