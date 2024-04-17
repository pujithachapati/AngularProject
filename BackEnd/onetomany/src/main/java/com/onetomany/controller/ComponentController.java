package com.onetomany.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onetomany.model.ComponentsList;
import com.onetomany.service.ComponentService;

@RestController
@RequestMapping("/api/components")
@CrossOrigin(origins = "*")
public class ComponentController {
	
	@Autowired
	private ComponentService componentservice;
	
	@GetMapping
	public List<ComponentsList> getAllComponents(){
		return componentservice.getallcomponents();
	}

}
