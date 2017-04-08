<?php
	$mysql = mysql_connect("bdm260467157.my3w.com","bdm260467157","66832821");
	
	mysql_select_db("bdm260467157_db");
	mysql_query("set names utf8");
	
	$imgs = array();
	
	$sql = "SELECT province FROM map";
	$result = mysql_query($sql);
	
	// 初始获取所有城市
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}
	
	
	
	$sql = "SELECT * FROM map";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}
	
	
	
	
	$a = json_encode($imgs);
	
	
	echo $a;
	
	
	mysql_close();
?>