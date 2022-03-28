package com.acupoint.model;

public class Jm {
	private int id;
	private String name;
	private String img;
	private String bofang;
	public Jm() {
		super();
	}
	public Jm(int id, String name, String img, String bofang) {
		super();
		this.id = id;
		this.name = name;
		this.img = img;
		this.bofang = bofang;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getBofang() {
		return bofang;
	}
	public void setBofang(String bofang) {
		this.bofang = bofang;
	}
	@Override
	public String toString() {
		return id+name+img+bofang;
	}
	
	

}
