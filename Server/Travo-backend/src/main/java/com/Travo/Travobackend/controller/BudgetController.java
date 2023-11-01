package com.Travo.Travobackend.controller;
import com.Travo.Travobackend.model.dto.BudgetDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Travo.Travobackend.model.entity.Budget;
import com.Travo.Travobackend.service.BudgetService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/budget")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor

public class BudgetController {
    @Autowired
    private BudgetService budgetService;
    @PostMapping("/addBudget")
    public ResponseEntity<Budget> addBudget(@ModelAttribute BudgetDTO budgetDTO){
        Budget addedBudget = budgetService.addBudget(budgetDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedBudget);
    }

    @GetMapping("/getAllBudgets")
    public ResponseEntity<List<Budget>> getAllBudgets() {
        List<Budget> budgets = budgetService.getAllBudgets();

        if (!budgets.isEmpty()) {
            return ResponseEntity.ok(budgets);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/getAllBudgets/{tripId}")
    public ResponseEntity<List<Budget>> getAllBudgetsByTripId(@PathVariable int tripId) {
        List<Budget> budgets = budgetService.getAllBudgetsByTripId(tripId);

        if (!budgets.isEmpty()) {
            return ResponseEntity.ok(budgets);
        } else {
            return ResponseEntity.noContent().build();
        }
    }


    @GetMapping("/getBudgetsByUserId/{user_id}")
    public ResponseEntity<List<Budget>> getBudgetsByUserId(@PathVariable int user_id) {
        List<Budget> budgets = budgetService.getAllBudgetsByUserId(user_id);

        if (!budgets.isEmpty()) {
            return ResponseEntity.ok(budgets);
        } else {
            return ResponseEntity.noContent().build();
        }
    }


    @GetMapping("/getTotalCost")
    public ResponseEntity<Double> getTotalCost() {
        double totalCost = budgetService.getTotalCost();

        return ResponseEntity.ok(totalCost);
    }



//    @GetMapping("/getTotalCostByUserId/{user_id}")
//    public ResponseEntity<Double> getTotalCostByUserId(@PathVariable int user_id) {
//        double totalCostByUserId = budgetService.getTotalCostByUserId(user_id);
//        return ResponseEntity.ok(totalCostByUserId);
//    }

    @GetMapping("/getTotalCostByUserId/{user_id}/{tripId}")
    public ResponseEntity<Double> getTotalCostByUserId(@PathVariable int user_id, @PathVariable int tripId)  {
        double totalCostByUserId = budgetService.getTotalCostByUserId(user_id, tripId);
        return ResponseEntity.ok(totalCostByUserId);
    }


    // @GetMapping("/{budgetID}")
    // public ResponseEntity<Budget> getBudgetById(@PathVariable Integer budgetID){
    //     Budget budget =budgetService.getBudgetById(budgetID);

    //     if(budget != null){
    //         return ResponseEntity.ok(budget);
    //     }else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

    @PutMapping("/{budgetID}")
    public ResponseEntity<Budget> updateBudget(
            @PathVariable Integer budgetID,
            @ModelAttribute BudgetDTO budgetDTO
    ){
        Budget updatedBudget = budgetService.updateBudget(budgetID,budgetDTO);

        if(updatedBudget != null){
            return ResponseEntity.ok(updatedBudget);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{budgetID}")
    public ResponseEntity<Void> deleteBudget(@PathVariable Integer budgetID){
        boolean isDeleted =budgetService.deleteBudget(budgetID);

        if(isDeleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getTotalCostByTripId/{tripId}")
    public ResponseEntity<Double> getTotalCostByTripId(@PathVariable int tripId) {
        double totalCostByTripId = budgetService.getTotalCostByTripId(tripId);
        return ResponseEntity.ok(totalCostByTripId);
    }


//    @GetMapping("/getBudgetsByUserId/{user_id}/{tripId}")
//    public ResponseEntity<BudgetDTO> getBudgetsByUserId(@PathVariable int user_id, @PathVariable int tripId) {
//        List<Budget> budgets = budgetService.getAllBudgetsByUserId(user_id);
//
//        if (!budgets.isEmpty()) {
//            String userName = budgetService.getUserNameByUserId(user_id);
//            double totalCostByUserId = budgetService.getTotalCostByUserId(user_id, tripId);
//
//            BudgetDTO budgetDTO = new BudgetDTO(userName, totalCostByUserId);
//            return ResponseEntity.ok(budgetPeepDTO);
//        } else {
//            return ResponseEntity.noContent().build();
//        }
//    }

    @GetMapping("/getBudgetsByUserId/{user_id}/{tripId}")
    public ResponseEntity<List<BudgetDTO>> getBudgetsByUserId(@PathVariable int user_id, @PathVariable int tripId) {
        List<Budget> budgets = budgetService.getAllBudgetsByUserId(user_id);

        if (!budgets.isEmpty()) {
            String userName = budgetService.getUserNameByUserId(user_id);

            List<BudgetDTO> budgetDTOs = new ArrayList<>();
            for (Budget budget : budgets) {
                BudgetDTO budgetDTO = new BudgetDTO();
                budgetDTO.setUser_id(user_id);
                budgetDTO.setTripId(tripId);
                budgetDTO.setUserName(userName);
                budgetDTO.setCause(budget.getCause());
                budgetDTO.setCost(budget.getCost());
                budgetDTO.setDate(budget.getDate());
                budgetDTO.setType(budget.getType());
                budgetDTO.setReceipt(budget.getReceipt());
                budgetDTOs.add(budgetDTO);
            }

            return ResponseEntity.ok(budgetDTOs);
        } else {
            return ResponseEntity.noContent().build();
        }
    }


}