package com.Travo.Travobackend.repository.JDBCDao;
import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.Travo.Travobackend.model.dto.HotelPollDTO;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class HotelPollJDBCDao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public HotelPollJDBCDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void updateHotelPoll(Integer tripId, Integer hotelId, Boolean isChecked) {
        // Determine the value to add to total_votes based on the isChecked flag.
        int x = isChecked ? 1 : -1;

        String sql = "UPDATE hotel_poll SET total_votes = total_votes + :x WHERE hotel_id = :hotelId AND trip_id = :tripId";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("x", x);
        paramMap.put("tripId", tripId);
        paramMap.put("hotelId", hotelId);

        namedParameterJdbcTemplate.update(sql, paramMap);
    }

    public List<HotelPollDTO> getAllPollHotels(String SQL, Map<String, Object> params) {
        return namedParameterJdbcTemplate.query(SQL, params, (rs, rowNum) -> {
            HotelPollDTO hotelPollDTO = new HotelPollDTO();
            hotelPollDTO.setId(rs.getInt("id"));
            hotelPollDTO.setHotel_id(rs.getInt("hotel_id"));
            hotelPollDTO.setTotal_votes(rs.getInt("total_votes"));
            hotelPollDTO.setHotel_name(rs.getString("acc_name"));
            return hotelPollDTO;

        });
    }




    public List<HotelPollDTO> getSelectedHotelPollList(Integer tripID, Integer day,Integer userID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelPollDTO> hotelpoll = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);
        params.put("userID", userID);

//        SQL.append("SELECT hotel_agent.hotel_id, hotel_agent.hotel_name, hotel_agent.description, hotel_agent.hotel_img, hotel_agent.total_reviews, trip_hotel.id, trip_hotel.day  FROM trip_hotel  \n");
//        SQL.append("INNER JOIN hotel_agent ON trip_hotel.hotel_id = hotel_agent.hotel_id        \n");
//        SQL.append("WHERE trip_hotel.trip_id=:tripID AND trip_hotel.day=:day       \n");

        SQL.append("SELECT \n" +
                "    hotel_agent.hotel_id, hotel_agent.hotel_name, hotel_agent.description, hotel_agent.hotel_img, \n" +
                "    hotel_agent.total_reviews, hotel_poll.id, hotel_poll.day, hotel_poll.total_votes \n" +
                "FROM hotel_poll \n" +
                "INNER JOIN hotel_agent ON hotel_poll.hotel_id = hotel_agent.hotel_id \n" +
                "WHERE hotel_poll.trip_id = :tripID \n" +
                "    AND hotel_poll.day = :day  \n" +
                "    AND hotel_poll.id NOT IN (SELECT hotelpoll_id FROM hotelpoll_user WHERE user_id = :userID);");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelPollDTO hotelDTO = new HotelPollDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));
                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setTotal_reviews(rs.getDouble("total_reviews"));
                hotelDTO.setId(rs.getInt("id"));
                hotelDTO.setDay(rs.getInt("day"));

                hotelpoll.add(hotelDTO);
            }
            return hotelpoll;
        });

    }

    public List<HotelPollDTO> getSelectedHotelVotedPollList(Integer tripID, Integer day,Integer userID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelPollDTO> hotelpoll = new ArrayList<>();
        params.put("tripID", tripID);
        params.put("day", day);
        params.put("userID", userID);

//        SQL.append("SELECT hotel_agent.hotel_id, hotel_agent.hotel_name, hotel_agent.description, hotel_agent.hotel_img, hotel_agent.total_reviews, trip_hotel.id, trip_hotel.day  FROM trip_hotel  \n");
//        SQL.append("INNER JOIN hotel_agent ON trip_hotel.hotel_id = hotel_agent.hotel_id        \n");
//        SQL.append("WHERE trip_hotel.trip_id=:tripID AND trip_hotel.day=:day       \n");

        SQL.append("SELECT \n" +
                "    hotel_agent.hotel_id, hotel_agent.hotel_name, hotel_agent.description, hotel_agent.hotel_img, \n" +
                "    hotel_agent.total_reviews, hotel_poll.id, hotel_poll.day, hotel_poll.total_votes \n" +
                "FROM hotel_poll \n" +
                "INNER JOIN hotel_agent ON hotel_poll.hotel_id = hotel_agent.hotel_id \n" +
                "WHERE hotel_poll.trip_id = :tripID \n" +
                "    AND hotel_poll.day = :day  \n" +
                "    AND hotel_poll.id IN (SELECT hotelpoll_id FROM hotelpoll_user WHERE user_id = :userID);");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelPollDTO hotelDTO = new HotelPollDTO();

                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));
                hotelDTO.setDescription(rs.getString("description"));
                hotelDTO.setTotal_reviews(rs.getDouble("total_reviews"));
                hotelDTO.setId(rs.getInt("id"));
                hotelDTO.setDay(rs.getInt("day"));

                hotelpoll.add(hotelDTO);
            }
            return hotelpoll;
        });

    }

    public void updateHotelPoll(Integer tripId, Integer attractionId, Boolean isChecked, Integer day) {

        int x = isChecked ? 1 : -1;

        String sql = "UPDATE hotel_poll SET total_votes = total_votes + :x WHERE id = :attractionId AND trip_id = :tripId AND day = :day";
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





