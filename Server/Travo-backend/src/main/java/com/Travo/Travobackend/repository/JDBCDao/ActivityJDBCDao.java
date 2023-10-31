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

    public List<ActivityDTO> getActivityList(Integer tripID,Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ActivityDTO> activities = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT * FROM activity_agent WHERE agent_id NOT IN (SELECT activity_id FROM trip_activity WHERE trip_id=:tripID AND day=:day)");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ActivityDTO activityDTO = new ActivityDTO();

                activityDTO.setAgent_id(rs.getInt("agent_id"));
                activityDTO.setCompany_name(rs.getString("company_name"));
                activityDTO.setActivity_img(rs.getString("activity_img"));
                activityDTO.setDescription(rs.getString("description"));
                activityDTO.setTotal_reviews(rs.getDouble("total_reviews"));
                activityDTO.setLongitude(rs.getBigDecimal("longitude"));
                activityDTO.setLatitude(rs.getBigDecimal("latitude"));

                activities.add(activityDTO);
            }
            return activities;
        });


    }

    public List<ActivityDTO> getSelectedActivityList(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ActivityDTO> activities = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT activity_agent.agent_id, activity_agent.company_name, activity_agent.activity_img,activity_agent.description, activity_agent.longitude, activity_agent.latitude,activity_agent.total_reviews, trip_activity.id, trip_activity.day FROM trip_activity  \n");
        SQL.append("INNER JOIN activity_agent ON trip_activity.activity_id = activity_agent.agent_id        \n");
        SQL.append("WHERE trip_activity.trip_id=:tripID AND trip_activity.day=:day       \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ActivityDTO activityDTO = new ActivityDTO();

                activityDTO.setAgent_id(rs.getInt("agent_id"));
                activityDTO.setCompany_name(rs.getString("company_name"));
                activityDTO.setActivity_img(rs.getString("activity_img"));
                activityDTO.setDescription(rs.getString("description"));
                activityDTO.setTotal_reviews(rs.getDouble("total_reviews"));
                activityDTO.setRow_id(rs.getInt("id"));
                activityDTO.setDay(rs.getInt("day"));
                activityDTO.setLongitude(rs.getBigDecimal("longitude"));
                activityDTO.setLatitude(rs.getBigDecimal("latitude"));

                activities.add(activityDTO);
            }
            return activities;
        });


    }

    public List<ActivityDTO> getSchedule_SelectedActivityList(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ActivityDTO> activities = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT activity_agent.agent_id, activity_agent.company_name, trip_activity.id, trip_activity.day FROM trip_activity  \n");
        SQL.append("INNER JOIN activity_agent ON trip_activity.activity_id = activity_agent.agent_id        \n");
        SQL.append("WHERE trip_activity.trip_id=:tripID AND trip_activity.day=:day       \n");
        SQL.append("AND trip_activity.activity_id NOT IN (SELECT type_id FROM trip_schedule WHERE trip_id=:tripID AND day=:day AND type='activity')       \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ActivityDTO activityDTO = new ActivityDTO();

                activityDTO.setAgent_id(rs.getInt("agent_id"));
                activityDTO.setCompany_name(rs.getString("company_name"));
                activityDTO.setRow_id(rs.getInt("id"));
                activityDTO.setDay(rs.getInt("day"));


                activities.add(activityDTO);
            }
            return activities;
        });


    }

    public List<ActivityDTO> getActivityListForMap(Integer tripID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ActivityDTO> activities = new ArrayList<>();
        params.put("tripID", tripID);


        SQL.append("SELECT DISTINCT activity_agent.agent_id, activity_agent.company_name, activity_agent.longitude, activity_agent.latitude FROM trip_activity  \n");
        SQL.append("INNER JOIN activity_agent ON trip_activity.activity_id = activity_agent.agent_id        \n");
        SQL.append("WHERE trip_activity.trip_id=:tripID      \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ActivityDTO activityDTO = new ActivityDTO();

                activityDTO.setAgent_id(rs.getInt("agent_id"));
                activityDTO.setCompany_name(rs.getString("company_name"));
                activityDTO.setLongitude(rs.getBigDecimal("longitude"));
                activityDTO.setLatitude(rs.getBigDecimal("latitude"));

                activities.add(activityDTO);
            }
            return activities;
        });


    }

}
