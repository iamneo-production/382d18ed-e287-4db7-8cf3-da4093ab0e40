package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Admins")
public class AdminModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "email_id")
	private String emailId;
	@Column(name = "password")
	private String password;
    @Column(name = "mobilenumber")
	private String mobilenumber;
	@Column(name = "user_role")
	private String user_role;
	
	public AdminModel() {
		
	}
	
	public AdminModel(String mobilenumber, String emailId , String password, String user_role) {
		super();
		this.mobilenumber = mobilenumber;
		this.emailId = emailId;
		this.password = password;
		this.user_role=user_role;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	
	public String getmobilenumber() {
		return mobilenumber;
	}
	public void setmobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getpassword() {
		return password;
	}
	public void setpassword(String password) {
		this.password = password;
	}
	public String getuser_role() {
		return user_role;
	}
	public void setuser_role(String user_role) {
		this.user_role = user_role;
	}
}