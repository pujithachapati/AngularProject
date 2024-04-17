package com.onetomany.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.onetomany.model.Product;
import com.onetomany.model.branchnames;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	List<Product> findByBranch(Integer branch);
	
}
