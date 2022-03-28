window.onload=function(){

	var list=document.getElementsByTagName("input");
	var strData="";
	//对表单中所有的input进行遍历
	for(var i=0;i<list.length && list[i];i++)
	{
		console.log(list[i]);
	//判断是否为文本框
		if(list[i].type=="hidden")   
		{
			strData +=list[i].value;
		}
	}
	
	console.log(strData);
	
	var jm1=strData.split('#');//数据库中所有的内容，形成数组
		console.log(jm1);
	var url=document.location.href;//获得当前jsp路径
		console.log(url);
	var urlArr=url.split('/');//将路径以/分隔符分隔开
		console.log(urlArr);
	var url1=urlArr[urlArr.length-1];//找到jmsy字段数组所处位置
		console.log(url1);
	
	var html="";
	var url="";
	
	var jm_img=new Array();
	jm_img[0]=jm1[2];
	for(var i=0;i<14;i++){
		jm_img[i+1]=jm1[2+(i+1)*4];
	}
		console.log(jm_img[0]);	
	
	var jm_wenzi=new Array();
	jm_wenzi[0]=jm1[1];
	for(var i=0;i<14;i++){
		jm_wenzi[i+1]=jm1[1+(i+1)*4];
	}
		console.log(jm_wenzi[0]);		
		
	var bofang=jm1[3];
	
	for(var i=0;i<=14;i++){
		var number=0;
		url=url1.concat(number+i);
			console.log(url);
			html +='<div class="col-xs-6 col-md-3">'+
						'<a href="'+url+'" class="thumbnail">'+
							'<img src="'+jm_img[i]+'" alt="..."/>'+
							'<img class="bof_kef" src="'+bofang+'" alt=""/>'+
							'<span>'+jm_wenzi[i]+''+
						'</a>'+
					'</div>';
		}

	var html1="";	
	for(var i=0;i<=3;i++){
		var number=0;
		url=url1.concat(number+i);
			console.log(url);
			html1 +='<div class="col-xs-6 col-md-3">'+
						'<a href="'+url+'" class="thumbnail">'+
							'<img src="'+jm_img[i]+'" alt="..."/>'+
							'<img class="bof_kef" src="'+bofang+'" alt=""/>'+				
							'<span>'+jm_wenzi[i]+''+
						'</a>'+
					'</div>';
		}
	
	var self=document.getElementById('row1');
	self.innerHTML=html;             
        		   
	var self1=document.getElementById('row2');
	self1.innerHTML=html1;            
		   
}