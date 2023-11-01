package com.Travo.Travobackend.model.other;

import com.Travo.Travobackend.enumeration.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class AuthenticationResponse {
    private String accessToken;
    private Integer id;
    private Role role;
    private byte[] profileImage;
}
