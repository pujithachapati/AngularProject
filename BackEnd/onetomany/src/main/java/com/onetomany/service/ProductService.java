package com.onetomany.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onetomany.dao.AddressRepository;
import com.onetomany.dao.Branchnamesrepository;
import com.onetomany.dao.OrderRepository;
import com.onetomany.dao.ProductRepository;
import com.onetomany.model.Address;
import com.onetomany.model.Order;
import com.onetomany.model.Product;
import com.onetomany.model.branchnames;

@Service
public class ProductService {
	@Autowired
	private ProductRepository repo;
	
	@Autowired
	private OrderRepository repo1;
	
	@Autowired
	private AddressRepository repo2;
	
	@Autowired
	private Branchnamesrepository repo3;
	
	
	public List<Product> getAllProduct(){
		return repo.findAll();
	}
	public Product getbyproductId(Integer id) {
		return repo.findById(id).orElse(null);
	}
	public Order gtbyorderId(Integer id) {
		return repo1.findById(id).orElse(null);
	}
	
	public boolean deleteproduct(Integer id) {
		repo.deleteById(id);
		return true;
	}
	public Product createorupdate(Product product) {
		if(product.getId()!=null) {
			Product existingproduct = getbyproductId(product.getId());
			for(Order oldorder:existingproduct.getOrders()) 
			{
				boolean orderfound=false;
				for(Order neworder:product.getOrders())
				{				
					if(oldorder.getId().equals(neworder.getId())) {
						orderfound=true;
						for(Address adoldrow:oldorder.getAddresslist()) {
							boolean addressfound=false;
							for(Address adnewrow:neworder.getAddresslist()) {
								if(adoldrow.getId().equals(adnewrow.getId())) {
									addressfound=true;
								}
							}
							if(!addressfound) {
								repo2.delete(adoldrow);
							}
						}
		
					}
				
				}
				if(!orderfound) {
					repo1.delete(oldorder);
				}
			}
			
		}
		Product updatedProduct = repo.save(product);
		for(Order newod:product.getOrders()) {
			newod.setProduct(product);
			repo1.save(newod);
			List<Address> address=newod.getAddresslist();
			for(Address newadd:address) {
				newadd.setOrder(newod);
				repo2.save(newadd);
			}
		}
		return updatedProduct;
	}
	 public List<Product> getProductsByBranch(Integer branch) {
	        return repo.findByBranch(branch);
	 }
	
}

