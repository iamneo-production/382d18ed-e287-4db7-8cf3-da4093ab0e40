package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.context.annotation.Bean;

import com.examly.springapp.model.UserModel;

@Repository
 public interface UserModelRepository extends JpaRepository<UserModel, Long>{
    
 // <Optional>UserModel findByEmail(String emailId);

 public UserModel findUserByEmailId(String EmailId);
 public UserModel findUserByEmailIdandPass(String EmailId,String password);

 //public UserModel findUserByEmailIdandPass(String EmailId,String password);
 //boolean existsByEmail(String email);
}