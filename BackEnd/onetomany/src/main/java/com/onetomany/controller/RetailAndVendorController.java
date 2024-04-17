package com.onetomany.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onetomany.model.RetailAndVendor;
import com.onetomany.model.Type;
import com.onetomany.service.RetailAndVendorService;

@RestController
@RequestMapping("/api/retailvendors")
@CrossOrigin(origins = "*")
public class RetailAndVendorController {

	@Autowired
	private RetailAndVendorService retailAndvendorservice;
	
	@GetMapping("/getVendors/{type}")
	public List<RetailAndVendor> getVendors(@PathVariable String type) {
        return retailAndvendorservice.getVendors(type);
    }
	@GetMapping("/getRetailers/{type}")
    public List<RetailAndVendor> getRetailers(@PathVariable String type) {
        return retailAndvendorservice.getRetailers(type);
    }
	@GetMapping("/getAllList")
	public List<RetailAndVendor> getAll(){
		return retailAndvendorservice.getAll();
	}
	@GetMapping("/getbyid/{id}")
    public ResponseEntity<RetailAndVendor> getById(@PathVariable Integer id) {
        RetailAndVendor retailandvendor = retailAndvendorservice.getbyId(id);
        return ResponseEntity.ok(retailandvendor);
    }
	
	@PostMapping("/saveuser")
	public ResponseEntity<RetailAndVendor> save(@RequestBody RetailAndVendor retailandvendor ) {
		RetailAndVendor saveperson=retailAndvendorservice.createorupdate(retailandvendor);
		if(saveperson!=null) {
			return ResponseEntity.ok(saveperson);
		}else {
			return null;
		}
		
	}
	@DeleteMapping("/delete/{id}")
	public void deletebyid(@PathVariable Integer id) {
		retailAndvendorservice.deletePerson(id);
	}
	@GetMapping("/fetchtypes")
	public List<Type> gettypes(){
		return retailAndvendorservice.fetchtypes();
	}

}
