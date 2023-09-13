package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.entity.GroupMessages;
import com.Travo.Travobackend.repository.GroupMessagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin
public class MessageController {

    @Autowired
    private GroupMessagesRepository groupMessagesRepository;

    @PostMapping("/save")
    public GroupMessages createTrip(@RequestBody GroupMessages groupMessages) {
        GroupMessages savedMessage = groupMessagesRepository.save(groupMessages);
        return groupMessagesRepository.save(savedMessage);
    }




}
