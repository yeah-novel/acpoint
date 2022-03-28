package com.acupoint.model;

public class Wz {
	private int id;
	private String article;
	private String content;
	private String img;
	
	public Wz(int id, String article, String content, String img) {
		super();
		this.id = id;
		this.article = article;
		this.content = content;
		this.img = img;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getArticle() {
		return article;
	}

	public void setArticle(String article) {
		this.article = article;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	@Override
	public String toString() {
		return id+article+content+img ;
	}
	
	
}
