package com.onetomany.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onetomany.model.branchnames;

@Repository
public interface Branchnamesrepository extends JpaRepository<branchnames, Integer>{

}
