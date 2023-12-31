package com.Travo.Travobackend.service;

import com.Travo.Travobackend.enumeration.Membership;
import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.RequestDTO;
import com.Travo.Travobackend.model.entity.Hire;
import com.Travo.Travobackend.model.entity.HotelAgent;
import com.Travo.Travobackend.model.entity.User;
import com.Travo.Travobackend.model.other.RegisterRequest;
import com.Travo.Travobackend.model.other.Response;
import com.Travo.Travobackend.model.other.ServiceRegisterResponse;
import com.Travo.Travobackend.repository.GuideRepository;
import com.Travo.Travobackend.repository.HireRepository;
import com.Travo.Travobackend.repository.JDBCDao.GuideJDBCDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GuideService {
    @Autowired
    private HireRepository hireRepository;

    @Autowired
    private GuideRepository guideRepository;

    @Autowired
    private GuideJDBCDao hireJDBCDao;

    public List<RequestDTO> requests(Integer userId){
        return hireJDBCDao.getAllRequests(userId);
    }

    public List<RequestDTO> confirmrequests(Integer userTd){
        return hireJDBCDao.getAllConfirmRequests(userTd);
    }

    public void updateUserStatus(Integer hireId, Status newStatus) {
        hireJDBCDao.updateUserStatus(hireId, newStatus);
    }

}
