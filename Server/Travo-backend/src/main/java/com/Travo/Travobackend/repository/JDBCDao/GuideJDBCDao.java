package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.RequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.Travo.Travobackend.enumeration.Status.CONFIRM;

@Repository
public class GuideJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<RequestDTO> getAllRequests( ) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<RequestDTO> requests = new ArrayList<>();

        SQL.append("SELECT * FROM `hire` join traveler on hire.traveler_id=traveler.traveler_id join trip on trip.trip_id= hire.trip_id");
//                "where user.user_id= :userId");
//        params.put("userId", userId);

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                RequestDTO requestDTO = new RequestDTO();

                requestDTO.setFname(rs.getString("fname"));
                requestDTO.setEmergency_contact(rs.getInt("emergency_contact"));
                requestDTO.setAttendance(rs.getInt("attendance"));
                requestDTO.setStart_date(rs.getDate("start_date"));
                requestDTO.setDestination(rs.getString("destination"));
                requestDTO.setHire_Id(rs.getInt("hire_id"));
                requestDTO.setStart_location(rs.getString("start_location"));
                requestDTO.setNum_of_days(rs.getInt("num_of_days"));


                // Retrieve role and status as strings from the ResultSet
                String statusString = rs.getString("status");

                // Map the role and status strings to the corresponding enums
                if (statusString != null) {
                    requestDTO.setStatus(Status.valueOf(statusString));
                }


                requests.add(requestDTO);
            }
            return requests;
        });



    }
    public List<RequestDTO> getAllConfirmRequests( ) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<RequestDTO> confirmrequests = new ArrayList<>();

        SQL.append("SELECT * FROM `hire` join traveler on hire.traveler_id=traveler.traveler_id join trip on trip.trip_id= hire.trip_id where hire.status= \"CONFIRM\"");
//        params.put("userId", userId);

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                RequestDTO requestDTO = new RequestDTO();

                requestDTO.setFname(rs.getString("fname"));
                requestDTO.setEmergency_contact(rs.getInt("emergency_contact"));
                requestDTO.setAttendance(rs.getInt("attendance"));
                requestDTO.setStart_date(rs.getDate("start_date"));
                requestDTO.setDestination(rs.getString("destination"));
                requestDTO.setHire_Id(rs.getInt("hire_id"));
                requestDTO.setStart_location(rs.getString("start_location"));
                requestDTO.setNum_of_days(rs.getInt("num_of_days"));

                // Retrieve role and status as strings from the ResultSet
                String statusString = rs.getString("status");

                // Map the role and status strings to the corresponding enums
                if (statusString != null) {
                    requestDTO.setStatus(Status.valueOf(statusString));
                }


                confirmrequests.add(requestDTO);
            }
            return confirmrequests;
        });
    }


    public void updateUserStatus(Integer hireId, Status newStatus) {
        String sql = "UPDATE hire SET status = :newStatus WHERE hire_id = :hireId";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("newStatus", newStatus.toString()); // Pass the enum as a string
        paramMap.put("hireId", hireId);

        namedParameterJdbcTemplate.update(sql, paramMap);
    }


}
