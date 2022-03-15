package com.examly.springapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Recharge")
public class RechargeModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

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
	private int rechargePrice;

	@Column(name = "rechargePlan")
	private int rechargePlan;


    public RechargeModel() {
		
	}
	
	public RechargeModel(int rechargeId,String rechargeType, String name,String mobile,String email, int rechargePrice , int rechargePlan) {
		super();
		this.rechargeId = rechargeId;
		this.rechargeType=rechargeType;
		this.name = name;
		this.mobile=mobile;
		this.email=email;
		this.rechargePrice = rechargePrice;
		this.rechargePlan = rechargePlan;
		
	}

    public int getrechargeId() {
		return rechargeId;
	}
	public void setrechargeId(int rechargeId) {
		this.rechargeId = rechargeId;
	}
	public String getrechargeType() {
		return rechargeType;
	}
	public void setrechargeType(String rechargeType) {
		this.rechargeType = rechargeType;
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
	public int  getrechargePrice() {
		return rechargePrice;
	}
	public void setrechargePrice(int rechargePrice) {
		this.rechargePrice = rechargePrice;
	}
	public int getrechargePlan() {
		return rechargePlan;
	}
	public void setrechargePlan(int rechargePlan) {
		this.rechargePlan = rechargePlan;
	}

	
}
