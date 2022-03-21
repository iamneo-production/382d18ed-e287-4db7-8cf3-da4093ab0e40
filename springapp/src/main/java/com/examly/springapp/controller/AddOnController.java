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
<<<<<<< HEAD
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.examly.springapp.exception.ResourceNotFoundException;
//import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.model.PlanModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.PlanRepository;
=======

//import jdk.nashorn.internal.ir.IdentNode;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.UserModel;
>>>>>>> d2306c9a2fd2129eb9bbd6f3422514ffdec56d05
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.model.AddonModel;
import com.examly.springapp.repository.AddonRepository;


<<<<<<< HEAD
@CrossOrigin(origins = "https://8081-cefcccadbaddebfdaffdacedbbebcbf.examlyiopb.examly.io")
@RestController
@RequestMapping("/admin")
 class AddonController {
	
	@Autowired
	private AddonRepository prepo;
=======
@CrossOrigin(origins = "https://8081-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io")
@RestController
@RequestMapping("/admin")
public class AddOnController {
	
	@Autowired
	private AddonRepository adrepo;
>>>>>>> d2306c9a2fd2129eb9bbd6f3422514ffdec56d05
	
	
	@PostMapping("/addAddon")
	public AddonModel createAddon(@RequestBody AddonModel addon)
	{

<<<<<<< HEAD
		return prepo.save(addon);
=======
		return adrepo.save(addon);
>>>>>>> d2306c9a2fd2129eb9bbd6f3422514ffdec56d05
	}
	
	@GetMapping("/viewAddon")
	public List<AddonModel> viewAddon(){
<<<<<<< HEAD
		return prepo.findAll();
	}


	@GetMapping("/viewAddon/{AddonId}")
	public ResponseEntity<AddonModel> getAddonnById(@PathVariable int AddonId) {
		AddonModel am = prepo.findById(AddonId)
				.orElseThrow(() -> new ResourceNotFoundException("Plan not exist with id :" + AddonId));
		return ResponseEntity.ok(am);
	}

	@PutMapping("/updateAddon/{AddonId}")
	public ResponseEntity<AddonModel> updateAddon(@PathVariable int AddonId, @RequestBody AddonModel AddonDetails){
		
		//retrive particular plan from the database using planId
		AddonModel am = prepo.findById(AddonId)
				.orElseThrow(() -> new ResourceNotFoundException("Addon not exist with id :" + AddonId));
=======
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
>>>>>>> d2306c9a2fd2129eb9bbd6f3422514ffdec56d05
		
		am.setAddonName(AddonDetails.getAddonName());
		am.setAddonPrice(AddonDetails.getAddonPrice());
		am.setAddonDetails(AddonDetails.getAddonDetails());
		
		
<<<<<<< HEAD
		AddonModel updatedAddon = prepo.save(am);
		return ResponseEntity.ok(updatedAddon);
		
	}
	@DeleteMapping("/deleteAddon/{AddonId}")
	public ResponseEntity<Map<String, Boolean>> deleteAddon(@PathVariable int AddonId){
		//retrive particular plan from the database using planId
		AddonModel am = prepo.findById(AddonId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + AddonId));
		
		prepo.delete(am);
=======
		AddonModel updatedAddon = adrepo.save(am);
		return ResponseEntity.ok(updatedAddon);
		
	}
	@DeleteMapping("/deleteAddon/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAddon(@PathVariable int id){
		//retrive particular plan from the database using AddonId
		AddonModel am = adrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		adrepo.delete(am);
>>>>>>> d2306c9a2fd2129eb9bbd6f3422514ffdec56d05
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
<<<<<<< HEAD
	

}
=======

 }
>>>>>>> d2306c9a2fd2129eb9bbd6f3422514ffdec56d05
