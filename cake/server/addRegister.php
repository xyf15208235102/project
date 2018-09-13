<?php
	header("Access-Control-Allow-Origin:*");
	$user=$_POST["user"];
	$pwd=$_POST["pwd"];
	$email=$_POST["email"];
	$tel=$_POST["tel"];
	mysql_connect("127.0.0.1","root","");
	mysql_select_db("test");
	mysql_query("set names 'utf8'");
	$sql="INSERT INTO register (user,pwd,email,tel) VALUES ('$user','$pwd','$email','$tel')";
	$result=mysql_query($sql);
	if ($result) {
		echo '{"code":1}';
	}else{
		echo '{"code":0}';
	}
	mysql_close();
?>