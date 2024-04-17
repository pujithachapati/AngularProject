package com.onetomany.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onetomany.dao.RetailAndVendorRepository;
import com.onetomany.dao.TypeNamesRepository;
import com.onetomany.model.Product;
import com.onetomany.model.RetailAndVendor;
import com.onetomany.model.Type;

@Service
public class RetailAndVendorService {
	
	@Autowired
	private RetailAndVendorRepository retailAndvenderrepo;
	
	@Autowired
	private TypeNamesRepository typenamerepo;
	
	public List<RetailAndVendor> getVendors(String type) {
        return retailAndvenderrepo.findByType(type);
    }

    public List<RetailAndVendor> getRetailers(String type) {
        return retailAndvenderrepo.findByType(type);
    }
    
    public List<RetailAndVendor> getAll(){
    	return retailAndvenderrepo.findAll();
    }
    
    public RetailAndVendor getbyId(Integer id) {
		return retailAndvenderrepo.findById(id).orElse(null);
	}
    
    public RetailAndVendor createorupdate(RetailAndVendor retailandvendor) {
    		return retailAndvenderrepo.save(retailandvendor);
    }
    
    public void deletePerson(Integer id) {
    	retailAndvenderrepo.deleteById(id);
    }
    
    public List<Type> fetchtypes(){
    	return typenamerepo.findAll();
    }

}
