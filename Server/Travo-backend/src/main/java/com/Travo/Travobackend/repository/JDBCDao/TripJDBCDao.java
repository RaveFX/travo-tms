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
//        List<VehiclesDTO> vehicles = new ArrayList<>();
//
//        SQL.append("SELECT * FROM trips");
//
//        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
//            while (rs.next()) {
//                VehiclesDTO vehiclesDTO = new VehiclesDTO();
//
//                vehiclesDTO.setVehicle_id(rs.getInt("Vehicle_id"));
//                vehiclesDTO.setVehicle_type(rs.getString("Vehicle_type"));
//                vehiclesDTO.setVehicle_model(rs.getString("Vehicle_model"));
//                vehiclesDTO.setDescription(rs.getString("Description"));
//                vehiclesDTO.setLocation(rs.getString("Location"));
//                vehiclesDTO.setBluetooth(rs.getBoolean("Bluetooth"));
//
//
//                vehicles.add(vehiclesDTO);
//            }
//            return vehicles;
//        });
//    }
//    }
