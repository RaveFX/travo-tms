package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.VehiclesDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class VehiclesJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<VehiclesDTO> getAllVehicles() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<VehiclesDTO> vehicles = new ArrayList<>();

        SQL.append("SELECT * FROM vehicles");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                VehiclesDTO vehiclesDTO = new VehiclesDTO();

                vehiclesDTO.setVehicle_id(rs.getInt("Vehicle_id"));
                vehiclesDTO.setVehicle_type(rs.getString("Vehicle_type"));
                vehiclesDTO.setSeat(rs.getInt("seat"));
                vehiclesDTO.setLarge_bag(rs.getInt("large_bag"));
                vehiclesDTO.setSmall_bag(rs.getInt("small_bag"));
                vehiclesDTO.setRate(rs.getInt("rate"));
                vehiclesDTO.setVehicle_model(rs.getString("Vehicle_model"));
                vehiclesDTO.setDescription(rs.getString("Description"));
                vehiclesDTO.setLocation(rs.getString("Location"));
                vehiclesDTO.setBluetooth(rs.getBoolean("Bluetooth"));
                vehiclesDTO.setImg(rs.getString("img"));



                vehicles.add(vehiclesDTO);
            }
            return vehicles;
        });


    }
}
