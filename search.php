<?php
	$searchname = $_GET['searchname'];
	$name = $_GET['name'];
	$name1 = $_GET['name2'];
	$mysql = mysql_connect("bdm260467157.my3w.com","bdm260467157","66832821");
	
	
	mysql_select_db("bdm260467157_db");
	mysql_query("set names utf8");
	
	if($searchname != ""){
		$sql = "SELECT * FROM teamobject WHERE name LIKE '%%{$searchname}%%'";
	}else if($searchname == ""){
		if($name1 && $name){
			$sql = "SELECT * FROM teamobject WHERE name LIKE '%%{$name1}%%{$name}%%'";
		}else{
			$sql = "SELECT * FROM teamobject WHERE logo = 1";
		}
	}
	
	$result = mysql_query($sql);
?>


<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>潮宏基珠宝官方网站-<?php echo $searchname ?></title>
		<link rel="stylesheet" href="src/css/details.css" />
		<link rel="stylesheet" type="text/css" href="src/css/leftnav.css"/>
		<link rel="stylesheet" type="text/css" href="src/css/footer.css"/>
	</head>
	<body>
		<!--顶部导航-->
		<nav class="topnav">
			<div class="container">
				<a href="index.html"><img src="src/img/index/logo.png" alt="" /></a>
				<ul class="rightNav">
					<li>
						<a href="hotPoint.html">
							<p class="cnText">热点</p>
							<p class="enText">WHAT'S HOT</p>
						</a>
					</li>
					<li>
						<a href="trends.html">
							<p class="cnText">潮流</p>
							<p class="enText">TRENDS</p>
						</a>
					</li>
					<li class="hoveron">
						<a href="collections.html">
							<p class="cnText">系列</p>
							<p class="enText">COLLECTIONS</p>
						</a>
					</li>
					<li>
						<a href="culture.html">
							<p class="cnText">传承</p>
							<p class="enText">CULTURE</p>
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<!--大图logo-->
		<div class="biglogo">
			<img src="src/img/details/searchphp.jpg" alt="" />
		</div>
		<div class="hoverbggggggggg"></div>
		<!--左导航-->
		<ul class="leftNav">
			<div class="runpoint">
				<img src="src/img/index/runpoint.png" alt="" />
			</div>
			<div class="hoverbg"></div>
			<li>
				<a>时尚
					<div class="leftNavHoverBox" style="width: 1100px;">
						<p>时尚系列</p>
						<p>为时尚的您提供最个性完美的表达</p>
						<div class="leftbtn btn leftbtn1"></div>
						<div class="rightbtn btn rightbtn1"></div>
						<div class="showimgbox" style="width: 1050px;">
							<ul class="ul1">
								<li><img src="src/img/140img/sglx.jpg" alt="" /><span>时光旅行</span></li>
								<li><img src="src/img/140img/myxj.jpg" alt="" /><span>梦游仙境</span></li>
								<li><img src="src/img/140img/zhzy.jpg" alt="" /><span>智慧之眼</span></li>
								<li><img src="src/img/140img/xwxl.jpg" alt="" /><span>旋舞系列</span></li>
								<li><img src="src/img/140img/ysxl.jpg" alt="" /><span>元素系列</span></li>
								<li><img src="src/img/140img/blg.jpg" alt="" /><span>布拉格系列</span></li>
								<li><img src="src/img/140img/sy.jpg" alt="" /><span>善缘系列</span></li>
								<li><img src="src/img/140img/ll.jpg" alt="" /><span>LOCK&LOVE系列</span></li>
								<li><img src="src/img/140img/wns.jpg" alt="" /><span>情迷威尼斯系列</span></li>
								<li><img src="src/img/140img/qy.jpg" alt="" /><span>清盈系列</span></li>
								<li><img src="src/img/140img/zxhy.jpg" alt="" /><span>仲夏花园系列</span></li>
								<li><img src="src/img/140img/xkl.jpg" alt="" /><span>星克拉系列</span></li>
								<li><img src="src/img/140img/ys.jpg" alt="" /><span>夜色系列</span></li>
								<li><img src="src/img/140img/hong.jpg" alt="" /><span>弘系列</span></li>
							</ul>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a>婚庆
					<div class="leftNavHoverBox">
						<p>婚庆系列</p>
						<p>以美钻的璀璨光芒，黄金的吉祥喜庆，见证您人生的重要时刻</p>
						<div class="showimgbox">
							<ul>
								<li><img src="src/img/140img/azlz.jpg" alt="" /><span>爱之礼赞系列</span></li>
								<li><img src="src/img/140img/xd.jpg" alt="" /><span>心蝶系列</span></li>
								<li><img src="src/img/140img/hsyx.jpg" alt="" /><span>皇室印象系列</span></li>
								<li><img src="src/img/140img/zscs.jpg" alt="" /><span>执手成说系列</span></li>
								<li><img src="src/img/140img/hqhj.jpg" alt="" /><span>婚庆黄金系列</span></li>
							</ul>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a>童趣
					<div class="leftNavHoverBox"  style="width: 1100px;">
						<p>童趣系列</p>
						<p>以丰富趣致的卡通形象，萌动您未泯的童心</p>
						<div class="leftbtn btn leftbtn2"></div>
						<div class="rightbtn btn rightbtn2"></div>
						<div class="showimgbox"  style="width: 1050px;">
							<ul class="ul2">
								<li><img src="src/img/140img/mlm.jpg" alt="" /><span>迪士尼玛丽猫系列</span></li>
								<li><img src="src/img/140img/me.jpg" alt="" /><span>咩儿系列</span></li>
								<li><img src="src/img/140img/dzh.jpg" alt="" /><span>大嘴猴系列</span></li>
								<li><img src="src/img/140img/dlam.jpg" alt="" /><span>哆啦A梦系列</span></li>
								<li><img src="src/img/140img/pony.jpg" alt="" /><span>PONY木马系列</span></li>
								<li><img src="src/img/140img/xm.jpg" alt="" /><span>熊猫系列</span></li>
								<li><img src="src/img/140img/smiley.jpg" alt="" /><span>SMILEY系列</span></li>
								<li><img src="src/img/140img/mywish.jpg" alt="" /><span>MY WISH系列</span></li>
							</ul>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a>高订
					<div class="leftNavHoverBox" style="width: 1100px;">
						<p>高订系列</p>
						<p>以高端设计演绎传统精粹与国际时尚</p>
						<div class="showimgbox"   style="width: 1050px;">
							<ul class="ul3">
								<li><img src="src/img/140img/gy.jpg" alt="" /><span>鼓韵系列</span></li>
								<li><img src="src/img/140img/md.jpg" alt="" /><span>牡丹系列</span></li>
								<li><img src="src/img/140img/cb.jpg" alt="" /><span>彩宝系列</span></li>
								<li><img src="src/img/140img/fy.jpg" alt="" /><span>凤影系列</span></li>
								<li><img src="src/img/140img/qx.jpg" alt="" /><span>群镶系列</span></li>
								<li><img src="src/img/140img/zz.jpg" alt="" /><span>珍珠系列</span></li>
								<li><img src="src/img/140img/nzjl.jpg" alt="" /><span>捻指金兰系列</span></li>
							</ul>
						</div>
					</div>
				</a>
			</li>
			<div class="kong"></div>
			<li>
				<a>类别
					<div class="leftNavHoverBox classleibie">
						<ul class="class1">
							<h1>类别</h1>
							<li>戒指</li>
							<li>项链</li>
							<li>吊坠</li>
							<li>耳钉</li>
							<li>耳坠</li>
							<li>手链</li>
							<li>手镯</li>
							<li>摆件</li>
							<li>礼品</li>
						</ul>
						<ul class="class2">
							<h1>材质</h1>
							<li>钻石</li>
							<li>黄金</li>
							<li>K金</li>
							<li>铂金</li>
							<li>珍珠</li>
							<li>彩宝</li>
							<li>素金</li>
						</ul>
						<div class="imgshow">
							<h1 style="height: 35px;">&nbsp;</h1>
							<img src="src/img/140img/dlam.jpg" alt="" />
						</div>
						<div class="bottomborder"></div>
					</div>
				</a>
			</li>
			<li>
				<a>送TA
					<div class="leftNavHoverBox">
						<p>送TA</p>
						<p>为您的心意提供最适合的表达</p>
						<div class="showimgbox">
							<ul>
								<li class="ulsongta1"><img src="src/img/140img/zshy.jpg" alt="" /><span>最受欢迎</span></li>
								<li class="ulsongta2"><img src="src/img/140img/nqmy.jpg" alt="" /><span>浓情蜜意</span></li>
								<li class="ulsongta2"><img src="src/img/140img/txgm.jpg" alt="" /><span>贴心闺蜜</span></li>
								<li class="ulsongta2"><img src="src/img/140img/wage.jpg" alt="" /><span>为爱感恩</span></li>
								<li class="ulsongta2"><img src="src/img/140img/qscz.jpg" alt="" /><span>庆生成长</span></li>
							</ul>
						</div>
					</div>
				</a>
			</li>
			<div class="kong"></div>
			<li>
				<a>品牌
					<div class="leftNavHoverBox" style="width: 1100px;">
						<p>品牌</p>
						<p>一起探索潮宏基独特的品牌魅力</p>
						<div class="showimgbox" style="width: 1050px;">
							<ul class="ul4">
								<li><img src="src/img/140img/mtzx.jpg" alt="" /><span>媒体中心</span></li>
								<li><img src="src/img/140img/mxzs.jpg" alt="" /><span>明星臻赏</span></li>
								<li><img src="src/img/140img/sjjz.jpg" alt="" /><span>设计佳作</span></li>
								<li><img src="src/img/140img/syzl.jpg" alt="" /><span>闪耀之旅</span></li>
								<li><img src="src/img/140img/shzr.jpg" alt="" /><span>社会责任</span></li>
								<li><img src="src/img/140img/gp.jpg" alt="" /><span>公平在身边</span></li>
							</ul>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a>联系我们
					<div class="leftNavHoverBox">
						<p>联系我们</p>
						<p>我们热诚的欢迎您们提出疑问和进行信息反馈</p>
						<div class="showimgbox">
							<ul class="ul5">
								<li><img src="src/img/140img/gdzd.jpg" alt="" /><span>各地专店</span></li>
								<li><img src="src/img/140img/swrx.jpg" alt="" /><span>商务热线</span></li>
								<li><img src="src/img/140img/tzz.jpg" alt="" /><span>投资者专区</span></li>
							</ul>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a>公平在身边
					<div class="leftNavHoverBox">
						<p>公平在身边</p>
						<p>投资者保护专项活动</p>
						<div class="showimgbox">
							<ul class="ul6">
								<li><img src="src/img/140img/gp.jpg" alt="" /><span>公平在身边</span></li>
							</ul>
						</div>
					</div>
				</a>
			</li>
		</ul>
		<!--搜索-->
		<div class="searchbox">
			<div class="search">
				<form action="search.php" method="get">
					<input type="text" placeholder="搜索" name="searchname" />
					<button type="submit"></button>
				</form>
			</div>
		</div>
		<!--正文-->
		<div class="wrap" style="min-height: 564px;">
			<?php
				while($arr = mysql_fetch_row($result)){
			?>
				
				<div class="imgs">
					<a data-name="<?php echo $arr[1] ?>" data-class="<?php echo $arr[6] ?>";>
						<img src="<?php echo $arr[4] ?>" alt="" style="width: 230px; height: 230px;" />
						<div>
							<img src="src/img/details/imgshoverbg.png" alt="" />
							<p class="imgsname"><?php echo $arr[1] ?></p>
							<hr />
							<p class="imgsid"><?php echo $arr[2] ?></p>
						</div>
					</a>
				</div>
			<?php
				}
				mysql_close();
			?>
		</div>
		<!--底部footer-->
		<footer>
			<div class="footernav">
				<div>
					<h1>潮宏基 产品系列全指南</h1>
					<p>即刻定制属于您的梦幻礼品，实现您的梦想！</p>
					<ul class="shangpins">
						<li><a href="###">时光旅行</a></li>
						<li><a href="###">梦游仙境</a></li>
						<li><a href="###">智慧之眼</a></li>
						<li><a href="###">旋舞系列系列</a></li>
						<li><a href="###">元素系列系列</a></li>
						<li><a href="###">布拉格系列系列</a></li>
						<li><a href="###">善缘系列系列</a></li>
						<li><a href="###">LOCK&LOVE系列系列</a></li>
						<li><a href="###">情迷威尼斯系列系列</a></li>
						<li><a href="###">清盈系列系列</a></li>
						<li><a href="###">仲夏花园系列系列</a></li>
						<li><a href="###">星克拉系列系列</a></li>
						<li><a href="###">夜色系列系列</a></li>
						<li><a href="###">弘系列系列</a></li>
					</ul>
					<ul class="shangpins">
						<li><a href="###">爱之礼赞系列</a></li>
						<li><a href="###">心蝶系列系列</a></li>
						<li><a href="###">皇室印象系列系列</a></li>
						<li><a href="###">执手成说系列系列</a></li>
						<li><a href="###">婚庆黄金系列系列</a></li>
						<li><a href="###">迪士尼玛丽猫系列系列</a></li>
						<li><a href="###">咩儿系列系列</a></li>
						<li><a href="###">大嘴猴系列系列</a></li>
						<li><a href="###">哆啦A梦系列系列</a></li>
						<li><a href="###">Pony木马系列系列</a></li>
						<li><a href="###">熊猫系列系列</a></li>
						<li><a href="###">Smiley系列系列</a></li>
						<li><a href="###">My Wish系列系列</a></li>
						<li><a href="###">鼓韵系列系列</a></li>
						<li><a href="###">牡丹系列系列</a></li>
						<li><a href="###">彩宝系列系列</a></li>
						<li><a href="###">凤影系列系列</a></li>
						<li><a href="###">群镶系列系列</a></li>
						<li><a href="###">珍珠系列系列</a></li>
						<li><a href="###">捻指金兰系列系列</a></li>
					</ul>
				</div>
				<div style="float: left;width: 150px;">
					<ul class="class1">
						<div>类别</div>
						<li><a href="###">戒指</a></li>
						<li><a href="###">项链</a></li>
						<li><a href="###">吊坠</a></li>
						<li><a href="###">耳钉</a></li>
						<li><a href="###">耳坠</a></li>
						<li><a href="###">手链</a></li>
						<li><a href="###">手镯</a></li>
						<li><a href="###">摆件</a></li>
						<li><a href="###">礼品</a></li>
						<li></li>
					</ul>
					<ul class="class2">
						<div>材质</div>
						<li><a href="###">钻石</a></li>
						<li><a href="###">黄金</a></li>
						<li><a href="###">K金</a></li>
						<li><a href="###">铂金</a></li>
						<li><a href="###">珍珠</a></li>
						<li><a href="###">彩宝</a></li>
						<li><a href="###">素金</a></li>
					</ul>
				</div>
				<div style="float: left;width: 150px;">
					<ul>
						<div>送TA</div>
						<li class="ulsongta1"><a href="###">最受欢迎</a></li>
						<li class="ulsongta2"><a href="###">浓情蜜意</a></li>
						<li class="ulsongta2"><a href="###">贴心闺蜜</a></li>
						<li class="ulsongta2"><a href="###">为爱感恩</a></li>
						<li class="ulsongta2"><a href="###">庆生成长</a></li>
						<li></li>
					</ul>
					<ul class="lianxi">
						<div>联系我们</div>
						<li><a href="http://vipcw33.top/teamobject/touchme.html?name=各地专店">各地专店</a></li>
						<li><a href="http://vipcw33.top/teamobject/touchme.html?name=商务热线">商务热线</a></li>
						<li><a href="http://irm.p5w.net/ssgs/S002345/?code=002345">投资者专区</a></li>
					</ul>
				</div>
				<ul style="float: left;" class="ul4">
					<div>潮宏基品牌</div>
					<li><a href="###">媒体中心</a></li>
					<li><a href="###">明星臻赏</a></li>
					<li><a href="###">设计佳作</a></li>
					<li><a href="###">闪耀之旅</a></li>
					<li><a href="###">社会责任</a></li>
					<li><a href="###">公平在身边</a></li>
					<li><a href="http://www.chjchina.com/blog/">潮宏基博客</a></li>
				</ul>
				<div class="company">
					<a href="###"><img src="src/img/trends/companylogo.png" alt="" /></a>
					<span> 广东潮宏基实业股份有限公司</span>
				</div>
			</div>
		</footer>
	</body>
	<script type="text/javascript" src="src/js/jquery-3.1.1.js"></script>
	<script type="text/javascript" src="src/js/leftnav.js"></script>
	<script type="text/javascript" src="src/js/details.js"></script>
	<script type="text/javascript">
		window.onload = function(){
			console.log($('.wrap .imgs'))
			$('.wrap .imgs').on('click',function(){
				var zzz = $(this).children().children().children()[1].innerText;
				var uclass = this.children[0].getAttribute("data-class");
				window.location.href = "http://vipcw33.top/teamobject/product.html?name="+zzz+"&uclass="+uclass;
			})
		}
	</script>
</html>