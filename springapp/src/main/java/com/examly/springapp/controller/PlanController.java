

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.LoginModel;
import com.example.demo.Model.PlanModel;
import com.example.demo.Model.UserModel;
import com.example.demo.Repository.PlanRepository;
import com.example.demo.Repository.UserRepository;
public class PlanController {

@CrossOrigin(origins = "https://8081-ffeeacaeffaecddebfdaffdacedbbebcbf.examlyiopb.examly.io")
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
	

}
    
}
