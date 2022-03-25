package com.examly.springapp.controller;
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

import org.springframework.web.bind.annotation.PathVariable;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.service.UserModelService;

@RestController
public class AuthController  {
	
	@Autowired
	private UserModelService service;

	@Autowired
	private UserModelRepository UserModelRepository;

	
	


	@CrossOrigin(origins="https://8081-faecbadeddebfdaffdacedbbebcbf.examlyiopb.examly.io")
	@PostMapping("/login")
	public UserModel loginUser (@RequestBody UserModel user) throws Exception {

		String tempEmailId = user.getEmailId();
		
		String tempPass = user.getpassword();
		//String tempRole=user.getuser_role();
		
		UserModel userobj = null;
		
		if (tempEmailId != null && tempPass != null) 
		{ 
			userobj = service.fetchByEmailIdAndPassword (tempEmailId, tempPass); 
			
				//userobj.fetchByEmailIdAndUserRole(tempEmailId)
				
			
			//userobj = service.fetchByEmailIdAndUserRole (tempEmailId, tempRole);
			
			//String tempRole=user.getuser_role();
			/*if(service.fetchByUserRole(tempRole).equals("admin")){
				userobj.setuser_role("admin");
			}*/
		}
		if(userobj == null){
			throw new Exception("Bad Credentials");
		}
		
		return userobj;
		
	}

		/* @PostMapping("/userrole")
		//public UserModel  authentication (@RequestBody UserModel user) throws Exception {

			//String tempUserRole =null;
			String tempEmailId=user.getEmailId();
			//Long id=user.getId();
			UserModel tempUserRole1 = service.fetchUserByEmailId(tempEmailId);
			UserModel userobj=null;
			//Long id=user.getId();

			if (tempEmailId != null) 
		{ 
			userobj = service.fetchByUserRole (tempEmailId); 
			
				//userobj.fetchByEmailIdAndUserRole(tempEmailId)
			
			}
			return userobj;*/
			//String tempEmailId=user.getEmailId();
	@GetMapping("/Users/{emailId}") 
	//public  boolean getUserByEmailId(@PathVariable String emailid) {
		public String authentication (@PathVariable String emailId,@RequestBody UserModel user){
			String tempEmailId = user.getEmailId();

		UserModel user1 = UserModelRepository.findUserByEmailId(tempEmailId);
		String tempRole=user1.getuser_role();
		String tempRole1="user";
		/* if(tempRole.equals("admin")){
			return tempRole;
		}*/
		return tempRole;
		
		//return user1;
	}

			
 }
//}
	

