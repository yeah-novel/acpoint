window.onload=function(){
		var wenzhang="大肠经位于上肢外侧，是多气多血之经，阳气最盛，平日可用刮痧、敲打等方法对其进行刺激，可以清除体内的热毒，清洁血液通道，预防青春痘、暗疮等皮肤病。可以沿着大肠经的循行路线进行拍打，每天拍打1次，每次以12分钟为宜，不妨双手交替进行。*卯时（05：00～07：00），大肠经最旺，大肠蠕动，排出毒物渣滓。肺与大肠相表里。肺将充足的新鲜血液布满全身，紧接着促使大肠进入兴奋状态，完成吸收食物中的水分和营养、排出渣滓的过程。清晨起床后最好养成排便的习惯。起床后宜先喝杯温开水，然后去卫生间把一天积攒下来的废物排出体外。晨起一杯温水，可稀释血液，有防止血栓形成的作用。";
		var Image1=[{url:'images/banner_sheji1.jpg'}];
		
		var wenzhangArr=new Array();
		wenzhangArr=wenzhang.split('*');
		var html="";
		var html1="";
		html1='<img src="'+Image1[0].url+'" alt=""/>';
		for(var i=0;i<wenzhangArr.length;i++){
				html +='<p>'+wenzhangArr[i]+'</p>';
			}
		
		<!--获取当前html的相对路径-->
		/*var url=document.location.toString();
		var urlArr=url.split("//");
		var start=urlArr[1].indexOf("/");
		var relUrl=urlArr[1].substring(start);
		if(relUrl.indexOf("?")!=-1){
				relUrl=relUrl.split("?")[0];
			}
		console.log(relUrl);*/
		var self=document.getElementById('wenzhang');
		self.innerHTML=html+html1;
		
		
		
		var url=document.location.href;//获得当前html本地绝对路径
		var urlArr=url.split('/');//将路径以/分隔符分隔开
		var url1=urlArr[5];//找到news_xq0.html字段数组所处位置
		var url2=url1.split('.');//将news_xq0.html以.分隔符分隔开
		var url3=url2[0];//取news_xq0部分
		var url4=url3.split('q');//将news_xq0以q分隔符分隔开
		var urlTrue=url4[1];//得到数字0
		var front="";//前一篇链接
		var next="";//后一篇链接
		var urlTrueFront="";//前一篇路径字符串
		var urlTrueNext="";//后一篇路径字符串
		
		
		
		if(Number(urlTrue)==0){
			
			front='<a href="#">上一篇</a></p>';
			urlTrueNext =url4[0].concat("q",Number(urlTrue+1),".html");//urlTrueNext=news_xq1.html
			next='<a href="'+urlTrueNext+'">下一篇</a>';
			
			}
		else if(Number(urlTrue)==5){
			
			next='<a href="#">下一篇</a></p>';
			urlTrueFront=url4[0].concat("q",Number(urlTrue-1),".html");//urlTrueFront=news_xq4.html
			front='<a href="'+urlTrueFront+'">上一篇</a>';
			
			}
		else{
			
			urlTrueFront=url4[0].concat("q",Number(urlTrue-1),".html");//前一个页面
			front='<a href="'+urlTrueFront+'">上一篇</a>';
			
			
			urlTrueNext =url4[0].concat("q",Number(urlTrue+1),".html");//后一个页面
			next='<a href="'+urlTrueNext+'">下一篇</a>';
			
			}
			
		var self1=document.getElementById('fanhui');
		self1.innerHTML=front+next;	
		
	}