<?php
	header("Access-Control-Allow-Origin:*");
	$id=$_GET["id"];
	// echo $username;
	mysql_connect("127.0.0.1","root","");
	mysql_select_db("test");
	mysql_query("set names 'utf8'");
	$sql="SELECT * FROM  hot WHERE id='$id'";
	$result=mysql_query($sql);
	$brr=array();
	while ($arr=mysql_fetch_array($result)) {
		# code...
		array_push($brr, $arr);
	}

	echo json_encode($brr);//符合JSON格式的字符串
	mysql_close();
?>