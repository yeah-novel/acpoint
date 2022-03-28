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
	
		var spname=content[1];//获取视频名称
			console.log(spname);
			
		var spename=content[2];//获取穴视频英文名
			console.log(spename);
			
		var spdingyi=content[3];//获取定义
			console.log(spdingyi);
			
		var spreason=content[4];//原因
			console.log(spreason);
			
		var spfashengjizhi=content[5];//发生机制
			console.log(spfashengjizhi);
			
		var spvideo=content[6];//视频
			console.log(spvideo);
			
		var spimg=content[7];//图片
			console.log(spimg);
			
		var url=document.location.href;//获得当前jsp路径
			console.log(url);	
		var url1=url.split('/');
		var url2=url1[url1.length-1];
			console.log(url2);
		var url3=url2.split('0');	
		console.log(url3);
		var dangq1=document.getElementById('dangq');
		dangq1.innerHTML='<div class="dangq_luj">'+
							'<a href="index">首页</a> &gt;'+
							'<a href="jmsy">穴位大全</a> &gt;'+
							'<a href=""></a> &gt;'+
							'视频讲解' +    
						 '</div>';
			
		var self=document.getElementById('shipin');
		self.innerHTML=		'<div class="qian">'+spname[0]+'</div>'+
							'<div class="nimen_ge">'+
								'<p>'+spname+'</p>'+
								'<span>'+spename+'</span>'+
							'</div>'+  
							'<dl>'+
							  '<br/>'+
							  '<br/>'+
							  '<br/>'+
							  '<br/>'+
							  '<dt>一、讲解</dt>'+
							  '<dd>'+
									'<center>'+
										'<div>'+
											'<ul>'+
												'<video controls poster="'+spimg+'">'+
													'<source src="'+spvideo+'" type="video/mp4">'+ 
												'</video>'+
											'</ul>'+
											'<br/>'+
										'</div>'+
									'</center>'+
							  '</dd>'+
							  '<dt>二、定义</dt>'+
							  '<dd>'
									+spdingyi+
							  '</dd>'+
							  '<dt>三、原因</dt>'+
							  '<dd>'
								   +spreason+
							  '</dd>'+
							
							  '<dt>四、发生机制</dt>'+
							  '<dd>'
								   +spfashengjizhi+
							  '</dd>'+
							'</dl>';
		var htmlright="";
		var urlright=[{url:'images/news1.jpg'},{url:'images/news1.jpg'},{url:'images/news1.jpg'},{url:'images/news1.jpg'},{url:'images/news1.jpg'}];
		var jmdqsz=["四肢麻木症","胃痛的应用案例","咳嗽的应用案例","胃痛的应用案例","四肢麻木的论治"];
		
		for(var i=0;i<=3;i++){
			htmlright +='<div class="col-xs-6 col-md-3">'+
						'<a href="'+urlright[i].url+'" class="thumbnail">'+
							'<img src="'+urlright[i].url+'">'+
							'<p>'+jmdqsz[i]+'</p>'+//count代表当前穴位从属的经脉
						'</a>'+
					'</div>';
		}	

		var self1=document.getElementById('row2');
		self1.innerHTML=htmlright;  
			
		
		
	}