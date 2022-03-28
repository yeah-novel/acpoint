// JavaScript Document
window.onload=function(){
	
		var list=document.getElementsByTagName("input");
		var strData="";
		//对表单中所有的input进行遍历
		for(var i=0;i<list.length && list[i];i++)
		{
		//判断是否为文本框
			if(list[i].type=="hidden")   
			{
				strData +=list[i].value;
			}
		}
		//console.log(strData);
		var wenzhang111=strData.split('#');
			console.log(wenzhang111);	
		
		var wenzhang="";
		wenzhang=wenzhang111[2];
		var Image1Y=wenzhang111[3];
		var Image1Y2=Image1Y.split(']');
		var Image1=Image1Y2[0];
			console.log(Image1);
		
		var wenzhangArr=new Array();
		wenzhangArr=wenzhang.split('*');
		var html="";
		var html1="";
		html1='<img src="'+Image1+'"/>';
		for(var i=0;i<wenzhangArr.length;i++){
				html +='<p>'+wenzhangArr[i]+'</p>';
			}
		
		var self=document.getElementById('wenzhang');
		self.innerHTML=html+html1;		
		
		var article=wenzhang111[1];
		var self2=document.getElementById('article');
		self2.innerHTML='<h3>'+article+'</h3>'+
        				'<div class="xia_sd">'+
        					'<div class="bshare-custom" style="display: inline-block;"><div class="bsPromo bsPromo2"></div><a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);"></a><a title="分享到QQ空间" class="bshare-qzone"></a><a title="分享到微信" class="bshare-weixin" href="javascript:void(0);"></a><a title="分享到新浪微博" class="bshare-sinaminiblog"></a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a></div><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=1&amp;lang=zh"></script><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC0.js"></script>'+
        				'</div>'		
			
		var url=document.location.href;//获得当前jsp本地绝对路径
			console.log(url);
		var urlArr=url.split('/');//将路径以/分隔符分隔开
			console.log(urlArr);
		var url1=urlArr[urlArr.length-1];//找到ystj0字段数组所处位置
			console.log(url1);
		var url2=url1.split('j');//将ystj0以j分隔符分隔开
		var urlTrue=url2[1];//得到数字0
				
		var front="";//前一篇链接
		var next="";//后一篇链接
		var urlTrueFront="";//前一篇路径字符串
		var urlTrueNext="";//后一篇路径字符串		
			
		if(Number(urlTrue)==0){
			
			front='<a href="#">上一篇</a></p>';
			urlTrueNext =url2[0].concat("j",Number(urlTrue+1));//urlTrueNext=ystj1
			next='<a href="'+urlTrueNext+'">下一篇</a>';
			
			}
		else if(Number(urlTrue)==5){
			
			next='<a href="#">下一篇</a></p>';
			urlTrueFront=url2[0].concat("j",Number(urlTrue-1));//urlTrueFront=ystj4
			front='<a href="'+urlTrueFront+'">上一篇</a>';
			
			}
		else{
			
			urlTrueFront=url2[0].concat("j",Number(urlTrue-1));//前一个页面
			front='<a href="'+urlTrueFront+'">上一篇</a>';
			
			
			urlTrueNext =url2[0].concat("j",Number(urlTrue+1));//后一个页面
			next='<a href="'+urlTrueNext+'">下一篇</a>';
			
			}
			
		var self1=document.getElementById('fanye');
		self1.innerHTML=front+next;		
		
	}