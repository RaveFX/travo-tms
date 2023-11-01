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
//    public List<UserInformationDTO> getAllUserInformation() {
//        StringBuffer SQL = new StringBuffer();
//        HashMap<String, Object> params = new HashMap<>();
//        List<UserInformationDTO> userInformation = new ArrayList<>();
//
//        SQL.append("SELECT * FROM user");
//
//        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
//            while (rs.next()) {
//                UserInformationDTO userInformationDTO = new UserInformationDTO();
//
//                // Use the setter methods on the instance, not the class
//                userInformationDTO.setEmail(rs.getString("email"));
//                userInformationDTO.setUser_id(rs.getInt("user_id"));
//                userInformationDTO.setProfileImage(rs.getString("profile_image"));
////                userInformationDTO.setRole(rs.get("role"));
//                java.sql.Date sqlDate = rs.getDate("registration_date");
//                if (sqlDate != null) {
//                    userInformationDTO.setRegistration_date(sqlDate.toLocalDate());
//                }
//
//                // Retrieve role and status as strings from the ResultSet
//                String roleString = rs.getString("role");
//                String statusString = rs.getString("status");
//
//                // Map the role and status strings to the corresponding enums
//                if (roleString != null) {
//                    userInformationDTO.setRole(Role.valueOf(roleString));
//                }
//
//                if (statusString != null) {
//                    userInformationDTO.setStatus(Status.valueOf(statusString));
//                }
//
//                userInformation.add(userInformationDTO);
//            }
//            return userInformation;
//        });
//    }


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

    public List<UserInformationDTO> getUserDetails(Integer userId) {
        String sql = "SELECT u.*, t.* FROM user u INNER JOIN traveler t ON u.user_id = t.traveler_id WHERE u.user_id= :userId";
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("userId", userId);
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



    public List<UserInformationDTO> getAllPendingUsers() {
        String sql = "SELECT \n" +
                "    u.*, \n" +
                "    CASE \n" +
                "        WHEN vr.user_id IS NOT NULL THEN 'vehicle_renter' \n" +
                "        WHEN ha.user_id IS NOT NULL THEN 'hotel_agent' \n" +
                "        WHEN aa.user_id IS NOT NULL THEN 'activity_agent' \n" +
                "        WHEN g.user_id IS NOT NULL THEN 'guide' \n" +
                "        WHEN sm.user_id IS NOT NULL THEN 'store_manager' \n" +
                "    END AS service_provider \n" +
                "FROM \n" +
                "    user u \n" +
                "LEFT JOIN \n" +
                "    vehicle_renter vr ON u.user_id = vr.user_id AND vr.status = 'pending' \n" +
                "LEFT JOIN \n" +
                "    hotel_agent ha ON u.user_id = ha.user_id AND ha.status = 'pending' \n" +
                "LEFT JOIN \n" +
                "    activity_agent aa ON u.user_id = aa.user_id AND aa.status = 'pending' \n" +
                "LEFT JOIN \n" +
                "    guide g ON u.user_id = g.user_id AND g.status = 'pending' \n" +
                "LEFT JOIN \n" +
                "    store_manager sm ON u.user_id = sm.user_id AND sm.status = 'pending'\n" +
                "WHERE \n" +
                "    CASE \n" +
                "        WHEN vr.user_id IS NOT NULL THEN 'vehicle_renter' \n" +
                "        WHEN ha.user_id IS NOT NULL THEN 'hotel_agent' \n" +
                "        WHEN aa.user_id IS NOT NULL THEN 'activity_agent' \n" +
                "        WHEN g.user_id IS NOT NULL THEN 'guide' \n" +
                "        WHEN sm.user_id IS NOT NULL THEN 'store_manager' \n" +
                "    END IS NOT NULL;\n";


        MapSqlParameterSource params = new MapSqlParameterSource();

        return namedParameterJdbcTemplate.query(sql, params, rs -> {
            List<UserInformationDTO> userInformationList = new ArrayList<>();

            while (rs.next()) {
                UserInformationDTO userInformationDTO = new UserInformationDTO();

                userInformationDTO.setEmail(rs.getString("u.email"));
                userInformationDTO.setUser_id(rs.getInt("u.user_id"));
                userInformationDTO.setProfileImage(rs.getString("u.profile_image"));
                String service_provider = rs.getString("service_provider");
                userInformationDTO.setService_provider(service_provider);
                java.sql.Date sqlDate = rs.getDate("u.registration_date");
                if (sqlDate != null) {
                    userInformationDTO.setRegistration_date(sqlDate.toLocalDate());
                }
                userInformationList.add(userInformationDTO);
            }

            return userInformationList;
        });
    }

    public List<UserInformationDTO> getAllPendingUsersInfo() {
        String sql = "";


        MapSqlParameterSource params = new MapSqlParameterSource();

        return namedParameterJdbcTemplate.query(sql, params, rs -> {
            List<UserInformationDTO> userInformationList = new ArrayList<>();

            while (rs.next()) {
                UserInformationDTO userInformationDTO = new UserInformationDTO();

                userInformationDTO.setEmail(rs.getString("u.email"));
                userInformationDTO.setUser_id(rs.getInt("u.user_id"));
                userInformationDTO.setProfileImage(rs.getString("u.profile_image"));
                String service_provider = rs.getString("service_provider");
                userInformationDTO.setService_provider(service_provider);
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

