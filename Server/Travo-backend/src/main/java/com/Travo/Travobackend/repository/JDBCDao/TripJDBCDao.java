//package com.Travo.Travobackend.repository.JDBCDao;
//
//import com.Travo.Travobackend.model.dto.TripDTO;
//import com.Travo.Travobackend.model.dto.VehiclesDTO;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//
//public class TripJDBCDao {
//    @Autowired
//    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
//
//    public List<TripDTO> getAllTrips() {
//        StringBuffer SQL = new StringBuffer();
//        HashMap<String, Object> params = new HashMap<>();
//        List<TripDTO> trips = new ArrayList<>();
//
//        SQL.append("SELECT * FROM trips");
//
//        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
//            while (rs.next()) {
//                TripDTO tripDTO = new TripDTO();
//
//                tripDTO.setTrip_id(rs.getInt("Vehicle_id"));
//                tripDTO.setDescription(rs.getString("Vehicle_type"));
//                tripDTO.setCreated_date(rs.getDate("Vehicle_model"));
//                tripDTO.setTotal_distance(rs.getInt("Description"));
//                tripDTO.setEnd_date(rs.getDate("Location"));
//                tripDTO.setTravel_mode(rs.getString("Bluetooth"));
//
//
//                trips.add(tripDTO);
//            }
//            return trips;
//        });
//    }
//    }
