<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
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
	
	
	<link rel="stylesheet" href="/css/swiper.min.css">   
	<link rel="stylesheet" href="/css/bootstrap.min.css"> 
	<link rel="stylesheet" href="/css/app.css"> 
	<link rel="stylesheet" href="/css/app_web.css"> 

	<script type="text/javascript" src="/js/jquery1.12.4.min.js"></script>
	<script type="text/javascript" src="/js/jquery.SuperSlide.2.1.3.js"></script> 
	<script type="text/javascript" src="/js/swiper.min.js"></script> 
	<script type="text/javascript" src="/js/bootstrap.min.js"></script> 
	<title>穴位宝典</title>  
	
	
</head>

<body>
<!--头部  -->
<!--通用顶部导航-->
	<%@include file="kuangjia/head.jsp" %>
<!--通用顶部导航 结束-->
	
<!-- banner -->
<div class="shouye_qiehuant">
	<div class="swiper-wrapper">
		<div class="swiper-slide"><a href="#"><img src="images/banner.jpg" alt="" width="1920" height="500"></a></div>
		<div class="swiper-slide"><a href="#"><img src="images/banner1.jpg" alt="" width="1920" height="500"></a></div> 
	</div>
	<!-- Add Pagination -->
	<div class="swiper-pagination"></div>
</div>  
<!-- Initialize Swiper -->
<script>
var swiper = new Swiper('.shouye_qiehuant', {
	pagination: {
	el: '.swiper-pagination',
	},
});
</script>

<!-- 养生推荐 -->
<div class="pingp_wenh">
	<div class="px1200">
		<!-- bt -->
		<div class="shouye_biapt shouye_biapt_ge">
			<div class="qian">养</div>
			<div class="nimen_ge">
				<p>养 生 推 荐</p>
				<span>Health recommendation</span>
			</div>
		</div>
		<script src="https://libs.baidu.com/jquery/1.7.2/jquery.min.js"></script>
<style>
li{ list-style-type: none; }</style>


<div id="broadcast" class="bar" name="giftactive">
  
  <div id="demo" style="overflow:hidden;height:200px;line-height:200px;">
    <ul class="mingdan" id="holder">
      <li><img src="/images/news1.jpg" alt="" height="300" width="450"><a href="news_xq.html" target="_blank">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 保养大肠经的最佳时间</a></li>
      <li><img src="/images/news2.jpg" alt="" height="300" width="450"><a href="news_xq1.html" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 保养肺经的最佳时间</a></li>
      <li><img src="/images/news3.jpg" alt="" height="300" width="450"><a href="news_xq2.html" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保养胃经的最佳时间</a></li>
      <li><img src="/images/news4.jpg" alt="" height="300" width="450"><a href="news_xq3.html" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保养脾经的最佳时间</a></li>
      <li><img src="/images/news5.jpg" alt="" height="300" width="450"><a href="news_xq4.html" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关于保养心经</a></li>
    </ul>
  </div>
</div>

<script>
function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
        marginTop: "-22px"
    },
    500,
    function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
    });
}
$(document).ready(function() {
    setInterval('AutoScroll("#demo")', 5000)
});
</script>
</div>
</div>

<!-- 穴位大全 -->
<div class="peixun_kecheng"> 
	<div class="px1200">
		<div class="shouye_biapt paixun_bt">
			<div class="qian">穴</div>
			<div class="nimen_ge">
				<p>穴位大全</p>
				<span>explain</span>
			</div>
            <hr>
            <div class="peixun_kec">
			<%@include file="kuangjia/jmlb.jsp" %>
		</div>
	</div>
</div>
		

 
<!-- 中医讲解 -->
<div class="peixun_kecheng"> 
	<div class="px1200">
		<div class="shouye_biapt paixun_bt">
			<div class="qian">中</div>
			<div class="nimen_ge">
				<p>中医讲解</p>
				<span>explain</span>
			</div>
			
		</div>
		<div class="peixun_kec">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="peixunkec_k">
						 <a href="peix1.html" class="thumbnail">
							<img src="images/ship_img.jpg" alt="">
							<p>养生培训</p>
							<span>四肢麻木的论治要点</span>
						</a>
					</div>	
				</div>
				<div class="swiper-slide">
					<div class="peixunkec_k">
						<a href="peix2.html" class="thumbnail">
							<img src="images/ship_img1.jpg" alt="">
							<p>养生培训</p>
							<span>胃痛的应用案例</span>
						</a>
					</div>	
				</div> 
				<div class="swiper-slide">
					<div class="peixunkec_k">
						<a href="peix3.html" class="thumbnail">
							<img src="images/ship_img2.jpg" alt="">
							<p>养生培训</p>
							<span>咳嗽的应用案例</span>
						</a>
					</div>	
				</div> 
				<div class="swiper-slide">
					<div class="peixunkec_k">
						<a href="peix4.html" class="thumbnail">
							<img src="images/ship_img3.jpg" alt="">
							<p>养生培训</p>
							<span>从太极图看阴阳平衡</span>
						</a>
					</div>	
				</div> 
				<div class="swiper-slide">
					<div class="peixunkec_k">
						<a href="peix5.html" class="thumbnail">
							<img src="images/ship_img4.jpg" alt="">
							<p>养生培训</p>
							<span>咳嗽的论治要点</span>
						</a>
					</div>	
				</div> 
				<div class="swiper-slide">
					<div class="peixunkec_k">
						<a href="peix6.html" class="thumbnail">
							<img src="images/ship_img5.jpg" alt="">
							<p>养生培训</p>
							<span>中风应用案例</span>
						</a>
					</div>	
				</div>     
			</div>

			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
		
		<!-- Initialize Swiper -->
		<script>
		var swiper = new Swiper('.peixun_kec', {

			slidesPerView: 3,
			spaceBetween: 10,
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
			autoplay: {
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
			},
		});
		</script>
	</div> 
</div>

<!-- footer -->
<!--通用底部导航-->
<br/>
<br/>
	<%@include file="kuangjia/footer.jsp" %>
<!--通用底部导航 结束-->

	
</body>

