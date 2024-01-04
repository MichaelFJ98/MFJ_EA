package com.MichaelFJ.EA.service;

import com.MichaelFJ.EA.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;


public interface UserService {
    UserDetailsService userDetailsService();
}
