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
        budget.setTime(budgetDTO.getTime());
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
            existingBudget.setTime(budgetDTO.getTime());

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
}

