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
import com.examly.springapp.model.PlanModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.PlanRepository;
import com.examly.springapp.repository.UserModelRepository;
import com.examly.springapp.model.RechargeModel;
import com.examly.springapp.repository.RechargeRepository;
@CrossOrigin(origins="https://8081-cefcccadbaddebfdaffdacedbbebcbf.examlyiopb.examly.io/")
@RestController
@RequestMapping("/admin")
class RechargeController{   
    @Autowired
    private RechargeRepository prepo;

    @PostMapping("/addRecharge")
    public RechargeModel createRecharge(@RequestBody RechargeModel recharge)
    {
        return prepo.save(recharge);
    }

    @GetMApping("/viewRecharge")
    public List<RechargeModel> viewRecharge(){
        return prepo.findAll();
    }

    @GetMapping("/viewRecharge/{rechargeId}")
    public ResponseEntity<RechargeModel> getRechargeById(@PathVariable int rechargeId){
        RechargeModel rm = prepo.findById(rechargeId)
				.orElseThrow(() -> new ResourceNotFoundException("Plan not exist with id :" + rechargeId));
		return ResponseEntity.ok(rm);
    }

    @PutMapping("/updateRecharge/{rechargeId}")
	public ResponseEntity<RechargeModel> updateRecharge(@PathVariable int rechargeId, @RequestBody RechargeModel RechargeDetails){
		
		//retrive particular plan from the database using planId
		RechargeModel rm = prepo.findById(rechargeId)
				.orElseThrow(() -> new ResourceNotFoundException("Recharge not exist with id :" + rechargeId));
		
		rm.setRechargeName(RechargeDetails.getRechargeName());
		rm.setRechargePrice(RechargeDetails.getRechargePrice());
		rm.setRechargeDetails(RechargeDetails.getRechargeDetails());
		
		
		RechargeModel updatedRecharge = prepo.save(am);
		return ResponseEntity.ok(updatedRecharge);
		
	}
	@DeleteMapping("/deleteRecharge/{RechargeId}")
	public ResponseEntity<Map<String, Boolean>> deleteRecharge(@PathVariable int RechargeId){
		//retrive particular plan from the database using planId
		RechargeModel am = prepo.findById(RechargeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + RechargeId));
		
		prepo.delete(am);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}
