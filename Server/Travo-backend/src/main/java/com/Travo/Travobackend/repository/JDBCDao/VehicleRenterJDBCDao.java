package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.enumeration.Membership;
import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.dto.VehicleRenterDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class VehicleRenterJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    public List<VehicleRenterDTO> getRentersDetails(Integer userID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<VehicleRenterDTO> users = new ArrayList<>();
        params.put("userID", userID);

        SQL.append("SELECT * FROM vehicle_renter  \n");
        SQL.append("WHERE user_id=:userID \n");

//        SQL.append("SELECT * FROM user \n");
//        SQL.append("LEFT JOIN vehicle_renter ON user.user_id = vehicle_renter.user_id \n");
//        SQL.append("LEFT JOIN traveler ON user.user_id = traveler.user_id \n");
//        SQL.append("WHERE user.user_id = :userId");
        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                VehicleRenterDTO dto = new VehicleRenterDTO();

                dto.setRenter_id(rs.getInt("renter_id"));
                dto.setCompany_name(rs.getString("company_name"));
                dto.setBrn(rs.getString("brn"));
                dto.setDescription(rs.getString("description"));
                dto.setContact_num(rs.getString("contact_num"));
                dto.setAddressLine1(rs.getString("address_line1"));
                dto.setAddressLine2(rs.getString("address_line2"));
                dto.setCity(rs.getString("city"));
                dto.setPostal_code(rs.getInt("postal_code"));
                dto.setDistrict(rs.getString("district"));
                dto.setStatus(Status.valueOf(rs.getString("status"))); // Assuming 'Status' is an enum type in your DTO
                dto.setMembership(Membership.valueOf(rs.getString("membership"))); // Assuming 'Membership' is an enum type in your DTO
                dto.setUser_id(rs.getInt("user_id"));
//                dto.getEmail(rs.getString("email"));
//                dto.getFname(rs.getString("fname"));

                users.add(dto);
            }
            return users;
        });

    }


    public void updateVehicleRenterStatus(Integer userId, Status newStatus) {
        String sql = "UPDATE vehicle_renter SET status = :newStatus WHERE user_id = :userId";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("newStatus", newStatus.toString()); // Pass the enum as a string
        paramMap.put("userId", userId);

        namedParameterJdbcTemplate.update(sql, paramMap);
    }

}
