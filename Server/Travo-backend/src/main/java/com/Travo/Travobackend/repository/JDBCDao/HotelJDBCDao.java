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

    public List<HotelDTO> getSelectedHotelList(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT hotel_agent.hotel_id, hotel_agent.hotel_name, hotel_agent.description, hotel_agent.hotel_img, hotel_agent.total_reviews, trip_hotel.id, trip_hotel.day  FROM trip_hotel  \n");
        SQL.append("INNER JOIN hotel_agent ON trip_hotel.hotel_id = hotel_agent.hotel_id        \n");
        SQL.append("WHERE trip_hotel.trip_id=:tripID AND trip_hotel.day=:day       \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));
                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setTotal_reviews(rs.getDouble("total_reviews"));
                hotelDTO.setRow_id(rs.getInt("id"));
                hotelDTO.setDay(rs.getInt("day"));

                hotels.add(hotelDTO);
            }
            return hotels;
        });


    }
}
