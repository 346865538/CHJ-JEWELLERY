<?php
	$name = $_GET['name'];
	$mysql = mysql_connect("bdm260467157.my3w.com","bdm260467157","66832821");
	
	mysql_select_db("bdm260467157_db");
	mysql_query("set names utf8");
	
	$imgs = array();
	
	
	//获取大logo
	$sql = "SELECT * FROM teamobject WHERE class = '{$name}' AND logo = 'biglogo'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}
	

	//获取小logo
	$sql = "SELECT * FROM teamobject WHERE class = '{$name}' AND logo = 'smalllogo'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}
	
	
	//获取所有小图
	$sql = "SELECT * FROM teamobject WHERE class = '{$name}' AND logo = 1";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}
	
	
	
	$a = json_encode($imgs);
	
	
	echo $a;
	
	mysql_close();
?>