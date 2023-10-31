package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.AttractionPollDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class AttractionPollJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<AttractionPollDTO> getSelectedAttractionPollList(Integer tripID, Integer day, Integer userId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<AttractionPollDTO> attractions = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);
        params.put("userId", userId);

        SQL.append("SELECT * FROM attraction_poll WHERE trip_id= :tripID AND day= :day AND id NOT IN (SELECT attractionpoll_id FROM poll_user WHERE user_id=:userId );");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                AttractionPollDTO attractionPollDTO = new AttractionPollDTO();

                attractionPollDTO.setPlace_id(rs.getString("place_id"));
                attractionPollDTO.setName(rs.getString("name"));
                attractionPollDTO.setAddress(rs.getString("address"));
                attractionPollDTO.setImg_url(rs.getString("img_url"));
                attractionPollDTO.setId(rs.getInt("id"));
                attractionPollDTO.setDay(rs.getInt("day"));
                attractionPollDTO.setTotal_votes(rs.getInt("total_votes"));

                attractions.add(attractionPollDTO);
            }
            return attractions;
        });

    }

    public List<AttractionPollDTO> getSelectedAttractionVotedPollList(Integer tripID, Integer day, Integer userId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<AttractionPollDTO> attractions = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);
        params.put("userId", userId);

        SQL.append("SELECT * FROM attraction_poll WHERE trip_id= :tripID AND day= :day AND id IN (SELECT attractionpoll_id FROM poll_user WHERE user_id=:userId );");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                AttractionPollDTO attractionPollDTO = new AttractionPollDTO();

                attractionPollDTO.setPlace_id(rs.getString("place_id"));
                attractionPollDTO.setName(rs.getString("name"));
                attractionPollDTO.setAddress(rs.getString("address"));
                attractionPollDTO.setImg_url(rs.getString("img_url"));
                attractionPollDTO.setId(rs.getInt("id"));
                attractionPollDTO.setDay(rs.getInt("day"));
                attractionPollDTO.setTotal_votes(rs.getInt("total_votes"));

                attractions.add(attractionPollDTO);
            }
            return attractions;
        });

    }

    public void updateAttractionPoll(Integer tripId, Integer attractionId, Boolean isChecked, Integer day) {

        int x = isChecked ? 1 : -1;

        String sql = "UPDATE attraction_poll SET total_votes = total_votes + :x WHERE id = :attractionId AND trip_id = :tripId AND day = :day";
        Map<String, Object> paramMap = new HashMap<>();

        paramMap.put("x", x);
        paramMap.put("tripId", tripId);
        paramMap.put("attractionId", attractionId);
        paramMap.put("day", day);

        String selectSql = "SELECT total_votes FROM attraction_poll WHERE id = :attractionId AND trip_id = :tripId AND day = :day";
        Integer currentTotalVotes = namedParameterJdbcTemplate.queryForObject(selectSql, paramMap, Integer.class);

        if (currentTotalVotes != null && (isChecked || currentTotalVotes + x > 0)) {
            namedParameterJdbcTemplate.update(sql, paramMap);
        }
    }
}
