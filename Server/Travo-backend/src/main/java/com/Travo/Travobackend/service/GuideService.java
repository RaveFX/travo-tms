package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.RequestDTO;
import com.Travo.Travobackend.repository.HireRepository;
import com.Travo.Travobackend.repository.JDBCDao.HireJDBCDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuideService {
    @Autowired
    private HireRepository hireRepository;

    @Autowired
    private HireJDBCDao hireJDBCDao;

    public List<RequestDTO> requests(){
        return hireJDBCDao.getAllRequests();
    }
}
