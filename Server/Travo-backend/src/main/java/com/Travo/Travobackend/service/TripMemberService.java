package com.Travo.Travobackend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Travo.Travobackend.repository.TripMembersRepository;


@Service
public class TripMemberService {
    @Autowired
    private TripMembersRepository tripMembersRepository;

    public long getRowCount() {
        return tripMembersRepository.count();
    }
}
