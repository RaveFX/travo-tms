package com.Travo.Travobackend.repository.JDBCDao;



import com.Travo.Travobackend.model.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        SQL.append("WHERE trip_member.member_id=:userID ORDER BY trip.trip_id DESC");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                TripDTO tripDTO = new TripDTO();

                tripDTO.setTrip_id(rs.getInt("trip_id"));
                tripDTO.setTrip_name(rs.getString("trip_name"));
                tripDTO.setDescription(rs.getString("description"));
                tripDTO.setStart_date(rs.getObject("start_date", LocalDate.class));
                tripDTO.setEnd_date(rs.getObject("end_date" , LocalDate.class));



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
                tripDTO.setUniqueLink(rs.getString("unique_link"));
                tripDTO.setStart_date(rs.getObject("start_date" , LocalDate.class));
                tripDTO.setEnd_date(rs.getObject("end_date" , LocalDate.class));
                tripDTO.setNote(rs.getString("note"));
            }
            return tripDTO;
        });


    }
    public List<GuideDTO> getGuideDetails() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<GuideDTO> guide = new ArrayList<>();

        SQL.append("SELECT * FROM guide");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                GuideDTO guideDTO = new GuideDTO();

                guideDTO.setFname(rs.getString("fname"));
                guideDTO.setLname(rs.getString("lname"));
                guideDTO.setNic(rs.getString("nic"));
                guideDTO.setContact_num(rs.getString("contact_num"));
                guideDTO.setDescription(rs.getString("description"));
                guideDTO.setQualifications(rs.getString("qualifications"));
                guideDTO.setGuide_id(rs.getInt("guide_id"));
                guideDTO.setDistrict(rs.getString("district"));

                guide.add(guideDTO);

            }
            return guide;
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





    public List<TripDTO> getAllTrips(String SQL, Map<String, Object> params) {
        return namedParameterJdbcTemplate.query(SQL, params, (rs, rowNum) -> {
            TripDTO tripDTO = new TripDTO();
            tripDTO.setTrip_id(rs.getInt("trip_id"));
            tripDTO.setTrip_admin(rs.getString("trip_admin"));
            tripDTO.setTrip_name(rs.getString("trip_name"));
            return tripDTO;

        });
    }

    public UserInformationDTO getUserDetails(Integer userID) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        UserInformationDTO userInformationDTO = new UserInformationDTO();
        params.put("userID", userID);

        SQL.append("SELECT * FROM traveler\n                                     ");
        SQL.append("WHERE traveler_id=:userID");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                userInformationDTO.setFname(rs.getString("fname"));
                userInformationDTO.setLname(rs.getString("lname"));

            }
            return userInformationDTO;
        });


    }

}
