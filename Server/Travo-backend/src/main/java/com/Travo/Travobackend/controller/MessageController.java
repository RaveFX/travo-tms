package com.Travo.Travobackend.controller;

import com.Travo.Travobackend.model.entity.GroupMessages;
import com.Travo.Travobackend.repository.GroupMessagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin
public class MessageController {

    @Autowired
    private GroupMessagesRepository groupMessagesRepository;


    @MessageMapping("/user")
    @SendTo("/topic/user")
      public GroupMessages greeting(GroupMessages message) throws Exception {
    // Create a response GroupMessages object
            GroupMessages response = new GroupMessages();
           response.setContent("Hello, " + message.getSender().getUser_id() + "!"); // Assuming User entity has a 'username' field

    // You might need to set other fields in the response object, like 'datetime', 'trip', etc.
    // response.setDatetime(LocalDateTime.now());
    // response.setTrip(message.getTrip());

    return response;
}



}
