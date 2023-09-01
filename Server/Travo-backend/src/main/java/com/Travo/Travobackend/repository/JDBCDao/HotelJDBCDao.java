package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.HotelDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class HotelJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<HotelDTO> getAllHotels() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();

        SQL.append("SELECT * FROM rooms join hotel_agent on rooms.hotel_id = hotel_agent.hotel_id");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setRoom_id(rs.getInt("room_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setChild_count(rs.getInt("child_count"));
                hotelDTO.setDescription(rs.getString("description"));




                hotels.add(hotelDTO);
            }
            return hotels;
        });


    }
}
