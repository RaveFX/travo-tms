package com.Travo.Travobackend.repository.JDBCDao;



import com.Travo.Travobackend.enumeration.TripRole;
import com.Travo.Travobackend.model.dto.TripMemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@Repository
public class TripMemberJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    public List<TripMemberDTO> getMemberList(Integer tripId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<TripMemberDTO> members = new ArrayList<>();

        SQL.append("SELECT t.*, u.profile_image\n" +
                "FROM trip_member t\n" +
                "INNER JOIN user u ON u.user_id = t.user_id WHERE t.trip_id = :tripId ;\n");

        params.put("tripId", tripId);

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                TripMemberDTO tripMemberDTO = new TripMemberDTO();

                tripMemberDTO.setMember_id(rs.getInt("member_id"));
                tripMemberDTO.setMember_fname(rs.getString("member_fname"));
                tripMemberDTO.setTripRole(TripRole.valueOf(rs.getString("trip_role")));
                tripMemberDTO.setTrip_id(rs.getInt("trip_id"));
                tripMemberDTO.setUser_id(rs.getInt("user_id"));
//                tripMemberDTO.setFname(rs.getString("fname"));
                tripMemberDTO.setProfileImage(rs.getString("profile_image"));

                members .add(tripMemberDTO);
            }
            return members ;
        });


    }

}
