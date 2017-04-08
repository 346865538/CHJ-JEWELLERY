<?php
	$name = $_GET['name'];
	$mysql = mysql_connect("bdm260467157.my3w.com","bdm260467157","66832821");
	
	mysql_select_db("bdm260467157_db");
	mysql_query("set names utf8");
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>潮宏基珠宝官方网站-时光旅行</title>
		<link rel="stylesheet" href="src/css/details.css" />
	</head>
	<body>
		<!--顶部导航-->
		<?php include "topnav.html";?>
		<!--大图logo-->
		<div class="biglogo">
			
			<?php
				$sql = "SELECT * FROM teamobject WHERE class = '{$name}' AND logo = 'biglogo'";
				$result = mysql_query($sql);
				while($arr = mysql_fetch_row($result)){
			?>
				<img src="<?php echo $arr[4]; ?>" alt="" />
			<?php
				}
			?>
			
		</div>
		<!--左侧导航-->
		<?php include "leftnav.html";?>
		<!--搜索-->
		<?php include "search.html";?>
		<!--正文-->
		<div class="wrap">
			<div class="wrapNav">您当前位置：<a href="">首页</a> > <a href="">系列</a> > <a href="">时尚</a> > <a href="">时光旅行</a></div>
			<div class="smalllogo">
				
				<?php
					$sql = "SELECT * FROM teamobject WHERE class = '{$name}' AND logo = 'smalllogo'";
					$result = mysql_query($sql);
					while($arr = mysql_fetch_row($result)){
				?>
					<img src="<?php echo $arr[4]; ?>" alt="" />
				<?php
					}
				?>
				
			</div>
			
			<?php
				$sql = "SELECT * FROM teamobject WHERE class = '{$name}' AND logo = 1";
				$result = mysql_query($sql);
				while($arr = mysql_fetch_row($result)){
			?>
				<div class="imgs">
					<a href="">
						<img src="<?php echo $arr[4]; ?>" alt="" />
						<div>
							<img src="src/img/details/imgshoverbg.png" alt="" />
							<p class="imgsname"><?php echo $arr[1]; ?></p>
							<hr />
							<p class="imgsid"><?php echo $arr[2]; ?></p>
						</div>
					</a>
				</div>
			<?php
				}
				mysql_close();
			?>

		</div>
		<!--底部-->
		<?php include "footer.html";?>
	</body>
	<script type="text/javascript" src="src/js/jquery-3.1.1.js"></script>
	<script type="text/javascript" src="src/js/details.js"></script>
</html>
