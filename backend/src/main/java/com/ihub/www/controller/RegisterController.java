package com.ihub.www.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.model.User;
import com.ihub.www.repo.UserRepository;

@RestController
public class RegisterController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/register")
    public String register(@RequestBody User user) {

        User existingUser =
                userRepository.findByUsername(user.getUsername());

        if (existingUser != null) {
            return "Username already exists";
        }

        userRepository.save(user);

        return "User registered successfully";
    }
}