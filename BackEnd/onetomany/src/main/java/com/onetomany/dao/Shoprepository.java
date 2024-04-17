package com.onetomany.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onetomany.model.Shop;

@Repository
public interface Shoprepository extends JpaRepository<Shop,Integer>{

}
