package com.MichaelFJ.EA.service.impl;

import com.MichaelFJ.EA.dto.JwtAuthenticationResponse;
import com.MichaelFJ.EA.dto.RefreshTokenRequest;
import com.MichaelFJ.EA.dto.SignUpRequest;
import com.MichaelFJ.EA.dto.SigninRequest;
import com.MichaelFJ.EA.model.Enum.Role;
import com.MichaelFJ.EA.model.User;
import com.MichaelFJ.EA.repository.UserRepository;
import com.MichaelFJ.EA.service.AuthenticationService;
import com.MichaelFJ.EA.service.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JWTService jwtService;

    //On registration of user, create a user and encode the password. After all this save the user in the database.
    //signUpRequest is an object that contains all the userinformation from registrationform.
    public User signup(SignUpRequest signUpRequest){

        User user = new User();

        user.setEmail(signUpRequest.getEmail());
        user.setFirstName(signUpRequest.getFirstName());
        user.setLastName(signUpRequest.getLastName());
        user.setRole(Role.User);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        return userRepository.save(user);
    }

    //When a user Logs into the website he will send his information through a signinRequest object.
    //We try to find our user in the database with the incoming information, if the user is found
    //we create a JWT and refreshtoken, these are send in a jwtAuthenticationResponse object.
    public JwtAuthenticationResponse signin(SigninRequest signinRequest){
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        signinRequest.getEmail(),
                        signinRequest.getPassword()));

        var user = userRepository.findByEmail(signinRequest.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        var jwt = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);

        JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();

        jwtAuthenticationResponse.setToken(jwt);
        jwtAuthenticationResponse.setRefreshToken(refreshToken);

        return jwtAuthenticationResponse;

    }

    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest){

        String userEmail = jwtService.extractUsername(refreshTokenRequest.getToken());
        User user = userRepository.findByEmail(userEmail).orElseThrow();

        if(jwtService.isTokenValid(refreshTokenRequest.getToken(), user)){
            var jwt = jwtService.generateToken(user);

            JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();

            jwtAuthenticationResponse.setToken(jwt);
            jwtAuthenticationResponse.setRefreshToken(refreshTokenRequest.getToken());

            return jwtAuthenticationResponse;
        }
        return null;
    }
}
