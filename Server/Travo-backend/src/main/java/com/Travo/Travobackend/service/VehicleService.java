package com.Travo.Travobackend.service;

        import com.Travo.Travobackend.model.dto.VehicleDTO;
        import com.Travo.Travobackend.model.entity.Vehicle;
        import com.Travo.Travobackend.repository.VehicleRepo;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;

        import java.util.List;

@Service
public class VehicleService {
    @Autowired
    private VehicleRepo vehicleRepo;

    public Vehicle addVehicle(VehicleDTO vehicleDTO) {
        Vehicle vehicle = new Vehicle();
        vehicle.setCompanyID(vehicleDTO.getCompanyID());
        vehicle.setVehicleType(vehicleDTO.getVehicleType());
        vehicle.setVehicleModel(vehicleDTO.getVehicleModel());
        vehicle.setRate(vehicleDTO.getRate());
        vehicle.setPassengers(vehicleDTO.getPassengers());
        vehicle.setDescription(vehicleDTO.getDescription());
        vehicle.setLicenseNo(vehicleDTO.getLicenseNo());
        vehicle.setAC(vehicleDTO.getAC());
        vehicle.setBT(vehicleDTO.getBT());
        vehicle.setWiFi(vehicleDTO.getWiFi());
        vehicle.setSunroof(vehicleDTO.getSunroof());
        vehicle.setLocation(vehicleDTO.getLocation());
        vehicle.setImage(vehicleDTO.getImage());

        return vehicleRepo.save(vehicle);
    }

    public Vehicle getVehicleById(Integer vehicleID) {
        return vehicleRepo.findById(vehicleID).orElse(null);
    }

    public Vehicle updateVehicle(Integer vehicleID, VehicleDTO vehicleDTO) {
        Vehicle existingVehicle = vehicleRepo.findById(vehicleID).orElse(null);

        if (existingVehicle != null) {

            existingVehicle.setCompanyID(vehicleDTO.getCompanyID());
            existingVehicle.setVehicleType(vehicleDTO.getVehicleType());
            existingVehicle.setVehicleModel(vehicleDTO.getVehicleModel());
            existingVehicle.setRate(vehicleDTO.getRate());
            existingVehicle.setPassengers(vehicleDTO.getPassengers());
            existingVehicle.setDescription(vehicleDTO.getDescription());
            existingVehicle.setLicenseNo(vehicleDTO.getLicenseNo());
            existingVehicle.setAC(vehicleDTO.getAC());
            existingVehicle.setBT(vehicleDTO.getBT());
            existingVehicle.setWiFi(vehicleDTO.getWiFi());
            existingVehicle.setSunroof(vehicleDTO.getSunroof());
            existingVehicle.setLocation(vehicleDTO.getLocation());
            existingVehicle.setImage(vehicleDTO.getImage());

            return vehicleRepo.save(existingVehicle);
        }
        return null; // Vehicle not found
    }

    public boolean deleteVehicle(Integer vehicleID) {
        Vehicle existingVehicle = vehicleRepo.findById(vehicleID).orElse(null);

        if (existingVehicle != null) {
            vehicleRepo.delete(existingVehicle);
            return true; // Vehicle deleted
        }
        return false; // Vehicle not found
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepo.findAll();
    }
}
