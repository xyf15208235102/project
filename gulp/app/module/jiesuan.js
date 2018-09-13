// $(function(){
	// console.log(1)
	console.log(document.cookie)
	// $("#cart").on("click",function(){
		$id("cart").onclick=function(){
			console.log(2)
		}


		// console.log(1)
//		window.location.href="html/jiesuan.html";
//				$("#tbody").html="";
				$id("tbody").innerHTML="";
				var str1=getCookie("card");
				// console.log(1)
				var allArr=str1?JSON.parse(str1):[];
				var str="";
				for (var i=0;i<allArr.length;i++) {
					str+=`
					<tr class="tbody-tr">
	        			<td class="c-ckbox">
	        				<img src="../img/hot${allArr[i].id}.jpg" alt="" />
	        			</td>
	        			<td class="c-product">
	        				<p>${allArr[i].cnname}</p>
	        				<p>${allArr[i].enname}</p>
	        			</td>
	        			<td class="c-attr">免费赠送5套餐具</td>
	        			<td class="c-amount">
	        				<a href="javascript:;" class="pound-prev"></a>
	        				<input type="text" class="pound" value="${allArr[i].pound}" class="pound"/>
	        				<a href="javascript:;" class="pound-next"></a>
	        			</td>
	        			<td class="c-spec">1.5磅</td>
	        			<td class="c-price">${allArr[i].price}</td>
	        			<td class="c-privilege">无可用</td>
	        			<td class="c-operate">
	        				<a href="javascript:;" class="delBtn">删除</a>
	        			</td>
        			</tr>
				
			`
					
				}
			$id("tbody").innerHTML=str;
			var sum=0,
				amount=0,
			    tr=$class("tbody-tr",$id("tbody"));
			    // console.log(tr);
			    // console.log(tr[2].children[3]);
			    // console.log(tr[0].children[3].children[1].value);
			    // console.log(tr[0].children[5].innerHTML);
			for (var i=0;i<tr.length;i++) {
				sum+=(tr[i].children[3].children[1].value)*(tr[i].children[5].innerHTML);
			}

			$id("totalPrice").innerHTML=sum;
			// console.log(tr.length);
			// console.log($id("shuliang"));
			$id("shuliang").innerHTML=tr.length;
			
			$(".pound-prev").on("click",function(){
				if (this.parentNode.children[1].value<=1) {
					if (confirm("您选择的商品数量不大于零，确定要删除该商品吗？")) {
						$id("totalPrice").innerHTML=sum=sum-Number(this.parentNode.parentNode.children[5].innerHTML);
//						$id("shuliang").innerHTML=tr.length-1;
						this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
						$id("shuliang").innerHTML=tr.length;
					}else{
//						this.parentNode.children[1].value--;
						$id("totalPrice").innerHTML=sum=sum;
						$id("shuliang").innerHTML=tr.length;
					}
					
				}else{
					this.parentNode.children[1].value--;
					$id("totalPrice").innerHTML=sum=sum-Number(this.parentNode.parentNode.children[5].innerHTML);
					console.log(sum);
				}
//				var tr=$class(".tbody-tr");
//				for(var i=0;i<tr.length;i++){
//					tr
//				}
				
			})
			$(".pound-next").on("click",function(){
				if (this.parentNode.children[1].value>=99) {
					this.parentNode.children[1].value=99;
					sum=sum;
				}else{
					this.parentNode.children[1].value++;
					$id("totalPrice").innerHTML=sum=sum+Number(this.parentNode.parentNode.children[5].innerHTML);
					console.log(sum);
				}
			})
			$(".delBtn").on("click",function(){
				if (confirm("您确定要删除该商品吗？")) {
					console.log(3);
					$id("totalPrice").innerHTML=sum=sum-Number(this.parentNode.parentNode.children[5].innerHTML)*parseInt(this.parentNode.parentNode.children[3].children[1].value);
					$id("shuliang").innerHTML=tr.length-1;
					this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
					if ($id("tbody").innerhtml=="") {
						$id("tbody").innerhtml="购物车空空如也";
						console.log(321);
					}
				}
				
			})
			
//				currentAmount=0;
			$(".pound").on("focus",function(){
				amount=Number(this.value);
			})
			$(".pound").on("blur",function(){
				if(Number(this.value)<=0){
					if (confirm("您选择的商品数量不大于零，确定要删除该商品吗？")) {
						$id("totalPrice").innerHTML=sum=sum-Number(this.parentNode.parentNode.children[5].innerHTML)*amount;
						this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
						$id("shuliang").innerHTML=tr.length;
					}
					
					// alert("单个商品数量不能小于零，请重新输入");
					// this.value=0;
				}
				// if(parseInt(this.value)==0){
			
				// 	$id("shuliang").innerHTML=tr.length-1;
				// 	// this.value=0;
				// }
				if(Number(this.value)>99){
					// alert("单个商品数量不能多余99个，请重新输入");
					this.value=99;
					$id("shuliang").innerHTML=tr.length;
					$id("totalPrice").innerHTML=sum=sum+(Number(this.value)-amount)*Number(this.parentNode.parentNode.children[5].innerHTML);
				}

				$id("shuliang").innerHTML=tr.length;
				$id("totalPrice").innerHTML=sum=sum+(Number(this.value)-amount)*Number(this.parentNode.parentNode.children[5].innerHTML);

				
			})
		
//		}
	// })
	
// })