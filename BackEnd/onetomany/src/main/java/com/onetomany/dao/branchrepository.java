package com.onetomany.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onetomany.model.Branch;

@Repository
public interface branchrepository extends JpaRepository<Branch,Integer>{

}
