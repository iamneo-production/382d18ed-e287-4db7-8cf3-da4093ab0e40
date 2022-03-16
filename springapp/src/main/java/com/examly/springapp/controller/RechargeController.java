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

    @GetMapping("/viewRecharge")
    public List<RechargeModel> viewRecharge(){
        return prepo.findAll();
    }

    @GetMapping("/viewRecharge/{rechargeId}")
    public ResponseEntity<RechargeModel> getRechargeById(@PathVariable int rechargeId){
        RechargeModel rm = prepo.findById(rechargeId)
				.orElseThrow(() -> new ResourceNotFoundException("Plan not exist with id :" + rechargeId));
		return ResponseEntity.ok(rm);
    }

    @PutMapping("/editEvent/{rechargeId}")
	public ResponseEntity<RechargeModel> editEvent(@PathVariable int rechargeId, @RequestBody RechargeModel RechargeDetails){
		
		//retrive particular plan from the database using planId
		RechargeModel rm = prepo.findById(rechargeId)
				.orElseThrow(() -> new ResourceNotFoundException("Recharge not exist with id :" + rechargeId));
		
		rm.setname(RechargeDetails.getname());
		rm.setrechargeId(RechargeDetails.getrechargeId());
		rm.setrechargetype(RechargeDetails.getrechargetype());
		rm.setmobile(RechargeDetails.getmobile());
		rm.setemail(RechargeDetails.getemail());
		rm.setrechargePrice(RechargeDetails.getrechargePrice());
		rm.setrechargePlan(RechargeDetails.getrechargePlan());
		
		
		RechargeModel updatedRecharge = prepo.save(rm);
		return ResponseEntity.ok(updatedRecharge);
		
	}
	@DeleteMapping("/deleteRecharge/{rechargeId}")
	public ResponseEntity<Map<String, Boolean>> deleteRecharge(@PathVariable int rechargeId){
		//retrive particular plan from the database using planId
		RechargeModel rm = prepo.findById(rechargeId)
				.orElseThrow(() -> new ResourceNotFoundException("Recharge not exist with id :" + rechargeId));
		
		prepo.delete(rm);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}
