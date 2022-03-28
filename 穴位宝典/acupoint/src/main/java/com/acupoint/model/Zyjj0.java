package com.acupoint.model;

public class Zyjj0 {
	private int id;
	private String name;
	private String ename;
	private String dingyi;
	private String reason;
	private String fashengjizhi;
	private String video;
	private String img;
	public Zyjj0() {
		super();
	}
	public Zyjj0(int id, String name, String ename, String dingyi, String reason, String fashengjizhi, String video,
			String img) {
		super();
		this.id = id;
		this.name = name;
		this.ename = ename;
		this.dingyi = dingyi;
		this.reason = reason;
		this.fashengjizhi = fashengjizhi;
		this.video = video;
		this.img = img;
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
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getDingyi() {
		return dingyi;
	}
	public void setDingyi(String dingyi) {
		this.dingyi = dingyi;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getFashengjizhi() {
		return fashengjizhi;
	}
	public void setFashengjizhi(String fashengjizhi) {
		this.fashengjizhi = fashengjizhi;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	@Override
	public String toString() {
		return  id+name+ename+dingyi+reason+fashengjizhi+video+img;
	}
	
}
