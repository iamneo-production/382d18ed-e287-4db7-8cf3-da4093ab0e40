package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.RechargeModel;
import com.examly.springapp.model.UserModel;

@Repository
public interface RechargeRepository extends JpaRepository<RechargeModel, Integer> {

}
