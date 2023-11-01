package com.Travo.Travobackend.service;

import com.Travo.Travobackend.enumeration.Role;
import com.Travo.Travobackend.model.other.AuthenticationResponse;
import com.Travo.Travobackend.model.other.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GlobalService {
    static AuthenticationResponse authenticationResponse(String accessToken, Integer user_id, Role role, byte[] profileImage) {
        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .id(user_id)
                .role(role)
                .profileImage(profileImage)
                .build();
    }

    static Response response(String status, String message) {
        return Response.builder()
                .status(status)
                .message(message)
                .build();
    }


}
