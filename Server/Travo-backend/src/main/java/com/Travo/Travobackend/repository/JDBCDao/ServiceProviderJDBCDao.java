package com.Travo.Travobackend.repository.JDBCDao;
import com.Travo.Travobackend.enumeration.Status;
import com.Travo.Travobackend.model.entity.StoreManager;
import org.springframework.stereotype.Repository;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class ServiceProviderJDBCDao {
    private static Connection connection;

    public static StoreManager findByUser(Integer userId) {
        StoreManager storeManager = null;

        String sql = "SELECT * FROM store_manager WHERE user_id = ?";

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, userId);
            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                storeManager = new StoreManager();
                storeManager.setStore_id(resultSet.getInt("store_id"));
                storeManager.setStatus(Status.valueOf(resultSet.getString("status")));


            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return storeManager;
    }


}

