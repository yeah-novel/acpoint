package com.acupoint.model;

public class Dw {

	private int id;
	private String link;
	private String note;
	
	
	
	public Dw(int id, String link, String note) {
		this.id = id;
		this.link = link;
		this.note = note;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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


	@Override
	public String toString() {
		return link;
	}
	
	

}
