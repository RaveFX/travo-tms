package com.Travo.Travobackend.repository.JDBCDao;
import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.TripDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.Travo.Travobackend.model.dto.HotelPollDTO;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class HotelPollJDBCDao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public HotelPollJDBCDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void updateHotelPoll(Integer tripId, Integer hotelId, Boolean isChecked) {
        // Determine the value to add to total_votes based on the isChecked flag.
        int x = isChecked ? 1 : -1;

        System.out.println(x);
        System.out.println(tripId);
        System.out.println(hotelId);

        String sql = "UPDATE hotel_poll SET total_votes = total_votes + :x WHERE hotel_id = :hotelId AND trip_id = :tripId";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("x", x);
        paramMap.put("tripId", tripId);
        paramMap.put("hotelId", hotelId);

        namedParameterJdbcTemplate.update(sql, paramMap);
    }

    public List<HotelPollDTO> getAllPollHotels(String SQL, Map<String, Object> params) {
        return namedParameterJdbcTemplate.query(SQL, params, (rs, rowNum) -> {
            HotelPollDTO hotelPollDTO = new HotelPollDTO();
            hotelPollDTO.setHotel_id(rs.getInt("hotel_id"));
            hotelPollDTO.setTotal_votes(rs.getInt("total_votes"));
            hotelPollDTO.setHotel_name(rs.getString("acc_name"));
            return hotelPollDTO;

        });
    }

}





