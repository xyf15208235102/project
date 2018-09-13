
//$(function(){
	console.log(document.cookie);
	// console.log(2);
var brr = [false,false,false,false,false];
$("div input:eq(0)").on("blur",function(){
//	console.log(typeof($("div input:eq(0)")));
	var str = this.value;
	var reg = /^\w+$/;
	var _this=this;
	if(reg.test(str)){
		// console.log(2);
		$.ajax({
			method:"get",
			url:"http://localhost/gulp-project-template/app/server/register.php",
			data:{
				"user":$('div input:eq(0)').val()
			},
			dataType:"json",//JSON对象
			async:true,
			success:function(data){
				// console.log(data);
				// alert(data.code);
				// console.log(1);
				console.log(data);
				// alert("pause");
				if (!data.length) {
					brr[0] = true;
					console.log(11);
					_this.parentNode.children[1].style.display = "none";
				}else{
					brr[0] = false;
					console.log(22);
					_this.parentNode.children[1].style.display = "block";
				}
			}
		});
		// arr[0] = true;
		// this.parentNode.children[1].style.display = "none";
	}else{
		brr[0] = false;
		console.log(33);
		this.parentNode.children[1].style.display = "block";
	}
})
$("div input:eq(1)").on("blur",function(){
	console.log(3)
	var str = this.value;
	var reg = /^.{6,}$/;
	if(reg.test(str)){
	brr[1] = true;
	this.parentNode.children[1].style.display = "none";
	}else{
		brr[1] = false;
		this.parentNode.children[1].style.display = "block";
	}
})
$("div input:eq(2)").on("blur",function(){
	if($("div input:eq(2)").val()===$("div input:eq(1)").val()){
		brr[2] = true;
		this.parentNode.children[1].style.display = "none";
	}else{
		brr[2] = false;
		this.parentNode.children[1].style.display = "block";
	}
})
$("div input:eq(3)").on("blur",function(){
	var str = this.value;
	var reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
	if(reg.test(str)){
		brr[4] = true;
		this.parentNode.children[1].style.display = "none";
	}else{
		brr[4] = false;
		this.parentNode.children[1].style.display = "block";
	}
})
$("div input:eq(4)").on("blur",function(){
	var str = this.value;
	var reg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
	if(reg.test(str)){
		brr[3] = true;
		this.parentNode.children[1].style.display = "none";
	}else{
		brr[3] = false;
		this.parentNode.children[1].style.display = "block";
	}
})

$("#form_login").on("submit",function(e){
	e=e || window.event;
	var isTrue = brr.every(function(item){
		return item == true;
	})
	if(!isTrue){
		e.preventDefault();
		alert("注册失败");
	}else{
		$.ajax({
			method:"POST",
			url:"http://localhost/gulp-project-template/app/server/addRegister.php",
			data:{
				"user":$('div input:eq(0)').val(),
				"pwd":$('div input:eq(1)').val(),
				"email":$('div input:eq(3)').val(),
				"tel":$('div input:eq(4)').val()
			},
			dataType:"json",
			async:true,
			success:function(data){
				
			}
		});
		alert("注册成功");
	}
})
//})
