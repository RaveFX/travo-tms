package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.HotelDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class HotelJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<HotelDTO> getHotelList() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();

        SQL.append("SELECT * FROM hotel_agent");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));
                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setTotal_reviews(rs.getDouble("total_reviews"));

                hotels.add(hotelDTO);
            }
            return hotels;
        });


    }
}
