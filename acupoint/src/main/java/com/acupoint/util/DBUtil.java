package com.acupoint.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {

	public static Connection getConnection() {
		Connection con=null;
		//加载驱动
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/acupoint?user=root&password=123&useSSL=false&serverTimezone=Hongkong&useUnicode=true");
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch(SQLException e)
		{
			e.printStackTrace();
		}
		//连接数据库
		return con;
	}

}
