package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.UserModel;

@Repository
 public interface UserModelRepository extends JpaRepository<UserModel, Long>{
    
    public UserModel findUserByEmailId(String email);

}