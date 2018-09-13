
//$(function(){
	var aaa=1;
	var ul=$id("hot_wrap_ul");
	$.ajax({
		method:"get",
		url:"server/hot.php",
		dataType:"json",
		async:false,//异步问题，后面两个console说明问题
		success:function(data){

			
			var str="";
			for (var i = 0; i < data.length; i++) {
				// console.log(data[i]);
				str+=`
					<li class="hot_wrap_ul_li">
						<div class="detailImg">
							<a href="#">
								<img src="img/hot${data[i].img}.jpg" />
								<span class="favor">1</span>
							</a>
						</div>
						<div class="text">
                            <p class="desc">${data[i].desc}</p>
                            <p class="name">
                                <span class="cn">${data[i].cnname}</span>
                                <span class="en">${data[i].enname}</span>
                            </p>
                            <p class="attr">
                              	  ￥<span class="price">${data[i].price}</span>
                                /<span class="pound">${data[i].pound}</span>
                            </p>
                            <a href="javascript:;" class="addCart"></a>
                        </div>

					</li>


				`

			}
			
			// console.log(1);
			ul.innerHTML=str;
		}

			
	});

	// console.log(2);
//})
	$("#fix a").on("click",function(){
		this.parentNode.style.display="none";
	})