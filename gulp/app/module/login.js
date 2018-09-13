// $(function(){
	console.log(1);
	$("#form_login").on("submit",function(e){
	// alert(2);
	e=e || window.event;
	console.log($("#form_login .user").val());
	$.ajax({
		method:"get",
		url:"http://localhost/gulp-project-template/app/server/login.php",
		data:{
			"user":$('div input:eq(0)').val(),
			"pwd":$('div input:eq(1)').val()
		},
		dataType:"json",//JSON对象
		async:true,
		success:function(data){
			console.log(data);
			if (data.code) {
				alert("登录成功");
				window.location.href="../index.html";
			}else{
				alert("用户名或密码错误");
			}
		}
	});
	e.preventDefault();
})

// })
