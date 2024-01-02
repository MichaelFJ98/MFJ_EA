package com.MichaelFJ.EA.service;

import com.MichaelFJ.EA.model.User;
import com.MichaelFJ.EA.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public User saveUser(User user) {

        this.passwordEncoder.encode(user.getPassword());

        return userRepository.save(user);
    }
}
