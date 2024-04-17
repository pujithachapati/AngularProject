package com.onetomany.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onetomany.dao.ComponentRepository;
import com.onetomany.model.ComponentsList;

@Service
public class ComponentService {
	
	@Autowired
	private ComponentRepository componentrepo;
	
	public List<ComponentsList> getallcomponents(){
		return componentrepo.findAll();
	}

}
