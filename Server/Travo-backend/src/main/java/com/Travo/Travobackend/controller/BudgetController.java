package com.Travo.Travobackend.controller;
import com.Travo.Travobackend.model.dto.BudgetDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Travo.Travobackend.model.entity.Budget;
import com.Travo.Travobackend.service.BudgetService;

@RestController
@RequestMapping("/api/v1/budget")

public class BudgetController {
    @Autowired
    private BudgetService budgetService;
    @PostMapping("/addBudget")
    public ResponseEntity<Budget> addBudget(@ModelAttribute BudgetDTO budgetDTO){
        Budget addedBudget = budgetService.addBudget(budgetDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedBudget);
    }

    @GetMapping("/{budgetID}")
    public ResponseEntity<Budget> getBudgetById(@PathVariable Integer budgetID){
        Budget budget =budgetService.getBudgetById(budgetID);

        if(budget != null){
            return ResponseEntity.ok(budget);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

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
}
