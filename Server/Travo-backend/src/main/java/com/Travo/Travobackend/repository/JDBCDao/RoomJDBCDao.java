package com.Travo.Travobackend.repository.JDBCDao;


import com.Travo.Travobackend.model.dto.RoomDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class RoomJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<RoomDTO> getRooms(Integer userID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<RoomDTO> hotelRooms = new ArrayList<>();
        params.put("userID", userID);

        SQL.append("SELECT rooms.room_id, rooms.room_name, rooms.description, rooms.price FROM rooms\n                                     ");
        SQL.append("INNER JOIN hotel_agent ON rooms.hotel_id = hotel_agent.hotel_id\n");
        SQL.append("WHERE hotel_agent.user_id=:userID");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                RoomDTO roomDTO = new RoomDTO();

                roomDTO.setRoom_id(rs.getInt("room_id"));
                roomDTO.setRoom_name(rs.getString("room_name"));
                roomDTO.setDescription(rs.getString("description"));
                roomDTO.setPrice(rs.getInt("price"));



                hotelRooms.add(roomDTO);
            }
            return hotelRooms;
        });


    }

}
