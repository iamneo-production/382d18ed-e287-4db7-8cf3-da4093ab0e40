package com.examly.springapp.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.model.PlanModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.PlanRepository;
import com.examly.springapp.repository.UserModelRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "https://8081-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io")
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
	@PutMapping("/viewPlan/{id}")
	public ResponseEntity<PlanModel> editPlan(@PathVariable Long id, @RequestBody PlanModel PlanDetails){
		PlanModel Plan = PlanRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Plan not exist with id :" + id));
		
		Plan.setPlanName(PlanDetails.getPlanName());
		Plan.setPlanType(PlanDetails.getPlanType());
		Plan.setPlanValidity(PlanDetails.getPlanValidity());
		Plan.setPlanDetails(PlanDetails.getPlanDetails());
		Plan.setPlanPrice(PlanDetails.getPlanPrice());
		
		PlanModel editdPlan = PlanRepository.save(Plan);
		return ResponseEntity.ok(editdPlan);
	}
	
	// delete Plan rest api
	@DeleteMapping("/veiwplan/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePlan(@PathVariable Long id){
		PlanModel Plan = PlanModelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Plan not exist with id :" + id));
		
		PlanModelRepository.delete(Plan);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
    
