package com.group11.travo.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long user_id){
        super("Could not found the user with id "+ user_id);
    }
}
