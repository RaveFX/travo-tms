package com.Travo.Travobackend.repository.JDBCDao;



import com.Travo.Travobackend.model.dto.GuideDTO;
import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.HotelReservationDTO;
import com.Travo.Travobackend.model.dto.TripDTO;
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
            }
            return tripDTO;
        });


    }

    public List<GuideDTO> getGuideDetails() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<GuideDTO> guide = new ArrayList<>();

        SQL.append("SELECT * FROM guide")   ;

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


}
