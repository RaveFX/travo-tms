package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.ScheduleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class ScheduleJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<ScheduleDTO> getScheduleByDay(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ScheduleDTO> schedules = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT *  FROM trip_schedule  \n");
        SQL.append("WHERE trip_id=:tripID AND day=:day ORDER BY start_time ASC   \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ScheduleDTO scheduleDTO = new ScheduleDTO();

                scheduleDTO.setSchedule_id(rs.getInt("id"));
                scheduleDTO.setLocation_name(rs.getString("location_name"));
                scheduleDTO.setStart_time(rs.getObject("start_time", LocalTime.class));
                scheduleDTO.setEnd_time(rs.getObject("end_time", LocalTime.class));
                scheduleDTO.setType(rs.getString("type"));



                schedules.add(scheduleDTO);
            }
            return schedules;
        });


    }
}
