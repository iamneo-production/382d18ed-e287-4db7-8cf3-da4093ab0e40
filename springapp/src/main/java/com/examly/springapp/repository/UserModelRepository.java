package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.scheduling.annotation.Async;

import com.examly.springapp.model.UserModel;

@Repository
 public interface UserModelRepository extends JpaRepository<UserModel, Long>{
    

 public UserModel findByEmailIdAndPassword(String email,String password);
 /*@Async
 @Query("select u.user_role  from UserModel u where u.emailId= emailId")
 public UserModel findByUser_role(@Param("user_role") String user_role);

*/

 public UserModel findUserByEmailId(String EmailId);

 //public UserModel findByUser_role(String user_role);
 //public UserModel findByUserId(Long Id);
 /*@Async
 @Query("select u.user_role from UserModel u where u.emailId= emailId")
 public UserModel findByUser_role(@Param("user_role") String user_role);*/
 //public UserModel findByMobileNumber(@Param("mobileNumber") String mobileNumber);
 @Async
 @Query("select u.user_role,u.emailId from UserModel u where u.emailId= emailId")
 public UserModel findByEmailIdAndUser_role(@Param("emailId") String email,@Param("user_role") String user_role);
//public UserModel findUserByEmailIdandUser_role(String email, String user_role);
 
}