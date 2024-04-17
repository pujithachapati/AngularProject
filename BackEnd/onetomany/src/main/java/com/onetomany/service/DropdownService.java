package com.onetomany.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onetomany.dao.Branchnamesrepository;
import com.onetomany.dao.LoginRepository;
import com.onetomany.dao.ProductRepository;
import com.onetomany.dao.TypeRepository;
import com.onetomany.model.Login;
import com.onetomany.model.Product;
import com.onetomany.model.ProductType;
import com.onetomany.model.branchnames;

@Service
public class DropdownService {

	@Autowired
	private TypeRepository typerepo;
		
	@Autowired
	private LoginRepository loginrepo;
	
	@Autowired
	private Branchnamesrepository branchrepo;
	
	@Autowired
	private ProductRepository productrepo;
	
	public List<ProductType> gettype() {
		return typerepo.findAll();
	}
	
	public boolean validateLogin(String email,String password) {
		Login user = loginrepo.findByEmail(email);
		if(user!=null && user.getPassword().equals(password)) {
			return true;
		}
		else {
			return false;
		}
	}
	
//	public branchnames savedata(branchnames name) {
//		branchnames savedbranch = branchrepo.save(name);
//	    for (Product p : name.getProducts()) {
//	        p.setBranch(savedbranch);
//	        productrepo.save(p);
//	    }
//	    return savedbranch;
//	}
	public List<branchnames> getbranches() {
		return branchrepo.findAll();
	}
//	public branchnames getProductbybranchid(Integer id){
//		return branchrepo.findById(id).get();
//	}
	

}
