//package com.Travo.Travobackend.service;
//
//import com.Travo.Travobackend.model.dto.VehiclesDTO;
//import com.Travo.Travobackend.repository.JDBCDao.VehiclesJDBCDao;
//import com.Travo.Travobackend.repository.TripRepository;
//import com.Travo.Travobackend.repository.VehiclesRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.List;
//
//public class TripService {
//    @Autowired
//    private TripRepository tripRepository;
//
//    @Autowired
//    private VehiclesJDBCDao vehiclesJDBCDao;
//
//    public List<VehiclesDTO> vehicles(){
//        return vehiclesJDBCDao.getAllVehicles();
//    }
//}
