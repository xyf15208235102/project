var box = $("#banner"),
		ul = $("#banner ul"),
		aLi = $('#banner ul li'),
		ol = $("#banner ol"),
		aBtn = $("#banner ol li"),
		goPrev = $("#goPrev"),
		goNext = $("#goNext");
		
	var index = 0;//存当前处于第几张图
	var flag = false;//没有播放
//	for(var i = 0; i < len; i++){
//		$("<li class='"+ (i==0?"ac":"") +"'>"+ (i+1) +"</li>").appendTo(ol);
//	}
	aBtn.on("click",function(){
		if(!flag){
			//动画开始了
			flag = true;
			//自己改变样式
			$(this).addClass("ac").siblings().removeClass("ac");
			//切换图片
			aLi.eq(index).stop().fadeOut(1000);
			index = $(this).index();
			aLi.eq(index).stop().fadeIn(1000,function(){
				flag = false;
			});
		}	
	})
	goPrev.on("click",function(){
		if(!flag){
			flag = true;
			aLi.eq(index).stop().fadeOut(1000);
			index--;
			if(index < 0) index = aLi.length -1;
			aBtn.eq(index).addClass("ac").siblings().removeClass("ac");
			aLi.eq(index).stop().fadeIn(1000,function(){
				flag = false;
			});
		}
		
	})
	
	goNext.on("click",function(){
		if(!flag){
			flag = true;
			aLi.eq(index).stop().fadeOut(1000);
			index++;
			if(index > aLi.length-1) index = 0;
			aBtn.eq(index).addClass("ac").siblings().removeClass("ac");
			aLi.eq(index).stop().fadeIn(1000,function(){
				flag = false;
			});
		}
		
	})
	var timer = null;
	function auto(){
		timer = setInterval(function(){
			//trigger触发事件的意思
			goNext.trigger("click");
		},3000);
	}
	auto();
	$("#banner").hover(function(){
		clearInterval(timer);
	},auto);