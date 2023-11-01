package com.Travo.Travobackend.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Travo.Travobackend.service.TripMemberService;

@RestController
@RequestMapping("/api/v1/tripMembers")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class TripMemberController {
    @Autowired
    private TripMemberService tripMemberService;

    @GetMapping("/count")
    public ResponseEntity<Long> getRowCount() {
        long rowCount = tripMemberService.getRowCount();
        return ResponseEntity.ok(rowCount);
    }
}
