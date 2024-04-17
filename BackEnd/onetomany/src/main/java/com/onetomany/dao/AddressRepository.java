package com.onetomany.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onetomany.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address,Integer>{

}
