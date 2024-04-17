package com.onetomany.model;

import jakarta.persistence.Entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Shop {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String shopId;
	private String shopname;
	private static Integer generateId=1;
	@OneToMany(mappedBy = "shop",cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties("shop")
	private List<Branch> branchlist=new ArrayList<>();
	
	
	
	public void generatecustomid() {
		this.shopId="S-"+String.format("%03d",generateId++);
	}
	public void initialize() {
		generatecustomid();
	}
	public String getShopId() {
		return shopId;
	}
	public void setShopId(String shopId) {
		this.shopId = shopId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getShopname() {
		return shopname;
	}
	public void setShopname(String shopname) {
		this.shopname = shopname;
	}
	public List<Branch> getBranchlist() {
		return branchlist;
	}
	public void setBranchlist(List<Branch> branchlist) {
		this.branchlist = branchlist;
	}
	public static Integer getGenerateId() {
		return generateId;
	}
	public static void setGenerateId(Integer generateId) {
		Shop.generateId = generateId;
	}
	public String generateStringId() {
		String s= String.format("S-%03d",generateId++);
		return s;
	}
	@Override
	public String toString() {
		return "Shop [id=" + id + ", shopname=" + shopname + ", branchlist=" + branchlist + "]";
	}
	
}
