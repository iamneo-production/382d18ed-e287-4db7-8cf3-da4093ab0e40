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


@CrossOrigin(origins = "https://8081-faaabdcbeaddebfdaffdacedbbebcbf.examlyiopb.examly.io")
@RestController
@RequestMapping("/admin")
public class PlanController {
	
	@Autowired
	private PlanRepository prepo;
	
	
	@PostMapping("/addPlan")
	public PlanModel createPlan(@RequestBody PlanModel plan)
	{
		return prepo.save(plan);
	}
	
	@GetMapping("/viewPlan")
	public List<PlanModel> viewPlan(){
		return prepo.findAll();
	}


	@GetMapping("/viewPlan/{planId}")
	public ResponseEntity<PlanModel> getPlanById(@PathVariable int planId) {
		PlanModel pm = prepo.findById(planId)
				.orElseThrow(() -> new ResourceNotFoundException("Plan not exist with id :" + planId));
		return ResponseEntity.ok(pm);
	}

	@PutMapping("/updatePlan/{planId}")
	public ResponseEntity<PlanModel> updatePlan(@PathVariable int planId, @RequestBody PlanModel planDetails){
		
		//retrive particular plan from the database using planId
		PlanModel pm = prepo.findById(planId)
				.orElseThrow(() -> new ResourceNotFoundException("Plan not exist with id :" + planId));
		
		pm.setPlanName(planDetails.getPlanName());
		pm.setPlanPrice(planDetails.getPlanPrice());
		pm.setPlanDetails(planDetails.getPlanDetails());
		pm.setPlanType(planDetails.getPlanType());
		pm.setPlanValidity(planDetails.getPlanValidity());
		
		PlanModel updatedPlan = prepo.save(pm);
		return ResponseEntity.ok(updatedPlan);
		
	}
	@DeleteMapping("/deletePlan/{planId}")
	public ResponseEntity<Map<String, Boolean>> deletePlan(@PathVariable int planId){
		//retrive particular plan from the database using planId
		PlanModel pm = prepo.findById(planId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + planId));
		
		prepo.delete(pm);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	

}
