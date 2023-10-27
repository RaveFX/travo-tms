package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.TripDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class TripJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<TripDTO> getAllTrips(String SQL, Map<String, Object> params) {
        return namedParameterJdbcTemplate.query(SQL, params, (rs, rowNum) -> {
            TripDTO tripDTO = new TripDTO();
            tripDTO.setTrip_id(rs.getInt("trip_id"));
            tripDTO.setTrip_admin(rs.getString("trip_admin"));
            tripDTO.setTrip_name(rs.getString("trip_name"));
            return tripDTO;

        });
    }
}