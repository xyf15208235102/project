// console.log(document.cookie);
// var arr=[];
var str1=JSON.parse(getCookie("detail"))
// arr.push(getCookie("detail"));
console.log(str1);
console.log(str1.id);
var str=`
	
		<div class="show_wrap">
				<div class="mirror" id="mirror">
					<img src="../img/hot${str1.id}.jpg" width="500" height="500" />
					<span class="zoom" id="zoom"></span>
				</div>
				<div class="bigimg" id="bigimg">
					<img src="../img/hot${str1.id}.jpg" alt="" width="1000" height="1000"/>
				</div>
				
				<div class="detail">
					<div class="detail-title">
						<span class="detail-title-cnname">${str1.cnname}</span>
						<span class="detail-title-enname">${str1.enname}</span>
					</div>
					<div class="desc">${str1.desc}</div>
					 <div class="spec">
						<div class="section">
							<div class="title">规格</div>
							<div class="content">
								<span>1.5</span>
								<span>2.5</span>
								<span>3.5</span>
								<span>4.5</span>
							</div>
						</div>
						<div class="section">
							<div class="title">款项</div>
							<div class="content kuanxiang">
								￥
								<p class="price">${str1.price}</p>
							</div>
						</div>
					 </div>
					 <ul class="tips">
					 	<li>14CM*14CM*4.5CM≈6寸，约640g</li>
					 	<li>免费赠送5套餐具</li>
					 	<li>蛋糕可切分9块</li>
					 	<li>至少提前1天预定</li>
					 </ul>
					 <div class="operate">
						<a href="javascript:;" class="addCart">放入购物篮</a>
						<a href="javascript:;" class="goumai">立即购买</a>
					 </div>
				</div>
				
			</div>
	
		

			

	`
	var str2=`
			<img src="../img/product${str1.id}.jpg">
	`
	$id("show").innerHTML=str;
	$id("product").innerHTML=str2;

	var point=$id("cart_span").innerHTML;
	$(".addCart").on("click",function(){
		console.log(123);
		var li=this.parentNode.parentNode;
					var cardnum=getCookie("card")
					var arr=cardnum==""? []: JSON.parse(cardnum);
					var pound=1;
					var id=str1.id;
					
					for (var j=0;j<arr.length;j++) {
						if (arr[j].id==id) {
							arr[j].pound++;
							var str2=JSON.stringify(arr);
							setCookie("card",str2);
							console.log(document.cookie);
							console.log($(".cart_span").eq(0).html());
							$id("cart_span").innerHTML=++point;
							return;
						}
					}
					var obj={
						id: id,
						desc: str1.desc,
						cnname:str1.cnname,
						enname:str1.enname,
						price:str1.price,
						pound:str1.pound
					}
					arr.push(obj);
					var str2=JSON.stringify(arr);
					setCookie("card",str2);
					// console.log(typeof($id("cart_span").innerHTML));
					console.log(222);
					$id("cart_span").innerHTML=++point;
					console.log($id("cart_span").innerHTML);
					console.log(document.cookie);
	})

	$(".goumai").on("click",function(){
			window.location.href="../html/jiesuan.html";

	})
	//选项卡
	$(".header li").on("click",function(){
			$(this).addClass("ac-ul-li").siblings().removeClass("ac-ul-li");
			$(".item li").eq($(this).index()).show().siblings().hide();

	})

var pageCount=3;
var index=1;
var pageNum;
var allNum;
function show(){
	ajax({
		url:"../server/talk.php",
		method:"GET",
		options:{pageCount:pageCount,index:index},
		success:function(data1) {
			// body...
			// console.log(data1);
			// return;
			console.log(112233);
			var data2=JSON.parse(data1);
			var data=data2.data;
			console.log(data);
			 allNum=data2.allCount;
			 console.log(allNum);
			pageNum=Math.ceil(allNum/pageCount);
			console.log(pageNum);
			// console.log(data);
			var str3="";
			for (var i = 0; i < data.length; i++) {
				str3+= `
					<div class="talk-list">
						<p class="userTel"><span></span>${data[i]["userTel"]}</p>
						<p class="userTalk">${data[i]["userTalk"]}</p>
					</div>
				`
			}
			document.getElementById('talk-wrap').innerHTML=str3;
			$id("pagination").innerHTML = `<li>
			      <a href="javascript:;" aria-label="Previous" class="prev">
			        <span aria-hidden="true" class="prev">&laquo;</span>
			      </a>
			    </li>
			    <li id="lastLi">
			      <a href="javascript:;" aria-label="Next" class="next">
			        <span aria-hidden="true" class="next">&raquo;</span>
			      </a>
			    </li>`;
				// 拼接分页
				for (var i = 1; i <=pageNum; i++) {
					var li=document.createElement("li");
					li.innerHTML=`<a href="javascript:;">${i}</a>`;
					$id("pagination").insertBefore(li,$id("lastLi"));
				}

		}

	})
}
show();

$id("pagination").onclick=function(e){
	e=e || window.event;
	var target=e.target || e.srcElement;
	var content=target.innerHTML;
	if (!isNaN(Number(content))) {
		index=target.innerHTML;
		// show();
	}else if(target.className==="prev"){
		index--;
		if (index<1) {
			index=1;
			// show();
		}
	}else if(target.className==="next"){
		index++;
		if (index>pageNum) {
			index=pageNum;
			// show();
		}
	}
	show();
}