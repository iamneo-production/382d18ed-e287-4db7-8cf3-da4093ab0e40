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
//@Configuration
public class UserModelService {
	
	@Autowired
	private UserModelRepository UserModelRepository;
    
	private LoginModelRepository LoginModelRepository;
    private Long id;
    
    UserModelService(){

    }
	
    //@Bean
    public UserModel saveUser(UserModel user)
    {
        return UserModelRepository.save(user);
    }

    
    public UserModel fetchUserByEmailId(String EmailId)
    {
        return UserModelRepository.findUserByEmailId(EmailId);
    }
    
  // @Bean ("java.lang.String")
    public UserModel fetchByEmailIdAndPassword(String EmailId,String password)
    {   

        return UserModelRepository.findByEmailIdAndPassword(EmailId,password);

    }

    public UserModel fetchByEmailIdAndUserRole(String emailId,String user_role){
        return UserModelRepository.findByEmailIdAndUser_role(emailId,user_role);
    }


    public UserModel fetchByUserRole(String emailId){
        return UserModelRepository.findByUser_role(emailId);

    }
    

    /*public String fetchUserRole(Long id){
        return UserModelRepository.findByUserId(id);
    }*/

    
    
	
}