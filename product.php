<?php
	$name = $_GET['name'];
	$uclass = $_GET['uclass'];
	$mysql = mysql_connect("bdm260467157.my3w.com","bdm260467157","66832821");
	
	mysql_select_db("bdm260467157_db");
	mysql_query("set names utf8");
	
	$imgs = array();
	
	
	//获取大logo
	$sql = "SELECT * FROM teamobject WHERE class = '{$uclass}' AND logo = 'biglogo'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}
	
	
	//获取商品大图
	$sql = "SELECT * FROM teamobject WHERE name = '{$name}'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}
	
	
	
	
	
	
	

	$a = json_encode($imgs);
	
	
	echo $a;
	
	mysql_close();
?>