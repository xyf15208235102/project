"use strict";var str1=JSON.parse(getCookie("detail"));console.log(str1),console.log(str1.id);var str='\n\t\n\t\t<div class="show_wrap">\n\t\t\t\t<div class="mirror" id="mirror">\n\t\t\t\t\t<img src="../img/hot'.concat(str1.id,'.jpg" width="500" height="500" />\n\t\t\t\t\t<span class="zoom" id="zoom"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class="bigimg" id="bigimg">\n\t\t\t\t\t<img src="../img/hot').concat(str1.id,'.jpg" alt="" width="1000" height="1000"/>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class="detail">\n\t\t\t\t\t<div class="detail-title">\n\t\t\t\t\t\t<span class="detail-title-cnname">').concat(str1.cnname,'</span>\n\t\t\t\t\t\t<span class="detail-title-enname">').concat(str1.enname,'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="desc">').concat(str1.desc,'</div>\n\t\t\t\t\t <div class="spec">\n\t\t\t\t\t\t<div class="section">\n\t\t\t\t\t\t\t<div class="title">规格</div>\n\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t<span>1.5</span>\n\t\t\t\t\t\t\t\t<span>2.5</span>\n\t\t\t\t\t\t\t\t<span>3.5</span>\n\t\t\t\t\t\t\t\t<span>4.5</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="section">\n\t\t\t\t\t\t\t<div class="title">款项</div>\n\t\t\t\t\t\t\t<div class="content kuanxiang">\n\t\t\t\t\t\t\t\t￥\n\t\t\t\t\t\t\t\t<p class="price">').concat(str1.price,'</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t </div>\n\t\t\t\t\t <ul class="tips">\n\t\t\t\t\t \t<li class="canshu">14CM*14CM*4.5CM≈6寸，约640g</li>\n\t\t\t\t\t \t<li class="canshu">免费赠送5套餐具</li>\n\t\t\t\t\t \t<li class="canshu">蛋糕可切分9块</li>\n\t\t\t\t\t \t<li class="canshu">至少提前1天预定</li>\n\t\t\t\t\t </ul>\n\t\t\t\t\t <div class="operate">\n\t\t\t\t\t\t<a href="javascript:;" class="addCart">放入购物篮</a>\n\t\t\t\t\t\t<a href="javascript:;" class="goumai">立即购买</a>\n\t\t\t\t\t </div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\n\t\t\n\n\t\t\t\n\n\t'),str2='\n\t\t\t<img src="../img/product'.concat(str1.id,'.jpg">\n\t');$id("show").innerHTML=str,$id("product").innerHTML=str2;var point=$id("cart_span").innerHTML;$(".addCart").on("click",function(){console.log(123);this.parentNode.parentNode;for(var t=getCookie("card"),n=""==t?[]:JSON.parse(t),a=str1.id,s=0;s<n.length;s++)if(n[s].id==a){n[s].pound++;var i=JSON.stringify(n);return setCookie("card",i),console.log(document.cookie),console.log($(".cart_span").eq(0).html()),void($id("cart_span").innerHTML=++point)}var e={id:a,desc:str1.desc,cnname:str1.cnname,enname:str1.enname,price:str1.price,pound:str1.pound};n.push(e);i=JSON.stringify(n);setCookie("card",i),console.log(222),$id("cart_span").innerHTML=++point,console.log($id("cart_span").innerHTML),console.log(document.cookie)}),$(".goumai").on("click",function(){window.location.href="../html/jiesuan.html"}),$(".header li").on("click",function(){$(this).addClass("ac-ul-li").siblings().removeClass("ac-ul-li"),$(".item li").eq($(this).index()).show().siblings().hide()});var pageNum,allNum,pageCount=3,index=1;function show(){ajax({url:"http://localhost/gulp-project-template/app/server/talk.php",method:"GET",options:{pageCount:pageCount,index:index},success:function(t){console.log(112233);var n=JSON.parse(t),a=n.data;console.log(a),allNum=n.allCount,console.log(allNum),pageNum=Math.ceil(allNum/pageCount),console.log(pageNum);for(var s="",i=0;i<a.length;i++)s+='\n\t\t\t\t\t<div class="talk-list">\n\t\t\t\t\t\t<p class="userTel"><span></span>'.concat(a[i].userTel,'</p>\n\t\t\t\t\t\t<p class="userTalk">').concat(a[i].userTalk,"</p>\n\t\t\t\t\t</div>\n\t\t\t\t");document.getElementById("talk-wrap").innerHTML=s,$id("pagination").innerHTML='<li>\n\t\t\t      <a href="javascript:;" aria-label="Previous" class="prev">\n\t\t\t        <span aria-hidden="true" class="prev">&laquo;</span>\n\t\t\t      </a>\n\t\t\t    </li>\n\t\t\t    <li id="lastLi">\n\t\t\t      <a href="javascript:;" aria-label="Next" class="next">\n\t\t\t        <span aria-hidden="true" class="next">&raquo;</span>\n\t\t\t      </a>\n\t\t\t    </li>';for(i=1;i<=pageNum;i++){var e=document.createElement("li");e.innerHTML='<a href="javascript:;">'.concat(i,"</a>"),$id("pagination").insertBefore(e,$id("lastLi"))}}})}show(),$id("pagination").onclick=function(t){var n=(t=t||window.event).target||t.srcElement,a=n.innerHTML;isNaN(Number(a))?"prev"===n.className?--index<1&&(index=1):"next"===n.className&&pageNum<++index&&(index=pageNum):index=n.innerHTML,show()};