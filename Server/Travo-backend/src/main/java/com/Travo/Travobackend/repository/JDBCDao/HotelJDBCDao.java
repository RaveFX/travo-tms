package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.HotelDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class HotelJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<HotelDTO> getAllHotelInformation() {
        String sql = "SELECT u.*, h.* FROM user u INNER JOIN hotel_agent h ON u.user_id = h.hotel_id";
        MapSqlParameterSource params = new MapSqlParameterSource();

        return namedParameterJdbcTemplate.query(sql, params, rs -> {
            List<HotelDTO> hotelList = new ArrayList<>();

            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setEmail(rs.getString("u.email"));
                hotelDTO.setUser_id(rs.getInt("u.user_id"));
                hotelDTO.setProfileImage(rs.getString("u.profile_image"));
//                hotelDTO.setAc(rs.getString("h.acc_name"));
//                hotelDTO.(rs.getString("h.branch"));
                hotelDTO.setContact_num(rs.getString("h.contact_num"));
                java.sql.Date sqlDate = rs.getDate("u.registration_date");
                if (sqlDate != null) {
                    hotelDTO.setRegistration_date(sqlDate.toLocalDate());
                }
                hotelList.add(hotelDTO);
            }

            return hotelList;
        });
    }
}
