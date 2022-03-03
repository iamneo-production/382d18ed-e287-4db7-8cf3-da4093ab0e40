package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.PlanModel;
import com.example.demo.Model.UserModel;

@Repository
public interface PlanRepository extends JpaRepository<PlanModel, Integer> {

}
