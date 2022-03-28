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
		var jbname=content[1];
		var jbename=content[2];
		var jbdefinition=content[3];		
		
		var jbsymptom=content[4];
			var jbsymptom1=jbsymptom.split('*');
			var html1="";
			for(var i=0;i<jbsymptom1.length;i++){
				html1+='<p>'+jbsymptom1[i]+'</p>';
			}			
			
		var jbidentify=content[5];
			var jbidentify1=jbidentify.split('*');
			var html2="";
			for(var i=0;i<jbidentify1.length;i++){
				html2+='<p>'+jbidentify1[i]+'</p>';
			}			
			
		var jbimgList=content[6];
			var jbimgList1=jbimgList.split(';');
			var html3=new Array();
			for(var i=0;i<jbimgList1.length;i++){
				html3[i]=jbimgList1[i];
			}
			
		var jbnameList=content[7];
		console.log(jbnameList);
			var jbnameList1=jbnameList.split(';');
			var html4=new Array();
			for(var i=0;i<jbnameList1.length-1;i++){
				html4[i]=jbnameList1[i];
			}
			console.log(html4);
					
		var lujing=document.location.href;
			var jspnameY=lujing.split('/');
			var jspname=jspnameY[jspnameY.length-1];
				console.log(jspname);//获得bzjs0
				var countY=jspname.split('s');
				var count=countY[1];//count=0
		var Link=new Array();
		var Link_count=0;
		for(i=count;i<count+5;i++){
			Link[Link_count++]="bzjs"+count;
		}
		
		var dangq=document.getElementById("dangq");
		dangq.innerHTML='<a href="index">首页</a> &gt;'+
						'<a href="bzjs">疾病检索</a> &gt;'+
						jbname;
			
		var bingzheng=document.getElementById("bingzheng");
		bingzheng.innerHTML='<div class="qian">'+jbname[0]+'</div>'+
							'<div class="nimen_ge">'+
								'<p>'+jbname+'</p>'+
								'<span>'+jbename+'</span>'+
							'</div>'+
						    '<div>'+
						    	'<br/>'+
						        '<br/>'+
						        '<br/>'+
						        '<br/>'+
						        '<p><h5><strong>一、定义</strong></h5></p>'+
						    '</div>'+
						    '<div>'+
						    	'<p><h5>'+jbdefinition+'</h5></p>'+
							'</div>'+
						    '<div>'+
						    	'<br/>'+
						    	'<p><h5><strong>二、常见病因及症状</strong></h5></p>'+
						    '</div>'+
							'<div>'+html1+'</div>'+						               
						    '<div>'+					    
						        '<br/>'+
						    	'<p><h5><strong>三、定义</strong></h5></p>'+
						    '</div>'+						    
						    '<div>'+html2+'</div>';
		
		
		var row2="";
		for(var i=0;i<=4;i++){
			row2+='<div class="col-xs-6 col-md-3">'+
	        			'<a href="'+Link[i]+'" class="thumbnail">'+
	        				'<img src="'+html3[i]+'" alt="...">'+
	        				'<p>'+html4[i]+'</p>'+
	        				'</a>'+
	        		'</div>';
		}
		var row=document.getElementById('row');
		row.innerHTML=row2;
		
	}