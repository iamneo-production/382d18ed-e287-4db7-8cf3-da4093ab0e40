package com.examly.springapp.controller;
import java.util.*;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import jdk.nashorn.internal.ir.IdentNode;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.model.AddonModel;
import com.examly.springapp.repository.AddonRepository;


@CrossOrigin(origins = "https://8081-fadecdccafcddebfdaffdacedbbebcbf.examlyiopb.examly.io")
@RestController
@RequestMapping("/admin")
public class AddOnController {
	
	@Autowired
	private AddonRepository adrepo;
	
	
	@PostMapping("/addAddon")
	public AddonModel createAddon(@RequestBody AddonModel addon)
	{

		return adrepo.save(addon);
	}
	
	@GetMapping("/viewAddon")
	public List<AddonModel> viewAddon(){
		return adrepo.findAll();
	}


	@GetMapping("/viewAddon/{id}")
	public ResponseEntity<AddonModel> getAddonById(@PathVariable int id) {
		AddonModel am = adrepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Addon not exist with id :" + id));
		return ResponseEntity.ok(am);
	}

	@PutMapping("/updateAddon/{id}")
	public ResponseEntity<AddonModel> updateAddon(@PathVariable int id, @RequestBody AddonModel AddonDetails){
		
		//retrive particular plan from the database using planId
		AddonModel am = adrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Addon not exist with id :" + id));
		
		am.setAddonName(AddonDetails.getAddonName());
		am.setAddonPrice(AddonDetails.getAddonPrice());
		am.setAddonDetails(AddonDetails.getAddonDetails());
		
		
		AddonModel updatedAddon = adrepo.save(am);
		return ResponseEntity.ok(updatedAddon);
		
	}
	@DeleteMapping("/deleteAddon/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAddon(@PathVariable int id){
		//retrive particular plan from the database using AddonId
		AddonModel am = adrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		adrepo.delete(am);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

 }
