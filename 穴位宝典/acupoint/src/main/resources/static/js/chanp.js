window.onload=function(){
		var wenzi1="特定穴:无。*主治病症:①咳嗽，气喘；②胸痛，肩背痛。*经验应用:现代常用于治疗气管炎、支气管哮喘、肋间神经痛、局部软组织疾患等；配肺俞主治咳嗽、气喘;配中府、期门等主治胸肋痛。*";
		var wenzi2="艾灸：①隔物灸仪艾灸时间: 30-50分钟; 温度:38-45°C;②艾条悬灸时间: 10-15分钟;③艾炷灸时间: 3-5壮。*按摩：自我按摩，食指放在中指上，用中指指腹点按揉运穴位的酸胀处3分钟。*针灸：向外斜刺0.3~0.5寸，可沿本经传到至上肢远端；《甲乙经》“刺太深，令人逆息”；临床上要牢牢掌握针刺的深度和角度，不可向内侧深刺，以防刺伤肺脏；《甲乙经》“肩痛不可举，引缺盆痛，云门主之”云门穴下为喙突肩喙突锁骨韧带包括斜方韧带和圆锥韧带，针刺云门穴可以松解肩部喙锁韧带，增加肩部上举活动度，临床中对肩周炎有效。温馨提示:针刺需临床证明，请谨慎操作。*";
		var Image1=[{url:'images1/img/1.jpg'}];
		var Map=[{url:'movie/M1.mp4'}];
		var HtmlLink=[{url:'images2/img/2.jpeg'},
					  {url:'images2/img/2.jpeg'},
					  {url:'images3/img/3.jpeg'},
					  {url:'images4/img/4.jpeg'},
					  {url:'images5/img/5.jpeg'}];
		
		var WenziArr1=new Array();
		WenziArr1=wenzi1.split('*');
		
		var WenziArr2=new Array();
		WenziArr2=wenzi2.split('*');
		
		var html1="";
		var html2="";
		var html3="";
		
		for(var i=0;i<WenziArr1.length;i++){
			html1 +='<h5>'+WenziArr1[i]+'</h5>'
			}
			
		for(var i=0;i<WenziArr2.length;i++){
			html2 +='<h5>'+WenziArr2[i]+'</h5>'
			}
			
		for(var i=0;i<=3;i++){
				html3 +='<div class="col-xs-6 col-md-3">'+
							'<a href="chanp_xq.html" class="thumbnail">'+
								'<img src="'+HtmlLink[i].url+'" alt="...">'+
								'<p>手太阴肺经</p>'+
							'</a>'+
						'</div>';
			}	
			
		var self=document.getElementById('xuewei');
		self.innerHTML=		'<div class="qian">云</div>'+
							'<div class="nimen_ge">'+
								'<p>云 门</p>'+
								'<span>yumen lu2</span>'+
							'</div>'+  
							'<dl>'+
							  '<br/>'+
							  '<br/>'+
							  '<br/>'+
							  '<br/>'+
							  '<dt>一、定位</dt>'+
							  '<dd>'+
									'<center>'+
										'<div>'+
											'<ul>'+
												'<video controls poster="'+Image1[0].url+'">'+
													'<source src="'+Map[0].url+'" type="video/mp4">'+ 
												'</video>'+
											'</ul>'+
											'<br/>'+
										'</div>'+
									'</center>'+
							  '</dd>'+
							  '<dt>二、概述</dt>'+
							  '<dd>'
									+html1+
							  '</dd>'+
							  '<dt>三、操作</dt>'+
							  '<dd>'
								   +html2+
							  '</dd>'+
							'</dl>';
		
		var self1=document.getElementById('row2');
		self1.innerHTML=html3;  
	}