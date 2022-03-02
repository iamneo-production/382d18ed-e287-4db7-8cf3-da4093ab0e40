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
	private long id;
	
	@Column(name = "AddonId")
	private Int AddonId;

	@Column(name = "AddonName")
	private String AddonName;
	
	@Column(name = "AddonPrice")
	private Int AddonPrice;
	@Column(name = "AddonDetails")
	private String AddonDetails;
	
	
	public AddonModel() {
		
	}
	
	public AddonModel(Int AddonId, String AddonName, Int AddonPrice , String AddonDetails) {
		super();
		this.AddonId = AddonId;
		this.AddonName = Addonname;
		this.AddonPrice = AddonPrice;
		this.AddonDetails = AddonDetails;
		
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Int getAddonId() {
		return AddonId;
	}
	public void setAddonId(Int AddonId) {
		this.AddonId = AddonId;
	}
	public String getAddonName() {
		return AddonName;
	}
	public void setAddonName(String AddonName) {
		this.AddonName = AddonName;
	}
	public Int AddonPrice() {
		return AddonPrice;
	}
	public void setAddonPrice(Int AddonPrice) {
		this.AddonPrice = AddonPrice;
	}
	public String getAddonDetails() {
		return AddonDetails;
	}
	public void setAddonDetails(String AddonDeatils) {
		this.AddonDeatils = AddonDeatils;
	}
}