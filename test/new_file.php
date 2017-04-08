<?php
	$name = "梦游仙境";
	
	$mysql = mysql_connect("bdm260467157.my3w.com","bdm260467157","66832821");
	
	mysql_select_db("bdm260467157_db");
	mysql_query("set names utf8");
	
	$imgs = array();
	
	
	//获取大logo
	$sql = "SELECT * FROM teamobject class = '梦游仙境'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}
	
	
	$a = json_encode($imgs);
	
	echo $a;
	
	mysql_close();
?>