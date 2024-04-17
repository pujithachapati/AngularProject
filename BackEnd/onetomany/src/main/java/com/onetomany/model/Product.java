package com.onetomany.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "productdetails")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Integer id;
	private String productname;
	private String productusage;
	private Integer branch;
	@OneToMany(cascade = CascadeType.REMOVE,mappedBy = "product")
	@JsonIgnoreProperties("product")
	private List<Order> orders=new ArrayList<>();
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getProductusage() {
		return productusage;
	}
	public void setProductusage(String productusage) {
		this.productusage = productusage;
	}
	public List<Order> getOrders() {
		return orders;
	}
	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	public Integer getBranch() {
		return branch;
	}
	public void setBranch(Integer branch) {
		this.branch = branch;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", productname=" + productname + ", productusage=" + productusage + ", orders="
				+ orders + "]";
	}
	
	
}
