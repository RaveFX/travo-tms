package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.UserInformationDTO;
import com.Travo.Travobackend.model.entity.Reservation;
import com.Travo.Travobackend.repository.JDBCDao.UserJDBCDao;
import com.Travo.Travobackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Travo.Travobackend.enumeration.Status;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserJDBCDao userJDBCDao;

    public List<UserInformationDTO> userInformation(){
        return userJDBCDao.getAllUserInformation();
    }

    public void updateUserStatus(Integer userId, Status newStatus) {
        userJDBCDao.updateUserStatus(userId, newStatus);
    }

}
