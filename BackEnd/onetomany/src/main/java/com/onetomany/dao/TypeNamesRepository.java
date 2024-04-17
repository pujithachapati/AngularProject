package com.onetomany.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onetomany.model.Type;

@Repository
public interface TypeNamesRepository extends JpaRepository<Type,Integer>{

}
