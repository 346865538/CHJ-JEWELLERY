<?php
	$imgs = array();
	$name = $_GET['name'];
	
	$mysql = mysql_connect("bdm260467157.my3w.com","bdm260467157","66832821");
	
	mysql_select_db("bdm260467157_db");
	mysql_query("set names utf8");
	
	$a = 0;
	
	//  获取到class
	$sql = "SELECT class FROM media WHERE content = '{$name}'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		$a = $arr;
	}
	
	$sql = "SELECT * FROM media WHERE class = '{$a[0]}' AND type = 'title'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}

	$sql = "SELECT * FROM media WHERE class = '{$a[0]}' AND type = 'content'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}

	$sql = "SELECT * FROM media WHERE class = '{$a[0]}' AND type = 'time'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}

	$sql = "SELECT * FROM media WHERE class = '{$a[0]}' AND type = 'biglogo'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}
	
	$sql = "SELECT * FROM media WHERE class = '{$a[0]}' AND type = 'logo'";
	$result = mysql_query($sql);
	while($arr = mysql_fetch_row($result)){
		array_push($imgs,$arr);
	}


	$a = json_encode($imgs);
	echo $a;
	
	mysql_close();
?>