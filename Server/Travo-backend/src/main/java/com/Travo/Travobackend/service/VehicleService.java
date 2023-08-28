package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.VehiclesDTO;
import com.Travo.Travobackend.repository.JDBCDao.ReservationJDBCDao;
import com.Travo.Travobackend.repository.JDBCDao.VehiclesJDBCDao;
import com.Travo.Travobackend.repository.ReservationRepository;
import com.Travo.Travobackend.repository.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {
    @Autowired
    private VehiclesRepository vehiclesRepository;

    @Autowired
    private VehiclesJDBCDao vehiclesJDBCDao;

    public List<VehiclesDTO> vehicles(){
        return vehiclesJDBCDao.getAllVehicles();
    }





}
