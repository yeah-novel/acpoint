package com.acupoint.model;

public class Xw {
	private int x_id;
	private String name;
	private String ename;
	private String jmname;
	private String gainian;
	private String liaofa;
	private String img;
	private String imgList;
	private String movie;
	private int jm_id;
	private String jm_img;
	
	

	public Xw(String name, String ename, String jmname, String gainian, String liaofa, String img,
			String imgList, String movie, String jm_img) {
		super();
		this.name = name;
		this.ename = ename;
		this.jmname = jmname;
		this.gainian = gainian;
		this.liaofa = liaofa;
		this.img = img;
		this.imgList = imgList;
		this.movie = movie;
		this.jm_img = jm_img;
	}

	public int getX_id() {
		return x_id;
	}

	public void setX_id(int x_id) {
		this.x_id = x_id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getJmname() {
		return jmname;
	}
	public void setJmname(String jmname) {
		this.jmname = jmname;
	}
	public String getGainian() {
		return gainian;
	}
	public void setGainian(String gainian) {
		this.gainian = gainian;
	}
	public String getLiaofa() {
		return liaofa;
	}
	public void setLiaofa(String liaofa) {
		this.liaofa = liaofa;
	}
	
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
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
	
	public String getMovie() {
		return movie;
	}

	public void setMovie(String movie) {
		this.movie = movie;
	}

	public int getJm_id() {
		return jm_id;
	}

	public void setJm_id(int j_id) {
		this.jm_id = jm_id;
	}

	public String getJm_img() {
		return jm_img;
	}

	public void setJm_img(String jm_img) {
		this.jm_img = jm_img;
	}

	@Override
	public String toString() {
		return name+ename+jmname+gainian+liaofa+img+imgList+movie+jm_img;
	}
	
}
