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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.examly.springapp.exception.ResourceNotFoundException;
//import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.model.PlanModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.PlanRepository;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.model.AddonModel;
import com.examly.springapp.repository.AddonRepository;


@CrossOrigin(origins = "https://8081-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io")
@RestController
@RequestMapping("/admin")
public class AddOnController {
	
	@Autowired
	private AddonRepository addonrepo;
	
	
	@PostMapping("/addAddon")
	public AddonModel addAddon(@RequestBody AddonModel addon)
	{

		return addonrepo.save(addon);
	}
	
	@GetMapping("/viewAddon")
	public List<AddonModel> viewAddon(){
		return addonrepo.findAll();
	}


	@GetMapping("/viewAddon/{AddonId}")
	public ResponseEntity<AddonModel> getAddonnById(@PathVariable int AddonId) {
		AddonModel am = addonrepo.findById(AddonId)
				.orElseThrow(() -> new ResourceNotFoundException("Plan not exist with id :" + AddonId));
		return ResponseEntity.ok(am);
	}

	@PutMapping("/updateAddon/{AddonId}")
	public ResponseEntity<AddonModel> updateAddon(@PathVariable int AddonId, @RequestBody AddonModel AddonDetails){
		
		//retrive particular plan from the database using planId
		AddonModel am = addonrepo.findById(AddonId)
				.orElseThrow(() -> new ResourceNotFoundException("Addon not exist with id :" + AddonId));
		
		am.setAddonName(AddonDetails.getAddonName());
		am.setAddonPrice(AddonDetails.getAddonPrice());
		am.setAddonDetails(AddonDetails.getAddonDetails());
		
		
		AddonModel updatedAddon = addonrepo.save(am);
		return ResponseEntity.ok(updatedAddon);
		
	}
	@DeleteMapping("/deleteAddon/{AddonId}")
	public ResponseEntity<Map<String, Boolean>> deleteAddon(@PathVariable int AddonId){
		//retrive particular plan from the database using planId
		AddonModel am = addonrepo.findById(AddonId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + AddonId));
		
		addonrepo.delete(am);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	

}
