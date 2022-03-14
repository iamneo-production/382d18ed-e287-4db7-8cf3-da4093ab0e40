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

	@Column(name = "RechargeName")
	private String RechargeName;
	
	@Column(name = "RechargePrice")
	private int RechargePrice;

	@Column(name = "RechargeDetails")
	private String RechargeDetails;

    public RechargeModel() {
		
	}
	
	public RechargeModel(int rechargeId, String RechargeName, int RechargePrice , String RechargeDetails) {
		super();
		this.rechargeId = rechargeId;
		this.RechargeName = RechargeName;
		this.RechargePrice = RechargePrice;
		this.RechargeDetails = RechargeDetails;
		
	}

    public int getrechargeId() {
		return rechargeId;
	}
	public void setrechargeId(int rechargeId) {
		this.rechargeId = rechargeId;
	}
    public String getRechargeName() {
		return RechargeName;
	}
	public void setRechargeName(String RechargeName) {
		this.RechargeName = RechargeName;
	}
	public int  getRechargePrice() {
		return RechargePrice;
	}
	public void setRechargePrice(int RechargePrice) {
		this.RechargePrice = RechargePrice;
	}
	public String getRechargeDetails() {
		return RechargeDetails;
	}
	public void setRechargeDetails(String RechargeDetails) {
		this.RechargeDetails = RechargeDetails;
	}

	
}
