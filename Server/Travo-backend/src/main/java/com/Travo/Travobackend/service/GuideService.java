package com.Travo.Travobackend.service;

import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.RequestDTO;
import com.Travo.Travobackend.repository.HireRepository;
import com.Travo.Travobackend.repository.JDBCDao.GuideJDBCDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuideService {
    @Autowired
    private HireRepository hireRepository;

    @Autowired
    private GuideJDBCDao hireJDBCDao;

    public List<RequestDTO> requests(){
        return hireJDBCDao.getAllRequests();
    }

    public List<RequestDTO> confirmrequests(){
        return hireJDBCDao.getAllConfirmRequests();
    }

    public void updateUserStatus(Integer hireId, Status newStatus) {
        hireJDBCDao.updateUserStatus(hireId, newStatus);
    }

}
