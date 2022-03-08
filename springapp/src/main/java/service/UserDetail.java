package com.examly.springapp.service;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.CustomerUserDetails;
import com.examly.springapp.repository.UserModelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


public class UserDetail  implements UserDetailsService{

    @Autowired
    private UserModelRepository userRepo;

    
     
    @Override
    public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException {
        UserModel user = userRepo.findByEmail(emailId);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new CustomerUserDetails(user);
    
    }
 
}


    

