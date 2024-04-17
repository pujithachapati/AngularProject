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

import com.onetomany.model.Shop;
import com.onetomany.model.branchnames;
import com.onetomany.service.ShopService;

@RestController
@RequestMapping("/api/shops")
@CrossOrigin(origins = "*")
public class ShopController {

	@Autowired
	private ShopService shopservice;
	
	@GetMapping
	public List<Shop> getAllshops(){
		return shopservice.getAllshop();
	}
	@GetMapping("/{id}")
    public ResponseEntity<Shop> getShopById(@PathVariable Integer id) {
        Shop shop = shopservice.getbyshopId(id);
        return ResponseEntity.ok(shop);
    }	
	@PostMapping
	public ResponseEntity<Shop> createorupdate(@RequestBody Shop shop){
		 Shop saveorupdate = shopservice.createOrUpdate(shop);
		 if (saveorupdate != null) {
		        return ResponseEntity.ok(saveorupdate);
		    } else {
		        return null;
		    }
	}
	@DeleteMapping("/{id}")
    public ResponseEntity<Shop> deleteproduct(@PathVariable Integer id){
    	Shop shop = shopservice.getbyshopId(id);
    	boolean deleted=shopservice.deleteshop(id);
    	if(deleted) {
    		return ResponseEntity.ok(shop);
    	}else {
    		return null;
    	}
    }
	
	
}
