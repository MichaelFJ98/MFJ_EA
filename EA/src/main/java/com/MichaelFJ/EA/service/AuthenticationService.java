package com.MichaelFJ.EA.service;

import com.MichaelFJ.EA.dto.JwtAuthenticationResponse;
import com.MichaelFJ.EA.dto.RefreshTokenRequest;
import com.MichaelFJ.EA.dto.SignUpRequest;
import com.MichaelFJ.EA.dto.SigninRequest;
import com.MichaelFJ.EA.model.User;

public interface AuthenticationService {
    User signup(SignUpRequest signUpRequest);
    JwtAuthenticationResponse signin(SigninRequest signinRequest);
    JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
