package com.examly.springapp.controller;
import java.util.*;
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
public class AuthController {
	
	@Autowired
	private UserModelService service;

	public UserModel loginUser (@RequestBody UserModel user) {

		String tempEmailId = user.getEmailId();
		
		String tempPass = user.getpassword();
		
		UserModel userobj = null;
		
		if (tempEmailId != null && tempPass != null) 
		{ 
			userobj = service.fetchUserByEmailIdandPass (tempEmailId, tempPass); 
		
		}
		
		return userobj;
		
		}
	

}
