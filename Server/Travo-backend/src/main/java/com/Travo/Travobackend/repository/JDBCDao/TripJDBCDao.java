package com.Travo.Travobackend.repository.JDBCDao;



import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class TripJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    public List<TripDTO> getTripList(Integer userID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<TripDTO> userTrips = new ArrayList<>();
        params.put("userID", userID);

        SQL.append("SELECT * FROM trip\n                                     ");
        SQL.append("INNER JOIN trip_member ON trip.trip_id = trip_member.trip_id        \n");
        SQL.append("WHERE trip_member.user_id=:userID");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                TripDTO tripDTO = new TripDTO();

                tripDTO.setTrip_id(rs.getInt("trip_id"));
                tripDTO.setTrip_name(rs.getString("trip_name"));
                tripDTO.setDescription(rs.getString("description"));
                tripDTO.setStart_date(rs.getDate("start_date"));
                tripDTO.setEnd_date(rs.getDate("end_date"));



                userTrips.add(tripDTO);
            }
            return userTrips;
        });


    }

    public TripDTO getTripDetails(Integer tripID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        TripDTO tripDTO = new TripDTO();
        params.put("tripID", tripID);

        SQL.append("SELECT * FROM trip\n                                     ");
        SQL.append("WHERE trip_id=:tripID");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {

                tripDTO.setTrip_id(rs.getInt("trip_id"));
                tripDTO.setTrip_name(rs.getString("trip_name"));
                tripDTO.setDescription(rs.getString("description"));
                tripDTO.setStart_date(rs.getDate("start_date"));
                tripDTO.setEnd_date(rs.getDate("end_date"));
                tripDTO.setUniqueLink(rs.getString("unique_link"));
            }
            return tripDTO;
        });


    }


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
