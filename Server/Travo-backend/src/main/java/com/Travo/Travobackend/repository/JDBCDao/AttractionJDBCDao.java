package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.AttractionDTO;
import com.Travo.Travobackend.model.dto.HotelDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class AttractionJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<AttractionDTO> getSelectedAttractionList(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<AttractionDTO> attractions = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT * FROM trip_attraction  \n");
        SQL.append("WHERE trip_id=:tripID AND day=:day       \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                AttractionDTO attractionDTO = new AttractionDTO();

                attractionDTO.setPlace_id(rs.getString("place_id"));
                attractionDTO.setName(rs.getString("name"));
                attractionDTO.setAddress(rs.getString("address"));
                attractionDTO.setImg_url(rs.getString("img_url"));
                attractionDTO.setRow_id(rs.getInt("id"));
                attractionDTO.setDay(rs.getInt("day"));

                attractions.add(attractionDTO);
            }
            return attractions;
        });


    }

    public List<AttractionDTO> getSchedule_SelectedAttractionList(Integer tripID, Integer day) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<AttractionDTO> attractions = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);

        SQL.append("SELECT * FROM trip_attraction  \n");
        SQL.append("WHERE trip_id=:tripID AND day=:day       \n");
        SQL.append("AND place_id NOT IN (SELECT type_id FROM trip_schedule WHERE trip_id=:tripID AND day=:day AND type='attraction')       \n");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                AttractionDTO attractionDTO = new AttractionDTO();

                attractionDTO.setPlace_id(rs.getString("place_id"));
                attractionDTO.setName(rs.getString("name"));
                attractionDTO.setAddress(rs.getString("address"));
                attractionDTO.setImg_url(rs.getString("img_url"));
                attractionDTO.setRow_id(rs.getInt("id"));
                attractionDTO.setDay(rs.getInt("day"));

                attractions.add(attractionDTO);
            }
            return attractions;
        });


    }
}
