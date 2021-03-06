package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Addons")
public class AddonModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int id;


	@Column(name = "AddonId")
	private int AddonId;

	@Column(name = "AddonName")
	private String AddonName;
	
	@Column(name = "AddonPrice")
	private int AddonPrice;
	@Column(name = "AddonDetails")
	private String AddonDetails;
	
	
	public AddonModel() {
		
	}
	
	public AddonModel(int AddonId, String AddonName, int AddonPrice , String AddonDetails) {
		super();
		this.AddonId = AddonId;
		this.AddonName = AddonName;
		this.AddonPrice = AddonPrice;
		this.AddonDetails = AddonDetails;
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public int getAddonId() {
		return AddonId;
	}
	public void setAddonId(int AddonId) {
		this.AddonId = AddonId;
	}
	public String getAddonName() {
		return AddonName;
	}
	public void setAddonName(String AddonName) {
		this.AddonName = AddonName;
	}
	public int  getAddonPrice() {
		return AddonPrice;
	}
	public void setAddonPrice(int AddonPrice) {
		this.AddonPrice = AddonPrice;
	}
	public String getAddonDetails() {
		return AddonDetails;
	}
	public void setAddonDetails(String AddonDetails) {
		this.AddonDetails = AddonDetails;
	}
}