package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.UserModel;

@Repository
 public interface LoginModelRepository extends JpaRepository<UserModel, Long>{
    
 // <Optional>UserModel findByEmail(String emailId);
// public UserModel findUserByEmailId(String EmailId);
 
 //boolean existsByEmail(String email);
}