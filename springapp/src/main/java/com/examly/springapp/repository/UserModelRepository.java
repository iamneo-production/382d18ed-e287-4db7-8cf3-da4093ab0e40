package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.scheduling.annotation.Async;

import com.examly.springapp.model.UserModel;

@Repository
 public interface UserModelRepository extends JpaRepository<UserModel, Long>{
    
<<<<<<< HEAD

 public UserModel findByEmailIdAndPassword(String email,String password);
 @Async
 @Query("select u.user_role  from UserModel u where u.emailId= emailId")
 public UserModel findByUser_role(@Param("user_role") String user_role);
 public UserModel findUserByEmailId(String EmailId);
 //public UserModel findByUser_role(String user_role);
 //public UserModel findByUserId(Long Id);
=======
 public UserModel findUserByEmailId(String email);
 public UserModel findByEmailIdAndPassword(String email,String password);

 //public UserModel findUserByEmailId(String EmailId);
 //public UserModel findUserByEmailIdandPass(String EmailId,String password);
>>>>>>> f01b0a6640f1d4d98910ed973a46659431672f20

 
}