package com.MichaelFJ.EA.controller;

import com.MichaelFJ.EA.dto.JwtAuthenticationResponse;
import com.MichaelFJ.EA.dto.RefreshTokenRequest;
import com.MichaelFJ.EA.dto.SignUpRequest;
import com.MichaelFJ.EA.dto.SigninRequest;
import com.MichaelFJ.EA.model.User;
import com.MichaelFJ.EA.service.AuthenticationService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody SignUpRequest signUpRequest){
        return ResponseEntity.ok(authenticationService.signup(signUpRequest));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest signinRequest, HttpServletResponse response){
        JwtAuthenticationResponse authenticationResponse = authenticationService.signin(signinRequest);

        Cookie tokenCookie = new Cookie("token", authenticationResponse.getToken());
        Cookie refreshTokenCookie = new Cookie("refreshToken", authenticationResponse.getRefreshToken());

        tokenCookie.setMaxAge(24 * 60 * 60);
        refreshTokenCookie.setMaxAge(24 * 60 * 60);
        tokenCookie.setPath("/");
        refreshTokenCookie.setPath("/");


        response.addCookie(tokenCookie);
        response.addCookie(refreshTokenCookie);



        return ResponseEntity.ok(authenticationResponse);
    }

    @PostMapping("/refresh")
    public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestBody RefreshTokenRequest refreshTokenRequest){
        return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRequest));
    }
}
