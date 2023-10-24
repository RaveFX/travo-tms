package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.VehiclesDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class TravelerOptionJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<HotelDTO> getAllHotelsName() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();


        SQL.append("SELECT * FROM rooms inner join hotel_agent on rooms.hotel_id=hotel_agent.hotel_id ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setChild_count(rs.getInt("child_count"));
                hotelDTO.setPrice(rs.getInt("price"));
                hotelDTO.setAdult_count(rs.getInt("adult_count"));
                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setHotel_id(rs.getInt("hotel_id"));


                hotels.add(hotelDTO);
            }
            return hotels;
        });


    }

    public List<HotelDTO> getAllHotelsType(Integer hotelId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> types = new ArrayList<>();


        SQL.append("SELECT rooms.room_name,rooms.hotel_id FROM rooms inner join hotel_agent on rooms.hotel_id=hotel_agent.hotel_id; ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setRoom_name(rs.getString("room_name"));



                types.add(hotelDTO);
            }
            return types;
        });


    }
    public List<HotelDTO> getHotelsDetail(Integer hotelId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();
        params.put("hotelId", hotelId);

        SQL.append("SELECT * FROM rooms inner join hotel_agent on rooms.hotel_id=hotel_agent.hotel_id where rooms.hotel_id=:hotelId ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setChild_count(rs.getInt("child_count"));
                hotelDTO.setPrice(rs.getInt("price"));
                hotelDTO.setAdult_count(rs.getInt("adult_count"));
                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setAc(rs.getBoolean("ac"));
                hotelDTO.setBreakfast(rs.getBoolean("breakfast"));
                hotelDTO.setDinner(rs.getBoolean("dinner"));
                hotelDTO.setLunch(rs.getBoolean("lunch"));
                hotelDTO.setView(rs.getString("view"));
                hotelDTO.setWifi(rs.getBoolean("wifi"));



                hotels.add(hotelDTO);
            }
            return hotels;
        });


    }

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
