package com.group11.travo.controller;

import com.group11.travo.exception.UserNotFoundException;
import com.group11.travo.model.User;
import com.group11.travo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{user_id}")
    User getUserById(@PathVariable Long user_id){
        return userRepository.findById(user_id)
                .orElseThrow(()->new UserNotFoundException(user_id));
    }

    @PutMapping("/user/{user_id}")
    User getUserById(@RequestBody User newUser , @PathVariable Long user_id){
        return userRepository.findById(user_id)
                .map(user->{
                    user.setFname((newUser.getFname()));
                    user.setLname((newUser.getLname()));
                    user.setEmail((newUser.getEmail()));
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(user_id));
    }

    @DeleteMapping("/user/{user_id}")
    String deleteUser(@PathVariable Long user_id){
        if(!userRepository.existsById(user_id)){
            throw new UserNotFoundException(user_id);
        }
        userRepository.deleteById(user_id);
        return "User with id "+user_id+" has been deleted success.";
    }

}
