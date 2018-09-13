$(".detailImg").on("click",function(){
	var li=this.parentNode;
		var id=$(this.parentNode).index()+1;
		var obj={
			id: id,
			desc: li.children[1].children[0].innerHTML,
			cnname:li.children[1].children[1].children[0].innerHTML,
			enname:li.children[1].children[1].children[1].innerHTML,
			price:li.children[1].children[2].children[0].innerHTML,
			pound:li.children[1].children[2].children[1].innerHTML
		}
		var str=JSON.stringify(obj);
		console.log(obj)
		setCookie("detail",str);
		window.location.href="html/detail.html";

})