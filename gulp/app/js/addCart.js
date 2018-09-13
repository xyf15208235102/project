	
$(function(){
	// var arr=[];
	var point=0;
	$(".addCart").on("click",function(){
		console.log(123);
		
//		var id=$(this.parentNode.parentNode).index()+1;
			// li=$(this.parentNode.parentNode).val();
// 		 $.ajax({
// 			type:"get",
// 			url:"server/addCart.php",
// 			async:true,
// 			data:{
// 				"id":id
// 			},
// 			dataType:"json",
// 			success:function(data){
// 				for (var i=0;i<arr.length;i++) {
// 					if (arr[i][0].id==id) {
// 						arr[i][0].pound++;
// 						var str=JSON.stringify(arr);
// 						setCookie("cart",str);
// 						console.log(document.cookie);
// 						// console.log(arr);
// 						$id("cart_span").innerHTML++;
// 						return;
// 					}
// 					// console.log(arr[i][i].pound);
// 				}
// 				arr.push(data);
// 				var str=JSON.stringify(arr);
// 				setCookie("cart",str);
// 				console.log(document.cookie);
// //				console.log(arr);
// 				$id("cart_span").innerHTML++;
// 		 	}
// 		 });
			var li=this.parentNode.parentNode;
					var cardnum=getCookie("card")
					var arr=cardnum==""? []: JSON.parse(cardnum);
					var pound=1;
					var id=$(this.parentNode.parentNode).index()+1;
					
					for (var j=0;j<arr.length;j++) {
						if (arr[j].id==id) {
							arr[j].pound++;
							var str=JSON.stringify(arr);
							setCookie("card",str);
							console.log(document.cookie);
							console.log(111);
							$id("cart_span").innerHTML=++point;
							return;
						}
					}
					var obj={
						id: id,
						desc: li.children[1].children[0].innerHTML,
						cnname:li.children[1].children[1].children[0].innerHTML,
						enname:li.children[1].children[1].children[1].innerHTML,
						price:li.children[1].children[2].children[0].innerHTML,
						pound:li.children[1].children[2].children[1].innerHTML
					}
					arr.push(obj);
					var str=JSON.stringify(arr);
					setCookie("card",str);
					console.log(typeof($id("cart_span").innerHTML));
					console.log(222);
					$id("cart_span").innerHTML=++point;
					console.log(document.cookie);
				

	})

	$("#fix a").on("click",function(){
		this.parentNode.style.display="none";
	})
})