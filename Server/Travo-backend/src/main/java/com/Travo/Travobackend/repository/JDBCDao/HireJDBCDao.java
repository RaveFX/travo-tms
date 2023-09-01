package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.RequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class HireJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<RequestDTO> getAllRequests() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<RequestDTO> requests = new ArrayList<>();

        SQL.append("SELECT * FROM hire join traveler on hire.traveler_id = traveler.traveler_id");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                RequestDTO requestDTO = new RequestDTO();

                requestDTO.setDate(rs.getDate("date"));
                requestDTO.setDestination(rs.getString("destination"));




                requests.add(requestDTO);
            }
            return requests;
        });


    }
}
