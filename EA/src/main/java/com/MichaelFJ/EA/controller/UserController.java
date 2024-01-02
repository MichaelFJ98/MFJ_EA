package com.MichaelFJ.EA.controller;

import com.MichaelFJ.EA.model.User;
import com.MichaelFJ.EA.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "new user added";
    }
}
