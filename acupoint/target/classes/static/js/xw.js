window.onload=function(){	
	
	var list=document.getElementsByTagName("input");
	var strData="";
	//对表单中所有的input进行遍历
	for(var i=0;i<list.length && list[i];i++)
	{
	//判断是否为文本框
		if(list[i].type=="hidden")   
		{
			strData +=list[i].value;//获取数据库查询后所得的内容
		}
	}
	//console.log(strData);
	
		var content=strData.split('#');
		console.log(content);
	
		var xwname=content[1];//获取穴位名称
			//console.log(xwname);
			
		var xwename=content[2];//获取穴位英文名
			//console.log(xwename);
			
		var xwjmname=content[3];//获取穴位所属经脉名
			//console.log(xwjmname);
			
		var xwgainianY=content[4];//wenzi1中内容
			//console.log(xwgainianY);
			
		var xwliaofaY=content[5];//wenzi2中内容
			//console.log(xwliaofaY);
			
		var xwimg=content[6];//获取本穴位图
			//console.log(xwimg);
			
		var xwimgListY=content[7];//获取本穴位右侧图
			console.log(xwimgListY);
		var xwimgList=xwimgListY.split(';');
			//console.log(xwimgList);
			
		var xwmovie=content[8];//获取本穴位视频讲解
			//console.log(xwmovie);
			
		var xwjm_img=content[9];//获取本穴位所属经脉图
			//console.log(xwjm_img);
		
		var url=document.location.href;//获得当前jsp路径
			//console.log(url);
		var jspnameY=url.split('/');
		var jspname=jspnameY[jspnameY.length-1];//获得当前jsp名字，例如：jmsy00
			//console.log(jspname);
		var countY=jspname.split('y');//将当前jmsy00才分为jms和00两部分
			//console.log(countY);
		var count=countY[1];//获得当前穴位jsp所处位置
			//console.log(count);
		if(count>=0&&count<=10) count=0;//从属手太阴肺经穴位
		if(count>=11&&count<=30) count=1;//从属手阳明大肠经穴位
		if(count>=31&&count<=75) count=2;//从属足阳明胃经穴位
		if(count>=76&&count<=96) count=3;//从属足太阴脾经穴位
		if(count>=97&&count<=105) count=4;//从属手少阴心经穴位
		if(count>=106&&count<=124) count=5;//从属手太阳小肠经穴位
		if(count>=125&&count<=191) count=6;//从属足太阳膀胱经穴位
		if(count>=192&&count<=218) count=7;//从属足少阴肾经穴位
		if(count>=219&&count<=227) count=8;//从属手厥阴心包经穴位
		if(count>=228&&count<=250) count=9;//从属手少阳三焦经穴位
		if(count>=251&&count<=294) count=10;//从属足少阳胆经穴位
		if(count>=295&&count<=308) count=11;//从属足厥阴肝经穴位
		if(count>=309&&count<=337) count=12;//从属督脉穴位
		if(count>=338&&count<=361) count=13;//从属任脉穴位
		if(count>=362&&count<=424) count=14;//从属经外奇穴穴位
		
		var jmdqsz=["手太阴肺经","手阳明大肠经","足阳明胃经","足太阴脾经","手少阴心经","手太阳小肠经","足太阳膀胱经","足少阴肾经","手厥阴心包经","手少阳三焦经","足少阳胆经","足厥阴肝经","督脉","任脉","经外奇穴"];
		
							
		var jmsyqz="jmsy";//记录jmsy00.jsp,jmsy01.jsp,jmsy02.jsp.......页面前缀
		var jmsy=new Array();
		var countB=count;//使得count一直表示当前穴位所从属的经脉
		if(countB>=0&&countB<=9){
			countB="0"+countB;
		}
		for(var i=0;i<4;i++){
			jmsy[i]=jmsyqz+countB;//得到jmsy页面的一部分集合页面
			countB++;
			if(countB>=0&&countB<=9){
				countB="0"+countB;
			}
			console.log(countB);
		}
		console.log(jmsy);
		/*for(var i=0;i<jmsy.length;i++){
			console.log(jmsy[i]);
		}*/
	
		var dangq1=document.getElementById('dangq');
		dangq1.innerHTML='<div class="dangq_luj">'+
							'<a href="index">首页</a> &gt;'+
							'<a href="'+jmsy[0]+'">'+jmdqsz[count]+'</a> &gt;'+
							xwname+    
						 '</div>';
		
		
		
		
		var wenzi1=xwgainianY;
		var wenzi2=xwliaofaY;
		var Image1=xwjm_img;
		var Map=xwmovie;
		var HtmlLink=xwimgList;
		
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
							'<a href="'+jmsy[i]+'" class="thumbnail">'+
								'<img src="'+HtmlLink[i]+'">'+
								'<p>'+jmdqsz[count++]+'</p>'+//count代表当前穴位从属的经脉
							'</a>'+
						'</div>';
			}	
			
		var self=document.getElementById('xuewei');
		self.innerHTML=		'<div class="qian">'+xwname[0]+'</div>'+
							'<div class="nimen_ge">'+
								'<p>'+xwname+'</p>'+
								'<span>'+xwename+'</span>'+
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
												'<video controls poster="'+Image1+'">'+
													'<source src="'+Map+'" type="video/mp4">'+ 
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