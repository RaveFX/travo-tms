package com.Travo.Travobackend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Travo.Travobackend.model.dto.BudgetDTO;
import com.Travo.Travobackend.model.entity.Budget;
import com.Travo.Travobackend.repository.BudgetRepo;
import java.util.List;

@Service
public class BudgetService {
    @Autowired
    private BudgetRepo budgetRepo;

    public Budget addBudget(BudgetDTO budgetDTO){
        Budget budget = new Budget();
        budget.setCause(budgetDTO.getCause());
        budget.setCost(budgetDTO.getCost());
        budget.setDate(budgetDTO.getDate());
        budget.setType(budgetDTO.getType());
        budget.setReceipt(budgetDTO.getReceipt());
        budget.setUser_id(budgetDTO.getUser_id());
        return budgetRepo.save(budget);
    }



    public Budget getBudgetById(Integer budgetID) {
        return budgetRepo.findById(budgetID).orElse(null);
    }

    public Budget updateBudget(Integer budgetID, BudgetDTO budgetDTO){
        Budget existingBudget = budgetRepo.findById(budgetID).orElse(null);

        if(existingBudget != null){
            existingBudget.setCause(budgetDTO.getCause());
            existingBudget.setCost(budgetDTO.getCost());
            existingBudget.setDate(budgetDTO.getDate());
            existingBudget.setType(budgetDTO.getType());
            existingBudget.setReceipt(budgetDTO.getReceipt());
            existingBudget.setUser_id(budgetDTO.getUser_id());

            return budgetRepo.save(existingBudget);
        }
        return null; //budget not found
    }

    public boolean deleteBudget(Integer budgetID){
        Budget existingBudget = budgetRepo.findById(budgetID).orElse(null);

        if(existingBudget != null){
            budgetRepo.delete(existingBudget);
            return true; //budget deleted
        }
        return false; // budget not found
    }

    public List<Budget> getAllBudgets() {
        return budgetRepo.findAll();
    }

    public double getTotalCost() {
        List<Budget> allBudgets = budgetRepo.findAll();
        double totalCost = 0.0;

        for (Budget budget : allBudgets) {
            totalCost += budget.getCost();
        }
        return totalCost;
    }

    public double getTotalCostByUserId(int userId) {
        List<Budget> budgets = budgetRepo.findByUserId(userId);
        double totalCostByUserId = budgets.stream().mapToDouble(Budget::getCost).sum();
        return totalCostByUserId;
    }

    public List<Budget> getAllBudgetsByUserId(int userId) {
        return budgetRepo.findByUserId(userId);
    }

}


