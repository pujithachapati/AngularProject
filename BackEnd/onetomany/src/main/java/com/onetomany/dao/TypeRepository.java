package com.onetomany.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onetomany.model.ProductType;

@Repository
public interface TypeRepository extends JpaRepository<ProductType, Integer>{

}
