package com.acupoint.controller;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.acupoint.model.Jm;
import com.acupoint.model.Wz;
import com.acupoint.model.Jb2;
import com.acupoint.model.Xw;
import com.acupoint.model.Zyjj0;
import com.acupoint.util.DBUtil;
@RequestMapping
@Controller
public class AcupointController {
	
	@RequestMapping("/index")
	String index(HttpServletRequest req){
		
		return "index"; 
	}
	
	@RequestMapping("/head")
	String head(HttpServletRequest req){
		
		return "head"; 
	}
	
	@RequestMapping("/ystj")
	String ystj(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select id,article,img,bofang From wz");
		ArrayList<Jm> wz2s =new ArrayList<Jm>();
		wz2s.clear();
		while(rs.next()){
			int Id=rs.getInt("id");
			String name=rs.getString("article");
			String img=rs.getString("img");
			String bofang=rs.getString("bofang");
			Jm w=new Jm(Id,name,img,bofang);
			wz2s.add(w);
		}
		req.setAttribute("wz2s", wz2s);
		return "ystj"; 
	}
	
	@RequestMapping("/bzjs")
	String bzjs(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select id,name,img,bofang From jb");
		ArrayList<Jm> jbs =new ArrayList<Jm>();
		jbs.clear();
		while(rs.next()){
			int Id=rs.getInt("id");
			String name=rs.getString("name");
			String img=rs.getString("img");
			String bofang=rs.getString("bofang");
			Jm jb=new Jm(Id,name,img,bofang);
			jbs.add(jb);
		}
		req.setAttribute("jbs", jbs);
		return "bzjs"; 
	}
	
	@RequestMapping("/zyjj")
	String zyjj(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select id,name,img,bofang From jjsp");
		ArrayList<Jm> sps =new ArrayList<Jm>();
		sps.clear();
		while(rs.next()){
			int Id=rs.getInt("id");
			String name=rs.getString("name");
			String img=rs.getString("img");
			String bofang=rs.getString("bofang");
			Jm s=new Jm(Id,name,img,bofang);
			sps.add(s);
		}
		req.setAttribute("sps", sps);
		return "zyjj"; 
	}
	
	@RequestMapping("/jmsy")
	String jmsy(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select * From jm");
		ArrayList<Jm> jms =new ArrayList<Jm>();
		jms.clear();
		while(rs.next()){
			int Id=rs.getInt("id");
			String jmname=rs.getString("jmname");
			String jm_img=rs.getString("jm_img");
			String bofang=rs.getString("bofang");
			Jm j=new Jm(Id,jmname,jm_img,bofang);
			jms.add(j);
		}
		req.setAttribute("jms", jms);
		return "jmsy"; 
	}
	
	@RequestMapping("/bzjs0")
	String bzjs0(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select id,name,ename,definition,symptom,identify,imgList,nameList From jb where id=1");
		ArrayList<Jb2> bzs =new ArrayList<Jb2>();
		bzs.clear();
		while(rs.next()){
			int Id=rs.getInt("id");
			String name=rs.getString("name");
			String ename=rs.getString("ename");
			String definition=rs.getString("definition");
			String symptom=rs.getString("symptom");
			String identify=rs.getString("identify");
			String imgList=rs.getString("imgList");
			String nameList=rs.getString("nameList");
			Jb2 jb=new Jb2(Id,name,ename,definition,symptom,identify,imgList,nameList);
			bzs.add(jb);
		}
		req.setAttribute("bzs", bzs);
		return "bzjs0";
	}
	@RequestMapping("/jmsy0")
	String jmsy0(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select x_id,name,xw.img,bofang From jm,xw where jm.id=xw.jm_id");
		ArrayList<Jm> jms1 =new ArrayList<Jm>();
		jms1.clear();
		while(rs.next()){
			int Id=rs.getInt("x_id");
			String name=rs.getString("name");
			String img=rs.getString("xw.img");
			String bofang=rs.getString("bofang");
			Jm j=new Jm(Id,name,img,bofang);
			jms1.add(j);
		}
		req.setAttribute("jms1", jms1);
		return "jmsy0"; 
	}
	
	@RequestMapping("/ystj0")
	String ystj0(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select * From wz where id=1");
		ArrayList<Wz> wzs =new ArrayList<Wz>();
		while(rs.next()){
			int Id=rs.getInt("id");
			String article=rs.getString("article");
			String content=rs.getString("content");
			String img=rs.getString("img");
			Wz w=new Wz(Id,article,content,img);
			wzs.clear();
			wzs.add(w);
		}
		req.setAttribute("wzs", wzs);
		return "ystj0"; 
	}
	
	
	@RequestMapping("/ystj1")
	String ystj1(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select * From wz where id=2");
		ArrayList<Wz> wzs =new ArrayList<Wz>();
		while(rs.next()){
			int Id=rs.getInt("id");
			String article=rs.getString("article");
			String content=rs.getString("content");
			String img=rs.getString("img");
			Wz w=new Wz(Id,article,content,img);
			wzs.clear();
			wzs.add(w);
		}
		req.setAttribute("wzs", wzs);
		return "ystj1"; 
	}
	
	@RequestMapping("/jmsy00")
	String jmsy00(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select name,ename,xw.jmname,gainian,liaofa,img,imgList,movie,jm_img From xw,jm where xw.x_id=1 and xw.jm_id=jm.id");
		ArrayList<Xw> xws =new ArrayList<Xw>();
		while(rs.next()){
			String name=rs.getString("name");
			String ename=rs.getString("ename");
			String jmname=rs.getString("xw.jmname");
			String gainian=rs.getString("gainian");
			String liaofa=rs.getString("liaofa");
			String img=rs.getString("img");
			String imgList=rs.getString("imgList");
			String movie=rs.getString("movie");
			String jm_img=rs.getString("jm_img");
			Xw x=new Xw(name,ename,jmname,gainian,liaofa,img,imgList,movie,jm_img);
			xws.clear();
			xws.add(x);
		}
		req.setAttribute("xws", xws);
		return "jmsy00"; 
	}
	
	@RequestMapping("/jmsy01")
	String jmsy01(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select name,ename,xw.jmname,gainian,liaofa,img,imgList,movie,jm_img From xw,jm where xw.x_id=2 and xw.jm_id=jm.id");
		ArrayList<Xw> xws =new ArrayList<Xw>();
		xws.clear();
		while(rs.next()){
			String name=rs.getString("name");
			String ename=rs.getString("ename");
			String jmname=rs.getString("xw.jmname");
			String gainian=rs.getString("gainian");
			String liaofa=rs.getString("liaofa");
			String img=rs.getString("img");
			String imgList=rs.getString("imgList");
			String movie=rs.getString("movie");
			String jm_img=rs.getString("jm_img");
			Xw x=new Xw(name,ename,jmname,gainian,liaofa,img,imgList,movie,jm_img);
			xws.add(x);
		}
		req.setAttribute("xws", xws);
		return "jmsy01"; 
	}
	
	@RequestMapping("/xw1")
	String xw1(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select name,ename,xw.jmname,gainian,liaofa,img,imgList,movie,jm_img From xw,jm where xw.x_id=2 and xw.jm_id=jm.id");
		ArrayList<Xw> xws =new ArrayList<Xw>();
		while(rs.next()){
			String name=rs.getString("name");
			String ename=rs.getString("ename");
			String jmname=rs.getString("xw.jmname");
			String gainian=rs.getString("gainian");
			String liaofa=rs.getString("liaofa");
			String img=rs.getString("img");
			String imgList=rs.getString("imgList");
			String movie=rs.getString("movie");
			String jm_img=rs.getString("jm_img");
			Xw x=new Xw(name,ename,jmname,gainian,liaofa,img,imgList,movie,jm_img);
			xws.clear();
			xws.add(x);
		}
		req.setAttribute("xws", xws);
		return "xw1"; 
	}
	
	@RequestMapping("/zyjj0")
	String zyjj0(HttpServletRequest req) throws SQLException{
		Connection con=DBUtil.getConnection();
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery("Select * From jjsp0 where id=1");
		ArrayList<Zyjj0> zyjj0s =new ArrayList<Zyjj0>();
		zyjj0s.clear();
		while(rs.next()){
			int Id=rs.getInt("id");
			String name=rs.getString("name");
			String ename=rs.getString("ename");
			String dingyi=rs.getString("dingyi");
			String reason=rs.getString("reason");
			String fashengjizhi=rs.getString("fashengjizhi");
			String video=rs.getString("video");
			String img=rs.getString("img");
			Zyjj0 zy=new Zyjj0(Id, name, ename, dingyi, reason, fashengjizhi, video, img);
			
			zyjj0s.add(zy);
		} 
		req.setAttribute("zyjj0s", zyjj0s);
		return "zyjj0"; 
	}
	
	

	
	/*@ResponseBody
	@RequestMapping("/xxx")
	String xxx(){
		return "xxx";  //输出数据xxx到浏览器
	}*/
	
}
