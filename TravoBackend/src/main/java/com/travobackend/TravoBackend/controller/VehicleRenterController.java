//package com.travobackend.TravoBackend.controller;
//
//import com.travobackend.TravoBackend.modal.entity.User;
//import com.travobackend.TravoBackend.modal.entity.VehicleRenter;
//import com.travobackend.TravoBackend.repository.UserRepository;
//import com.travobackend.TravoBackend.repository.VehicleRenterRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//
//public class VehicleRenterController {
//    @Autowired
//    private VehicleRenterRepository vehicleRenterRepository;
//
//    @PostMapping("/v1/vehicleRenter")
//    VehicleRenter newRenter(@RequestBody VehicleRenter newRenter){
//        return vehicleRenterRepository.save(newRenter);}
//}
