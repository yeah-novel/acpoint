<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
</head>
<body>
<div class="kecheng_wk">
    <div class="px1200">
        <div class="left">
            <div class="dangq_luj"><a href="index">首页</a> &gt; <a href="zyjj">中医讲解</a> &gt; 讲解视频</div>
            <div class="class_k">
                <span>分类：</span>
                <a href="javascript:;" class="no">全部</a>
                
                <script>
                    $(function(){
                        $(".kecheng_wk .class_k a").mousedown(function(){
                            $(".kecheng_wk .class_k a").removeClass("no");
                            $(this).addClass("no")
                        })
                    })
                </script>
            </div>
            <div class="yao_meng">
                <div class="centre">
                    <input type="text" placeholder="疑难检索">
                    <input type="submit" value="搜索">
                </div>
        	</div>
            <div id="row1" class="row"></div>
        </div>
        <div class="right">
            <h2>热门推荐</h2>
            <div id="row2" class="row"></div>
        </div>
    </div>
</div>
</body>
</html>