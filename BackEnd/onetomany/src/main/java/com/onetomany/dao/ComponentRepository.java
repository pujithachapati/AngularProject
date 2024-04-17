package com.onetomany.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onetomany.model.ComponentsList;

@Repository
public interface ComponentRepository extends JpaRepository<ComponentsList,Integer>{

}
