package com.examly.springapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserModelRepository;

@CrossOrigin(origins = "https://8081-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io")
@RestController
@RequestMapping("/api/v1/")
public class UserModelController {

	@Autowired
	private UserModelRepository UserModelRepository;
	
	// get all UserModels
	@GetMapping("/Users")
	public List<UserModel> getAllUsers(){
		return UserModelRepository.findAll();
	}		
	
	// create User rest api
	@PostMapping("/Users")
	public UserModel createUser(@RequestBody UserModel user) {
		return UserModelRepository.save(user);
	}
	
	// get user by id rest api
	@GetMapping("/Users/{id}")
	public ResponseEntity<UserModel> getUserById(@PathVariable Long id) {
		UserModel user = UserModelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		return ResponseEntity.ok(user);
	}
	
	// edit user rest api
	
	@PutMapping("/Users/{id}")
	public ResponseEntity<UserModel> editUser(@PathVariable Long id, @RequestBody UserModel userDetails){
		UserModel user = UserModelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		
		user.setusername(userDetails.getusername());
		user.setmobilenumber(userDetails.getmobilenumber());
		user.setEmailId(userDetails.getEmailId());
		user.setpassword(userDetails.getpassword());
		
		UserModel editduser = UserModelRepository.save(user);
		return ResponseEntity.ok(editduser);
	}
	
	// delete user rest api
	@DeleteMapping("/Users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteuser(@PathVariable Long id){
		UserModel user = UserModelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		
		UserModelRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}