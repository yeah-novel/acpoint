package com.acupoint.model;

public class Jb2 {
	private int id;
	private String name;
	private String ename;
	private String definition;
	private String symptom;
	private String identify;
	private String img;
	private String imgList;
	private String nameList;
	private String bofang;

	public Jb2() {
		super();
	}
	public Jb2(int id, String name, String img, String bofang) {
		this.id=id;
		this.name=name;
		this.img=img;
		this.bofang=bofang;
	}
	
	public Jb2(int id, String name, String ename,String definition, String symptom,String identify,String imgList,String nameList) {
		this.id=id;
		this.name=name;
		this.ename=ename;
		this.definition=definition;
		this.symptom=symptom;
		this.identify=identify;
		this.imgList=imgList;
		this.nameList=nameList;
	}
	
	
	public String getNameList() {
		return nameList;
	}
	public void setNameList(String nameList) {
		this.nameList = nameList;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
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
	public String getDefinition() {
		return definition;
	}
	public void setDefinition(String definition) {
		this.definition = definition;
	}
	public String getSymptom() {
		return symptom;
	}
	public void setSymptom(String symptom) {
		this.symptom = symptom;
	}
	public String getIdentify() {
		return identify;
	}
	public void setIdentify(String identify) {
		this.identify = identify;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getImgList() {
		return imgList;
	}
	public void setImgList(String imgList) {
		this.imgList = imgList;
	}
	public String getBofang() {
		return bofang;
	}
	public void setBofang(String bofang) {
		this.bofang = bofang;
	}
	@Override
	public String toString() {
		return id+name+ename+definition+symptom+identify+imgList+nameList;
	}
	
	
}
