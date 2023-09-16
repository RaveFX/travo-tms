package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.TripDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class TripJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<TripDTO> getAllTrips() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<TripDTO> tripList = new ArrayList<>();

        SQL.append("SELECT * FROM trip_group"); // Assuming "trip" is the correct table name

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                TripDTO tripDTO = new TripDTO();

                // Corrected setter method calls
                tripDTO.setTripId(rs.getInt("trip_id"));
                tripDTO.setTrip_admin(rs.getString("trip_admin"));
                tripDTO.setTripName(rs.getString("trip_name"));

                tripList.add(tripDTO);
            }
            return tripList;
        });
    }
}

