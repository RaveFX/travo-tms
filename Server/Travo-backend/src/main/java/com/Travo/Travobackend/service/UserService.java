package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.dto.UserInformationDTO;
import com.Travo.Travobackend.model.dto.VehicleRenterDTO;
import com.Travo.Travobackend.model.entity.Reservation;
import com.Travo.Travobackend.repository.*;
import com.Travo.Travobackend.repository.JDBCDao.HotelJDBCDao;
import com.Travo.Travobackend.repository.JDBCDao.UserJDBCDao;
import com.Travo.Travobackend.repository.JDBCDao.VehicleRenterJDBCDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Travo.Travobackend.enumeration.Status;

import java.util.Collections;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserJDBCDao userJDBCDao;

    @Autowired
    VehicleRenterRepository vehicleRenterRepository;
    @Autowired
    HotelAgentRepository hotelAgentRepository;
    @Autowired
    ActivityAgentRepository activityAgentRepository;

    @Autowired
    GuideRepository guideRepository;
    @Autowired
    StoreManagerRepository storeManagerRepository;

    @Autowired
    VehicleRenterService vehicleRenterService;

    @Autowired
    VehicleRenterJDBCDao vehicleRenterJDBCDao;

    @Autowired
    HotelJDBCDao hotelJDBCDao;

    public List<UserInformationDTO> userInformation(){
        return userJDBCDao.getAllUserInformation();
    }

    public List<UserInformationDTO> pendingUsers(){
        return userJDBCDao.getAllPendingUsers();
    }



    public List<HotelDTO> getPendingHotel(Integer userId){
        // Your logic to retrieve a list of pending vehicle renters
        return hotelJDBCDao.getPendingHotel(userId);
    }
    public List<VehicleRenterDTO> getPendingVehicleRenters(Integer userId){
        // Your logic to retrieve a list of pending vehicle renters
        return vehicleRenterJDBCDao.getRentersDetails(userId);
    }

    public List<UserInformationDTO>getUserpersonalinfo(Integer userId){
        // Your logic to retrieve a list of pending vehicle renter
        return userJDBCDao.getUserDetails(userId);
    }

    public void updateUserStatus(Integer userId, Status newStatus) {
        userJDBCDao.updateUserStatus(userId, newStatus);
    }

    public void updateVehicleRenterStatus(Integer userId, Status newStatus) {
        vehicleRenterJDBCDao.updateVehicleRenterStatus(userId, newStatus);
    }

}
