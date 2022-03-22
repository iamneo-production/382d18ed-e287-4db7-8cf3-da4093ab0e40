package com.examly.springapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Recharge_Planmodel")
public class RechargeModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

    @Column(name = "rechargeId")
	private int rechargeId;

	@Column(name= "rechargetype")
	private String rechargetype;

	@Column(name = "name")
	private String name;
	
	@Column(name="mobile")
	private String mobile;

	@Column(name="email")
	private String email;

	@Column(name = "rechargePrice")
	private String rechargePrice;

	@Column(name = "rechargePlan")
	private String rechargePlan;


    public RechargeModel() {
		
	}
	
	public RechargeModel(int rechargeId,String rechargetype, String name,String mobile,String email, String rechargePrice , String rechargePlan) {
		super();
		this.rechargeId = rechargeId;
		this.rechargetype=rechargetype;
		this.name = name;
		this.mobile=mobile;
		this.email=email;
		this.rechargePrice = rechargePrice;
		this.rechargePlan = rechargePlan;
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

    public int getrechargeId() {
		return rechargeId;
	}
	public void setrechargeId(int rechargeId) {
		this.rechargeId = rechargeId;
	}
	public String getrechargetype() {
		return rechargetype;
	}
	public void setrechargetype(String rechargetype) {
		this.rechargetype = rechargetype;
	}
    public String getname() {
		return name;
	}
	public void setname(String name) {
		this.name = name;
	}
	public String getmobile() {
		return mobile;
	}
	public void setmobile(String mobile) {
		this.mobile = mobile;
	}
	public String getemail() {
		return email;
	}
	public void setemail(String email) {
		this.email = email;
	}
	public String  getrechargePrice() {
		return rechargePrice;
	}
	public void setrechargePrice(String rechargePrice) {
		this.rechargePrice = rechargePrice;
	}
	public String getrechargePlan() {
		return rechargePlan;
	}
	public void setrechargePlan(String rechargePlan) {
		this.rechargePlan = rechargePlan;
	}

	
}
