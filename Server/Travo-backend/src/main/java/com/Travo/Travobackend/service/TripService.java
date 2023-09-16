package com.Travo.Travobackend.service;

import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.repository.JDBCDao.TripJDBCDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripService {
    @Autowired
    private TripJDBCDao tripJDBCDao;
    public List<TripDTO> tripList(){
        return tripJDBCDao.getAllTrips();
    }
}
