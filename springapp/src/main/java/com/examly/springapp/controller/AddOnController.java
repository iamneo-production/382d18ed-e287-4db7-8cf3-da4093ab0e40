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
import com.examly.springapp.model.AddonModel;
import com.examly.springapp.repository.AddonRepository;


@CrossOrigin(origins = "https://8081-fcaafabafbacafecddebfdaffdacedbbebcbf.examlyiopb.examly.io")
@RestController
@RequestMapping("/admin")

public class AddOnController {
    @Autowired
	private AddonRepository prepo;
	
	@PostMapping("/addAddon")
	public AddonModel createAddon(@RequestBody AddonModel Addon)
	{
		return prepo.save(Addon);
	}
	
	@GetMapping("/viewAddon")
	public List<AddonModel> viewAddon(){
		return prepo.findAll();
	}
	

	
	

}
    

    

