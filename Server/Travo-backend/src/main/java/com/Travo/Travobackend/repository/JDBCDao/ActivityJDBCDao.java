package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.ActivityDTO;
import com.Travo.Travobackend.model.dto.HotelDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class ActivityJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<ActivityDTO> getActivityList() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ActivityDTO> activities = new ArrayList<>();

        SQL.append("SELECT * FROM activity_agent");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ActivityDTO activityDTO = new ActivityDTO();

                activityDTO.setAgent_id(rs.getInt("agent_id"));
                activityDTO.setCompany_name(rs.getString("company_name"));
                activityDTO.setActivity_img(rs.getString("activity_img"));
                activityDTO.setDescription(rs.getString("description"));
                activityDTO.setTotal_reviews(rs.getDouble("total_reviews"));

                activities.add(activityDTO);
            }
            return activities;
        });


    }
}
