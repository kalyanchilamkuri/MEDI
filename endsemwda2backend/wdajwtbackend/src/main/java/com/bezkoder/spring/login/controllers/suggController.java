package com.bezkoder.spring.login.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.login.models.suggModel;
import com.bezkoder.spring.login.repository.suggRepo;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/service")
public class suggController {
    @Autowired
    private suggRepo suggrepo;

    @GetMapping("/{name}")
    public suggModel getinfo(@PathVariable("name") String name){
        return this.suggrepo.findByName(name).get();
    }
    
}
