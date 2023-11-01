package com.Travo.Travobackend.repository.JDBCDao;

import com.Travo.Travobackend.model.dto.ActivityDTO;
import com.Travo.Travobackend.model.dto.HotelDTO;
import com.Travo.Travobackend.model.dto.ReservationDTO;
import com.Travo.Travobackend.model.dto.VehiclesDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
public class TravelerOptionJDBCDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

//======================Hotel===============================
    public List<HotelDTO> getAllHotelsName() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();


        SQL.append("SELECT * FROM hotel_agent");
//        SQL.append("SELECT * FROM rooms inner join hotel_agent on rooms.hotel_id=hotel_agent.hotel_id group by hotel_agent.hotel_name ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();


                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_description(rs.getString("description"));
                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setContact_num(rs.getInt("contact_num"));
                hotelDTO.setBranch(rs.getString("branch"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));


                hotels.add(hotelDTO);
            }
            return hotels;
        });



    }

    public List<HotelDTO> getAllHotelsType(Integer hotelId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> types = new ArrayList<>();


        SQL.append("SELECT * FROM rooms inner join hotel_agent on rooms.hotel_id=hotel_agent.hotel_id ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setRoom_name(rs.getString("room_name"));
                hotelDTO.setRoom_id(rs.getInt("room_id"));
                hotelDTO.setPrice(rs.getInt("price"));
                hotelDTO.setRoom_description(rs.getString("description"));
                hotelDTO.setHotel_description(rs.getString("description"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));
                hotelDTO.setRoom_image(rs.getString("room_image"));


                types.add(hotelDTO);
            }
            return types;
        });


    }
    public List<HotelDTO> getHotelBasics(Integer hotelId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> basics = new ArrayList<>();
        params.put("hotelId", hotelId);

        SQL.append("SELECT * FROM hotel_agent where hotel_id=:hotelId ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_description(rs.getString("description"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setContact_num(rs.getInt("contact_num"));
                hotelDTO.setHotel_img(rs.getString("hotel_img"));

                basics.add(hotelDTO);
            }
            return basics;
        });


    }
    public List<HotelDTO> getHotelsDetail(Integer hotelId,Integer roomId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<HotelDTO> hotels = new ArrayList<>();
        params.put("hotelId", hotelId);
        params.put("roomId", roomId);

        SQL.append("SELECT * FROM rooms inner join hotel_agent on rooms.hotel_id=hotel_agent.hotel_id where rooms.hotel_id=:hotelId and rooms.room_id=:roomId; ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                HotelDTO hotelDTO = new HotelDTO();

                hotelDTO.setHotel_description(rs.getString("description"));
                hotelDTO.setHotel_name(rs.getString("hotel_name"));
                hotelDTO.setChild_count(rs.getInt("child_count"));
                hotelDTO.setPrice(rs.getInt("price"));
                hotelDTO.setAdult_count(rs.getInt("adult_count"));
                hotelDTO.setRoom_description(rs.getString("description"));
                hotelDTO.setHotel_id(rs.getInt("hotel_id"));
                hotelDTO.setAc(rs.getBoolean("ac"));
                hotelDTO.setBreakfast(rs.getBoolean("breakfast"));
                hotelDTO.setDinner(rs.getBoolean("dinner"));
                hotelDTO.setLunch(rs.getBoolean("lunch"));
                hotelDTO.setView(rs.getString("view"));
                hotelDTO.setWifi(rs.getBoolean("wifi"));
                hotelDTO.setRoom1(rs.getString("room1"));
                hotelDTO.setRoom2(rs.getString("room2"));
                hotelDTO.setRoom3(rs.getString("room3"));




                hotels.add(hotelDTO);
            }
            return hotels;
        });


    }

    public List<ReservationDTO> getAvailability(Integer roomId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ReservationDTO> availability = new ArrayList<>();
        params.put("roomId", roomId);
//        params.put("boardType",boardType);

        SQL.append("SELECT checkin_date FROM reservation where room_id=:roomId group by checkin_date  ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ReservationDTO reservationDTO = new ReservationDTO();
//                reservationDTO.setRoom_id(rs.getInt("room_id"));
//                reservationDTO.setBoardType(rs.getString("board_type"));
                reservationDTO.setCheckin_date(rs.getDate("checkin_date"));


                availability.add(reservationDTO);
            }
            return availability;
        });


    }

//========================Vehicle==============================
    public List<VehiclesDTO> getAllVehicles() {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<VehiclesDTO> vehicles = new ArrayList<>();

        SQL.append("SELECT * FROM vehicles inner join vehicle_renter on vehicles.renter_id=vehicle_renter.renter_id ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                VehiclesDTO vehiclesDTO = new VehiclesDTO();

                vehiclesDTO.setVehicle_id(rs.getInt("Vehicle_id"));
                vehiclesDTO.setVehicle_type(rs.getString("Vehicle_type"));
                vehiclesDTO.setSeat(rs.getInt("seat"));
                vehiclesDTO.setLarge_bag(rs.getInt("large_bag"));
                vehiclesDTO.setSmall_bag(rs.getInt("small_bag"));
                vehiclesDTO.setRate(rs.getInt("rate"));
                vehiclesDTO.setVehicle_model(rs.getString("Vehicle_model"));
                vehiclesDTO.setDescription(rs.getString("Description"));
                vehiclesDTO.setLocation(rs.getString("Location"));
                vehiclesDTO.setBluetooth(rs.getBoolean("Bluetooth"));
                vehiclesDTO.setImg(rs.getString("img"));
                vehiclesDTO.setCompany_name(rs.getString("company_name"));


                vehicles.add(vehiclesDTO);
            }
            return vehicles;
        });
    }
    public List<VehiclesDTO> getVehicleTypes(Integer vehicleId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<VehiclesDTO> vehicle = new ArrayList<>();
        params.put("vehicleId", vehicleId);

        SQL.append("SELECT * FROM vehicles inner join vehicle_renter on vehicles.renter_id=vehicle_renter.renter_id " +
                "inner join user on user.user_id=vehicle_renter.user_id where vehicles.vehicle_id=:vehicleId ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                VehiclesDTO vehiclesDTO = new VehiclesDTO();

                vehiclesDTO.setVehicle_id(rs.getInt("Vehicle_id"));
                vehiclesDTO.setVehicle_type(rs.getString("Vehicle_type"));
                vehiclesDTO.setSeat(rs.getInt("seat"));
                vehiclesDTO.setLarge_bag(rs.getInt("large_bag"));
                vehiclesDTO.setSmall_bag(rs.getInt("small_bag"));
                vehiclesDTO.setRate(rs.getInt("rate"));
                vehiclesDTO.setVehicle_model(rs.getString("Vehicle_model"));
                vehiclesDTO.setDescription(rs.getString("Description"));
                vehiclesDTO.setLocation(rs.getString("Location"));
                vehiclesDTO.setBluetooth(rs.getBoolean("Bluetooth"));
                vehiclesDTO.setPassengers(rs.getInt("passengers"));
                vehiclesDTO.setWifi(rs.getBoolean("wifi"));
                vehiclesDTO.setSunroof(rs.getBoolean("sunroof"));
                vehiclesDTO.setAir_conditioning(rs.getBoolean("air_conditioning"));
                vehiclesDTO.setLicence_plate(rs.getString("licence_plate"));
                vehiclesDTO.setContact_num(rs.getString("contact_num"));




                vehicle.add(vehiclesDTO);
            }
            return vehicle;
        });
    }

        public List<VehiclesDTO> getVehicleRenter() {
            StringBuffer SQL = new StringBuffer();
            HashMap<String, Object> params = new HashMap<>();
            List<VehiclesDTO> company = new ArrayList<>();


            SQL.append("SELECT * FROM vehicle_renter  ");

            return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
                while (rs.next()) {
                    VehiclesDTO vehiclesDTO = new VehiclesDTO();

                    vehiclesDTO.setCompany_name(rs.getString("company_name"));


                    company.add(vehiclesDTO);
                }
                return company;
            });
    }

//    =======================Activity Agent===================


    public List<ActivityDTO> getActivityAgents(Integer agentId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ActivityDTO> company = new ArrayList<>();
        params.put("agentId", agentId);

        SQL.append("SELECT * FROM activity_agent where agent_id=:agentId; ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ActivityDTO activityDTO = new ActivityDTO();
                activityDTO.setAgent_id(rs.getInt("agent_id"));
                activityDTO.setCompany_name(rs.getString("company_name"));
                activityDTO.setDescription(rs.getString("description"));
                activityDTO.setActivity_img(rs.getString("activity_img"));


                company.add(activityDTO);
            }
            return company;
        });
    }
public List<ActivityDTO> getAllEvents(Integer agentId) {
    StringBuffer SQL = new StringBuffer();
    HashMap<String, Object> params = new HashMap<>();
    List<ActivityDTO> company = new ArrayList<>();
    params.put("agentId", agentId);

    SQL.append("SELECT * FROM activity_agent inner join event on event.agent_id=activity_agent.agent_id where activity_agent.agent_id=:agentId; ");

    return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
        while (rs.next()) {
            ActivityDTO activityDTO = new ActivityDTO();

            activityDTO.setEvent_id(rs.getInt("event_id"));
            activityDTO.setEvent_name(rs.getString("event_name"));
            activityDTO.setEvent_description(rs.getString("event_description"));
            activityDTO.setEvent_date(rs.getString("date"));
            activityDTO.setStart_time(rs.getTime("start_time"));
            activityDTO.setEnd_time(rs.getTime("end_time"));
            activityDTO.setTicket_price(rs.getInt("ticket_price"));
            activityDTO.setTicket_quantity(rs.getInt("ticket_quantity"));



            company.add(activityDTO);
        }
        return company;
    });
}

    public List<ActivityDTO> getEventsDetails(Integer agentId,Integer eventId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ActivityDTO> company = new ArrayList<>();
        params.put("agentId", agentId);
        params.put("eventId", eventId);

        SQL.append("SELECT event.ticket_quantity, event.ticket_price  FROM activity_agent inner join event on event.agent_id=activity_agent.agent_id where event.agent_id=:agentId and event.event_id=:eventId");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ActivityDTO activityDTO = new ActivityDTO();
                activityDTO.setTicket_price(rs.getInt("ticket_price"));
                activityDTO.setTicket_quantity(rs.getInt("ticket_quantity"));

                company.add(activityDTO);
            }
            return company;
        });
    }
    public List<ActivityDTO> getBookingAvailability(Integer eventId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ActivityDTO> availability = new ArrayList<>();
        params.put("eventId", eventId);

        SQL.append("SELECT date FROM ticket_booking where event_id=:eventId group by date  ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ActivityDTO activityDTO = new ActivityDTO();
                activityDTO.setDate(rs.getDate("date"));


                availability.add(activityDTO);
            }
            return availability;
        });


    }

    public List<ActivityDTO> getCount(Integer eventId) {
        StringBuffer SQL = new StringBuffer();
        HashMap<String, Object> params = new HashMap<>();
        List<ActivityDTO> count = new ArrayList<>();
        params.put("eventId", eventId);

        SQL.append("SELECT SUM(ticket_booking.quantity),ticket_booking.date, event.ticket_quantity FROM ticket_booking inner join event on event.event_id=ticket_booking.event_id  where ticket_booking.event_id=:eventId group by ticket_booking.date ");

        return namedParameterJdbcTemplate.query(SQL.toString(), params, rs -> {
            while (rs.next()) {
                ActivityDTO activityDTO = new ActivityDTO();
                activityDTO.setSum_TicketCount(rs.getInt("sum(ticket_booking.quantity)"));
                activityDTO.setDate(rs.getDate("date"));
                activityDTO.setTicket_quantity(rs.getInt("ticket_quantity"));



                count.add(activityDTO);
            }
            return count;
        });


    }


}
