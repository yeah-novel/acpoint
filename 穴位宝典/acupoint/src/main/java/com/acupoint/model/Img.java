package com.acupoint.model;

public class Img {
	
	private int ImgId;
	private String link;
	private String note;
	
	public Img(int imgId, String link, String note) {
		ImgId = imgId;
		this.link = link;
		this.note = note;
	}

	public int getImgId() {
		return ImgId;
	}

	public void setImgId(int imgId) {
		ImgId = imgId;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
	
}
