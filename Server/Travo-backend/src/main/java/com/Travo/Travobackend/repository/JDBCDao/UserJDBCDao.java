package com.Travo.Travobackend.repository.JDBCDao;
import com.Travo.Travobackend.enumeration.Role;
import com.Travo.Travobackend.enumeration.Status;

import com.Travo.Travobackend.model.dto.UserInformationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



@Repository
public class UserJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<UserInformationDTO> getAllUserInformation() {
        String sql = "SELECT u.*, t.* FROM user u INNER JOIN traveler t ON u.user_id = t.traveler_id";
        MapSqlParameterSource params = new MapSqlParameterSource();

        return namedParameterJdbcTemplate.query(sql, params, rs -> {
            List<UserInformationDTO> userInformationList = new ArrayList<>();

            while (rs.next()) {
                UserInformationDTO userInformationDTO = new UserInformationDTO();

                userInformationDTO.setEmail(rs.getString("u.email"));
                userInformationDTO.setUser_id(rs.getInt("u.user_id"));
                userInformationDTO.setProfileImage(rs.getString("u.profile_image"));
                userInformationDTO.setFname(rs.getString("t.fname"));
                userInformationDTO.setLname(rs.getString("t.lname"));
                userInformationDTO.setContact_num(rs.getString("t.contact_num"));
                java.sql.Date sqlDate = rs.getDate("u.registration_date");
                if (sqlDate != null) {
                    userInformationDTO.setRegistration_date(sqlDate.toLocalDate());
                }
                userInformationList.add(userInformationDTO);
            }

            return userInformationList;
        });
    }
    public void updateUserStatus(Integer userId, Status newStatus) {
        String sql = "UPDATE user SET status = :newStatus WHERE user_id = :userId";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("newStatus", newStatus.toString()); // Pass the enum as a string
        paramMap.put("userId", userId);

        namedParameterJdbcTemplate.update(sql, paramMap);
    }






}

