<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<!-- <meta name="viewport" content="width=device-width, initial-scale=0">
	<meta name="viewport" content="width=drvice-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no;"> -->
	<meta name="viewport" content="width=device-width,user-scalable=no, initial-scale=1">
	<!-- <meta name="viewport" content="width=1200, initial-scale=1.0"> -->
	<link rel="icon" type="image/png" href="/images/favicon.png">
	<title>穴位宝典</title>
	<link rel="stylesheet" href="/css/swiper.min.css">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap.css">
	<link rel="stylesheet" href="/css/app.css">
	<link rel="stylesheet" href="/css/app_web.css">

	<script type="text/javascript" src="/js/jquery1.12.4.min.js"></script>
	<script type="text/javascript" src="/js/jquery.SuperSlide.2.1.3.js"></script>
	<script type="text/javascript" src="/js/swiper.min.js"></script>
	<script type="text/javascript" src="/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/zyjj0.js"></script>
</head>
<body>
<!--通用顶部导航-->
	<%@include file="kuangjia/head.jsp" %>
<!--通用顶部导航 结束-->
	

<!-- 子页 -->

	<!-- 调用数据库内容 -->
	<c:forEach items="${zyjj0s}" var="zyjj0s">
		<input type="hidden" id="zyjj0s" value="${zyjj0s}">
	</c:forEach>
	<!-- 调用数据库内容结束 -->
	
	<!-- 调用穴位模板 -->
	<%@include file="kuangjia/zyjj0kj.jsp" %>
	<!-- 调用穴位模板 -->
	
<!-- 子页结束 -->

	
<!--通用底部导航-->
<br/>
<br/>
	<%@include file="kuangjia/footer.jsp" %>
<!--通用底部导航 结束-->
</body>
</html>