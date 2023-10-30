package com.Travo.Travobackend.repository.JDBCDao;



import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
import com.Travo.Travobackend.model.dto.TripMemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
@Repository
public class TripJDBCDao {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    public List<TripDTO> getTripList(Integer userID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<TripDTO> userTrips = new ArrayList<>();
        params.put("userID", userID);

        SQL.append("SELECT * FROM trip\n                                     ");
        SQL.append("INNER JOIN trip_member ON trip.trip_id = trip_member.trip_id        \n");
        SQL.append("WHERE trip_member.member_id=:userID");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                TripDTO tripDTO = new TripDTO();

                tripDTO.setTrip_id(rs.getInt("trip_id"));
                tripDTO.setTrip_name(rs.getString("trip_name"));
                tripDTO.setDescription(rs.getString("description"));
                tripDTO.setStart_date(rs.getDate("start_date"));
                tripDTO.setEnd_date(rs.getDate("end_date"));



                userTrips.add(tripDTO);
            }
            return userTrips;
        });


    }

    public TripDTO getTripDetails(Integer tripID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        TripDTO tripDTO = new TripDTO();
        params.put("tripID", tripID);

        SQL.append("SELECT * FROM trip\n                                     ");
        SQL.append("WHERE trip_id=:tripID");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {

                tripDTO.setTrip_id(rs.getInt("trip_id"));
                tripDTO.setTrip_name(rs.getString("trip_name"));
                tripDTO.setDescription(rs.getString("description"));
                tripDTO.setStart_date(rs.getDate("start_date"));
                tripDTO.setEnd_date(rs.getDate("end_date"));
                tripDTO.setNote(rs.getString("note"));
            }
            return tripDTO;
        });


    }
    public List<TripMemberDTO> getTripMemberList(Integer tripID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<TripMemberDTO> tripMembers = new ArrayList<>();
        params.put("tripID", tripID);

        SQL.append("SELECT traveler.fname, traveler.lname, traveler.profile_image, trip_member.member_id,trip_member.trip_role FROM trip_member\n                                     ");
        SQL.append("INNER JOIN traveler ON trip_member.member_id = traveler.traveler_id        \n");
        SQL.append("WHERE trip_member.trip_id=:tripID");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                TripMemberDTO tripMemberDTO = new TripMemberDTO();

                tripMemberDTO.setMember_id(rs.getInt("member_id"));
                tripMemberDTO.setFname(rs.getString("fname"));
                tripMemberDTO.setLname(rs.getString("lname"));
                tripMemberDTO.setProfile_image(rs.getString("profile_image"));
                tripMemberDTO.setTripRole(rs.getString("trip_role"));



                tripMembers.add(tripMemberDTO);
            }
            return tripMembers;
        });


    }


}
