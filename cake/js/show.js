$(function(){
	
	var box = $id("mirror"),
		span = $id("zoom"),
		bigimg = $id("bigimg"),
		img = $tag("img",bigimg)[0];
			//鼠标进入box
		box.onmousemove = function(e){
			e = e || window.event;
			span.style.display = "block";
			bigimg.style.display = "block";
			var y=document.documentElement.scrollTop || document.body.scrollTop;
			//计算span的坐标
			var left = e.clientX - box.offsetLeft - span.offsetWidth/2,
				top = e.clientY - box.offsetTop - span.offsetHeight/2+y;
				
			if(left < 0) left = 0;
			if(top < 0) top = 0;
			if(left > box.offsetWidth - span.offsetWidth) left = box.offsetWidth - span.offsetWidth;
			if(top > box.offsetHeight - span.offsetHeight) top = box.offsetHeight - span.offsetHeight;
				
			img.style.left = -2 * left + "px";
			img.style.top = -2 * top + "px";
			
			span.style.left = left + 'px';
			span.style.top = top + "px";
				
		}
		box.onmouseleave = function(){
			span.style.display = bigimg.style.display = "none";
		}
	
})