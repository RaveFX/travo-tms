package com.Travo.Travobackend.repository.JDBCDao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Optional;

public class BudgetJDBCDao {
    private final Connection connection; // Your database connection goes here

    public BudgetJDBCDao(Connection connection) {
        this.connection = connection;
    }

    public Optional<Integer> getTotalCostByTripId(int tripId) {
        String query = "SELECT SUM(cost) AS total_cost FROM Budget WHERE trip_id = ?";

        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, tripId);

            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    int totalCost = resultSet.getInt("total_cost");
                    return Optional.of(totalCost);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace(); // Handle the exception appropriately in your application
        }

        return Optional.empty(); // Return an empty Optional if no result is found
    }
}
