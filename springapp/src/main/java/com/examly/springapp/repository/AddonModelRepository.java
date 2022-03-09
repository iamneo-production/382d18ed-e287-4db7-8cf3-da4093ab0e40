package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.examly.springapp.model.UserModel;
import com.examly.springapp.model.AddonModel;
@Repository
public interface AddonModelRepository extends JpaRepository<AddonModel, Integer> {

}
