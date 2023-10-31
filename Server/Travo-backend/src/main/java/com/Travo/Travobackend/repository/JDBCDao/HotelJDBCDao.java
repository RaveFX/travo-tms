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

    public List<HotelDTO> getHotelList(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT * FROM hotel_agent WHERE hotel_id NOT IN (SELECT hotel_id FROM trip_hotel WHERE trip_id=:tripID AND day=:day)");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));
                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setTotal_reviews(rs.getDouble("total_reviews"));
                hotelDTO.setLongitude(rs.getBigDecimal("longitude"));
                hotelDTO.setLatitude(rs.getBigDecimal("latitude"));

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

        SQL.append("SELECT hotel_agent.hotel_id, hotel_agent.hotel_name, hotel_agent.description, hotel_agent.hotel_img, hotel_agent.total_reviews, hotel_agent.longitude, hotel_agent.latitude, trip_hotel.id, trip_hotel.day  FROM trip_hotel  \n");
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
                hotelDTO.setLongitude(rs.getBigDecimal("longitude"));
                hotelDTO.setLatitude(rs.getBigDecimal("latitude"));

                hotels.add(hotelDTO);
            }
            return hotels;
        });

    }

    public List<HotelDTO> getSchedule_SelectedHotelList(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT hotel_agent.hotel_id, hotel_agent.hotel_name,trip_hotel.id, trip_hotel.day  FROM trip_hotel  \n");
        SQL.append("INNER JOIN hotel_agent ON trip_hotel.hotel_id = hotel_agent.hotel_id        \n");
        SQL.append("WHERE trip_hotel.trip_id=:tripID AND trip_hotel.day=:day       \n");
        SQL.append("AND trip_hotel.hotel_id NOT IN (SELECT type_id FROM trip_schedule WHERE trip_id=:tripID AND day=:day AND type='hotel')       \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setRow_id(rs.getInt("id"));
                hotelDTO.setDay(rs.getInt("day"));

                hotels.add(hotelDTO);
            }
            return hotels;
        });

    }

    public List<HotelDTO> getHotelListForMap(Integer tripID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();
        params.put("tripID", tripID);

        SQL.append("SELECT DISTINCT hotel_agent.hotel_id, hotel_agent.hotel_name, hotel_agent.longitude, hotel_agent.latitude FROM trip_hotel  \n");
        SQL.append("INNER JOIN hotel_agent ON trip_hotel.hotel_id = hotel_agent.hotel_id        \n");
        SQL.append("WHERE trip_hotel.trip_id=:tripID      \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setLongitude(rs.getBigDecimal("longitude"));
                hotelDTO.setLatitude(rs.getBigDecimal("latitude"));

                hotels.add(hotelDTO);
            }
            return hotels;
        });

    }

}
