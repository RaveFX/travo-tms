package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.ActivityDTO;
import com.Travo.Travobackend.model.dto.ActivityPollDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class ActivityPollJDBao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

//    public List<ActivityPollDTO> getSelectedActivityPollList(Integer tripID, Integer day,Integer UserId) {
//        StringBuffer SQL = new StringBuffer();
//        HashMap<String, Object> params = new HashMap<>();
//        List<ActivityPollDTO> activities = new ArrayList<>();
//        params.put("day", day);
//        params.put("tripID", tripID);
//        params.put("UserId", UserId);
//
//        SQL.append("SELECT activity_agent.agent_id, activity_agent.company_name, activity_agent.activity_img,activity_agent.description, activity_agent.total_reviews, activity_poll.id, activity_poll.day FROM activity_poll \n");
//        SQL.append("INNER JOIN activity_agent ON activity_poll.activity_id = activity_agent.agent_id        \n");
//        SQL.append("WHERE activity_poll.trip_id=:tripID AND activity_poll.day=:day       \n");
//
//
//        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
//            while (rs.next()) {
//                ActivityPollDTO activityPollDTO = new ActivityPollDTO();
//
//                activityPollDTO.setAgent_id(rs.getInt("agent_id"));
//                activityPollDTO.setTrip_id(rs.getInt("trip_id"));
//                activityPollDTO.setActivity_id(rs.getInt("activity_id"));
//                activityPollDTO.setTotal_votes(rs.getInt("totoal_votes"));
//                activityPollDTO.setId(rs.getInt("id"));
//                activityPollDTO.setDay(rs.getInt("day"));
//
//                activities.add(activityPollDTO);
//            }
//            return activities;
//        });
//    }
}
