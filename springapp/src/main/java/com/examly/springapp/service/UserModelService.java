package com.examly.springapp.service;
import java.beans.JavaBean;
import java.util.*;
import java.lang.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.stereotype.Service;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.PathVariable;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.UserModel;
import org.springframework.context.annotation.Bean;

import com.examly.springapp.model.LoginModel;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.repository.LoginModelRepository;
import com.examly.springapp.controller.AuthController;
import org.springframework.context.annotation.Configuration;
@Service
@Configuration
public class UserModelService {
	
	//@Autowired
	private UserModelRepository usermodelrepository;
    
	
    //@Bean
    public UserModel saveUser(UserModel user)
    {
        return usermodelrepository.save(user);
    }

    //@Bean
    public UserModel fetchUserByEmailId(String EmailId)
    {
        return usermodelrepository.findUserByEmailId(EmailId);
    }
    /*
   //@Bean 
    public UserModel fetchUserByEmailIdandPass(String EmailId,String password)
    {
        return usermodelrepository.findUserByEmailIdandPass(EmailId,password);
    }*/
    
	
}