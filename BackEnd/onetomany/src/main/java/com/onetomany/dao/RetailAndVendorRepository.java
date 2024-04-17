package com.onetomany.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.onetomany.model.RetailAndVendor;

@Repository
public interface RetailAndVendorRepository extends JpaRepository<RetailAndVendor,Integer>{
	List<RetailAndVendor> findByType(@Param("type") String type);
}
