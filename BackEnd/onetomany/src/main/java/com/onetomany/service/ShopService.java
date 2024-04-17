package com.onetomany.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onetomany.dao.Branchnamesrepository;
import com.onetomany.dao.Shoprepository;
import com.onetomany.dao.branchrepository;
import com.onetomany.model.Branch;
import com.onetomany.model.Shop;
import com.onetomany.model.branchnames;

@Service
public class ShopService {
	
	@Autowired
	private Shoprepository shoprepo;
	
	@Autowired
	private branchrepository branchrepo;
	
	@Autowired
	private Branchnamesrepository namesrepo;
	
	public List<Shop> getAllshop(){
		return shoprepo.findAll();
	}
	public Shop getbyshopId(Integer id) {
		return shoprepo.findById(id).orElse(null);
	}
	
	public boolean deleteshop(Integer id) {
		shoprepo.deleteById(id);
		return true;
	}
	public Shop createOrUpdate(Shop shop) {
        if (shop.getId() != null) {
            Shop existingShop = getbyshopId(shop.getId());
            for (Branch oldBranch : existingShop.getBranchlist()) {
                boolean branchFound = false;
                for (Branch newBranch : shop.getBranchlist()) {                
                    if (oldBranch.getId().equals(newBranch.getId())) {
                        branchFound = true;
                    }
                }
                if (!branchFound) {
                    branchrepo.delete(oldBranch);
                }
            }
        }else {
        	shop.initialize();
        }
        Shop updatedShop = shoprepo.save(shop);

        for (Branch newBranch : shop.getBranchlist()) {
            newBranch.setShop(shop);
            branchrepo.save(newBranch);
        }
        return updatedShop;
    }
	public List<branchnames> getAllbranches(){
		return namesrepo.findAll();
	}

}
