$(function() {
// 设置一开始窗口的位置
// **************************定义需要的变量**********************
	var h_leftP = 0;// 轮播的偏移量
	var a = $(".h_caro_b").length;	// 获取轮播图的个数
	var moverWidth = 22.56;
	var fixWidth = false;
	var pageIndex = 0;
	var windowWid = window.innerWidth;
	onloadWidth();
// ***************************监听窗口的宽度*****************************
$(window).resize(function(){
	windowWid = window.innerWidth;
	h_leftP =0;
	onloadWidth();
});

// ****************判断屏幕宽度的函数*************
function onloadWidth() {
	if(windowWid >= 1116) {
		moverWidth = 22.56;
		fixWidth = false;
		h_leftP = pageIndex * moverWidth;
		$("#h_caro_con").css({"marginLeft": ""+pageIndex * moverWidth+"vw"});
	}if(windowWid >= 820 && windowWid <= 1116 ) {
  		moverWidth =  30.56;
  		fixWidth = false;
  		h_leftP = pageIndex * moverWidth;
  		$("#h_caro_con").css({"marginLeft": ""+pageIndex * moverWidth+"vw"});
 	}else if(windowWid >= 738 && windowWid < 820) {
  		moverWidth = 45.56;
  		fixWidth = false;
  		h_leftP = pageIndex * moverWidth;
  		$("#h_caro_con").css({"marginLeft": ""+pageIndex * moverWidth+"vw"});
  	}else if(windowWid < 738) {
  		moverWidth = 333.06;
  		fixWidth = true;
  		h_leftP = pageIndex * moverWidth;
  		$("#h_caro_con").css({"marginLeft": ""+pageIndex * moverWidth+"px"});
  	}
}
// ***************************轮播图*****************************
	// 左按钮
	$("#h_caro_leftBtn").on("click", function() {
		if(h_leftP >= 0) {
			$("#h_caro_con").css({"transition":"0s"});
			h_leftP = -moverWidth*(a-4);
			pageIndex = -(a-4);
		}else {
			$("#h_caro_con").css({"transition":"all 1s"});
			h_leftP += moverWidth;
			pageIndex += 1;
		}
		if(fixWidth == true) {
			$("#h_caro_con").css({"marginLeft": ""+h_leftP+"px"});
			return;
		}
		console.log(pageIndex);
		$("#h_caro_con").css({"marginLeft": ""+h_leftP+"vw"});
	});
	// 右按钮
	$("#h_caro_rightBtn").on("click", function() {
		if(h_leftP <= -moverWidth*(a-5)) {
			console.log("2222");
			$("#h_caro_con").css({"transition":"0s"});
			h_leftP = 0;
			pageIndex = 0;
		}else {
			$("#h_caro_con").css({"transition":"all 1s"});
			h_leftP -= moverWidth;
			pageIndex -= 1;
		}
		if(fixWidth == true) {
			$("#h_caro_con").css({"marginLeft": ""+h_leftP+"px"});
			return;
		}
		console.log(pageIndex);
		console.log(h_leftP);
		$("#h_caro_con").css({"marginLeft": ""+h_leftP+"vw"});
	})


// ***************************42张轮播图的点击事件*****************************
// 存放图片文字的数组
var fourMsArr = [
["src/img/hotPoint/42/r_ms1_1.jpg","3.8潮搭饰俪人，潮宏基珠宝百搭配饰","女人是否时尚首先要看她的衣服，是否精致要看她鞋子和妆容发型，而观察女人品味的最高境界就要看她佩戴的首饰。选一套可以配上你的任何造型，陪你出席任何场合百搭配饰。","src/img/hotPoint/42/r_ms1_2.jpg","Mix&Chic潮搭耳饰系列","以点、线、面三种元素作为设计基础，表达简约随性的轻时尚概念。Mix&Chic潮搭系列包含十三款独具个性的耳饰，让你随心组合、自由搭配，帮你变成百变女神。","src/img/hotPoint/42/r_ms1_3.jpg"],
// 第2张
["src/img/hotPoint/42/r_ms2_1.jpg","潮宏基Fall in love 爱上甜秘密 ","在Valentine‘s Day这样一个浪漫温馨的节日里，你为TA准备好一份甜秘大礼了吗？记住啦，让爱情永保新鲜的最佳方法，就是为TA制造一段甜秘记忆！","src/img/hotPoint/42/r_ms2_2.jpg","心蝶系列","潮宏基心蝶系列，寓意爱情的忠贞不渝，甜蜜情人节，心蝶系列将幻化成你们之间的甜秘爱情信物，编织一段属于你们的浪漫爱情故事。","src/img/hotPoint/42/r_ms2_3.jpg"],
// 第3张
["src/img/hotPoint/42/r_ms3_1.jpg","潮宏基恭贺新春 鸡年纳福  ","新年到，祝福来报到！鸡年好运挡不住，祝您新的一年身体健康快乐多，合家团圆幸福多，一切顺利福气多！","src/img/hotPoint/42/r_ms3_2.jpg","愿望够多财够IN","潮宏基哆啦A梦系列新春新品闪耀登场，愿望使者哆啦A梦化身“招财猫”，陪你一起愿望多多，招财纳福，够潮够IN，好运到底！","src/img/hotPoint/42/r_ms3_3.jpg"],
// 第4张
["src/img/hotPoint/42/r_ms4_1.jpg","潮宏基Forever Do爱无止境 ","爱情要么不开始，要么一辈子。Forever Do爱无止境，如同爱人间珍藏爱情甜蜜时光的珠宝，都是生命中，永恒闪耀的光芒。为你，我一辈子都愿意。","src/img/hotPoint/42/r_ms4_2.jpg","拥爱","潮宏基拥爱系列，让爱紧紧簇拥于你。此刻，拥抱爱情，拥抱爱人，直到永恒。","src/img/hotPoint/42/r_ms4_3.jpg"],
// 第5张
["src/img/hotPoint/42/r_ms5_1.jpg","潮宏基X’MAS颂","小时候每个平安夜，都期待圣诞老人把惊喜礼物送到自己面前。儿时的天真幻想向来美好，这份天真也值得被守护。","src/img/hotPoint/42/r_ms5_2.jpg","爱的礼赞","如今，每每收到爱的圣诞礼，仍然会感到无比幸福与感恩。这个圣诞，潮宏基将化身圣诞老人来到你身边，与你一起欢唱X’MAS颂爱的礼赞！","src/img/hotPoint/42/r_ms5_3.jpg"],
// 第6张
["src/img/hotPoint/42/r_ms6_1.jpg","潮宏基Thanks For Giving礼记恩遇","付出，是因为心甘情愿。感恩节，给所有无声的付出，一个被表白的理由。","src/img/hotPoint/42/r_ms6_2.jpg","智慧之眼","或偶遇，或朝夕相处，是谁让你拥有追求梦想的力量？告诉她，认识你，就是超越现实的生命奇遇！","src/img/hotPoint/42/r_ms6_3.jpg"],
// 第7张
["src/img/hotPoint/42/r_ms7_1.jpg","潮宏基携手《爵迹》带你开启超现实世界","这个国庆，潮宏基珠宝携手郭敬明导演电影《爵迹》，见证众星云集，星光璀璨。以智慧之眼，带你开启超现实世界。","src/img/hotPoint/42/r_ms7_2.jpg","智慧之眼见证燃魂一战","或偶遇，或朝夕相处，是谁让你拥有追求梦想的力量？告诉她，认识你，就是超越现实的生命奇遇！","src/img/hotPoint/42/r_ms7_3.jpg"],
// 第8张
["src/img/hotPoint/42/r_ms8_1.jpg","花好月圆","中秋佳节，花好月圆，良辰美景愿与家人相伴。","src/img/hotPoint/42/r_ms8_2.jpg","潮宏基熊猫新品喜萌上市","值此中秋佳节，潮宏基熊猫系列新品喜萌上市。愿国宝熊猫宝宝予您幸福美满，共度中秋！","src/img/hotPoint/42/r_ms8_3.jpg"],
// 第9张
["src/img/hotPoint/42/r_ms9_1.jpg","大嘴猴陪你酷玩里约奥运","2016里约奥运会于盛夏来袭，潮宏基新推出Paul Frank大嘴猴奥运系列新品，让大嘴猴陪你酷玩里约奥运。","src/img/hotPoint/42/r_ms9_2.jpg","为你为中国加油助威！","每一位挥洒热血的运动员，都将获得属于他们的荣耀，而你，也能在精彩的比赛中，获得生活前进和拼搏的勇气！潮宏基大嘴猴奥运系列为你和中国健儿们加油打气！","src/img/hotPoint/42/r_ms9_3.jpg"],
// 第10张
["src/img/hotPoint/42/r_ms10_1.jpg","潮宏基77情相依 爱栖息","再浪漫的誓言，都比不上细水长流的平凡日子里，他不经意间为你做的一件浪漫小事，为你说的一句蜜语甜言。","src/img/hotPoint/42/r_ms10_2.jpg","七夕甜蜜祝福","浪漫七夕，潮宏基在此祝愿天下有情人 “情相依 爱栖息”，遇见并相守属于彼此的幸福。","src/img/hotPoint/42/r_ms10_3.jpg"],
// 第11张
["src/img/hotPoint/42/r_ms11_1.jpg","彩金新品【时光旅行】系列获迪士尼及爱丽丝电影指定珠宝授权 ","时光旅行系列通过对迪士尼梦幻大电影《爱丽丝梦游仙境2》中时间元素的解读与创作，以超现实主义的表达，勾勒出在时间海洋里穿行的意象，给人以时空扭转飞逝的意识触动。","src/img/hotPoint/42/r_ms11_2.jpg","发现真我的时光之旅","在人生的漫漫长路中，我们如同一位旅者，而时光旅行系列旨在陪伴每一位人生的旅行者打破时间的禁锢，在现实与梦境交织的世界里，如同爱丽丝一般常怀勇气，掌控内心，展开发现真我的时光之旅。","src/img/hotPoint/42/r_ms11_3.jpg"],
// 第12张
["src/img/hotPoint/42/r_ms12_1.jpg","彩金新品【梦游仙境】系列 获迪士尼及爱丽丝电影指定珠宝授权","2016里约奥运会于盛夏来袭，潮宏基新推出Paul Frank大嘴猴奥运系列新品，让大嘴猴陪你酷玩里约奥运。","src/img/hotPoint/42/r_ms12_2.jpg","为你为中国加油助威！","每一位挥洒热血的运动员，都将获得属于他们的荣耀，而你，也能在精彩的比赛中，获得生活前进和拼搏的勇气！潮宏基大嘴猴奥运系列为你和中国健儿们加油打气！","src/img/hotPoint/42/r_ms12_3.jpg"],
// 第13张
["src/img/hotPoint/42/r_ms13_1.jpg","MAMA I LOVE U","5月是属于妈妈的节日！每位妈妈曾经也是一位年轻貌美的女孩，随着生活角色转变，她们把爱和时间都花在照顾家人身上，而却很少顾及打扮自己，在此CHJ想对所有的妈妈说一声：MAMA I LOVE U","src/img/hotPoint/42/r_ms13_2.jpg","妈妈的美 闪耀如初","女人天生爱美丽，谁说妈妈就没有爱之美心？趁母亲节，送辛勤付出的妈妈一款心仪首饰，圆她们的美丽心愿，留住美丽，让她的美，永远闪耀如初。","src/img/hotPoint/42/r_ms13_3.jpg"],
// 第14张
["src/img/hotPoint/42/r_ms14_1.jpg","Shining Label 2016/17彩金珠宝潮流趋势 ","近日，中国时尚彩金珠宝领潮品牌潮宏基珠宝正式发布核心为“超现实主义”的2016/17彩金珠宝潮流趋势。该趋势由潮宏基珠宝联合腾讯时尚，以及全球范围内多位珠宝、时尚、艺术领域意见领袖共同发布。","src/img/hotPoint/42/r_ms14_2.jpg","梦游仙境","今季彩金新品以“梦游仙境”为主题诠释奇幻怪诞的超现实主义风格。梦中总可以自由幻想，超越空间时间，获取无限灵感。现在，就让潮宏基与你，在这场“梦游仙境”中，带着“智慧之眼”来一场“时光旅行”吧！","src/img/hotPoint/42/r_ms14_3.jpg"],
// 第15张
["src/img/hotPoint/42/r_ms15_1.jpg","潮宏基迪士尼玛丽猫系列新品上市","潮宏基携手风靡全球的卡通王国迪士尼，带来全新的授权珠宝系列。以迪士尼经典动画电影《猫儿历险记》中的卡通明星Marie为设计原型的玛丽猫系列率先登场。","src/img/hotPoint/42/r_ms15_2.jpg","萌爱新宠","全新玛丽猫系列结合精湛工艺与生动活泼的造型，令每位拥有她的女性，都能感受到由心散发的高贵气质和极致宠爱。诚邀你一同来到迪士尼童话王国，回归童真，与Marie一起绽放优雅。","src/img/hotPoint/42/r_ms15_3.jpg"],
// 第16张
["src/img/hotPoint/42/r_ms16_1.jpg","3.8女神节","不仅是今天，每一天你都给世间带来美丽的风景，愉悦的心情，以及温暖的爱。","src/img/hotPoint/42/r_ms16_2.jpg","智美时光，饰我精彩","你的付出太多太多，所以在这女神专属节日里，请以一款心仪的首饰犒赏自己，铭记这一刻的智美时光，珍惜每一刻的精彩幸福。","src/img/hotPoint/42/r_ms16_3.jpg"],
// 第17张
["src/img/hotPoint/42/r_ms17_1.jpg"," 喜迎新春 金猴送福","金猴闹新春，祝您新一年猴运连连，猴事成双，像齐天大圣一样聪明活泼”猴塞雷”！","src/img/hotPoint/42/r_ms17_2.jpg","梦游仙境","潮宏基大嘴猴齐天大圣系列猴年限定特供，带领美国酷帅范儿的Paul Frank大嘴猴，化身中国神话《西游记》中的“齐天大圣”，与你一同大闹新春，成为最令人瞩目的Super Hero！","src/img/hotPoint/42/r_ms17_3.jpg"],
// 第18张
["src/img/hotPoint/42/r_ms18_1.jpg","潮宏基珠宝 开启20周年庆闪耀之旅 ","2016，潮宏基迎来了生命中最青春洋溢的20岁！ 20年，在探索与创新之间，我们经历了时代的巨变，却依然保持中国彩金珠宝领潮者的风范。20周年誌庆，CHJ全心感恩，我们隆重推出2亿红包礼券大派送，赶紧关注潮宏基珠宝微信公众号，期待与您一同开启闪耀之旅！","src/img/hotPoint/42/r_ms18_2.jpg"],
// 第19张
["src/img/hotPoint/42/r_ms19_1.jpg","CHJ PERFECT X’MAS","浓浓圣诞气息蔓延城市每个角落，在这充满甜蜜的日子，送上传达爱意的珠宝礼盒，为你我的浪漫爱情见证。","src/img/hotPoint/42/r_ms19_2.jpg","有你圣诞更完美","CHJ诚意献上甜蜜珠宝礼单，有你，圣诞更完美，感谢新一年依然有你的陪伴。","src/img/hotPoint/42/r_ms19_3.jpg"],
// 第20张
["src/img/hotPoint/42/r_ms20_1.jpg"," 弘系列轻禅雅品新品上市","“清逸起于浮世，纷扰止于内心”。轻禅是一种生活态度，是古典生活方式的回归，让“禅”走进生活，即是轻禅的初衷。","src/img/hotPoint/42/r_ms20_2.jpg","为心觅一份清逸","佛教文化系列——弘系列，在轻禅时尚之中，尽显儒雅品味与文化底蕴，每一款禅品，皆寄予了祥和安康的期盼，愿有缘佩戴者一生平安，觅得一处清心与寄托，一同欣赏人生最美的画境。","src/img/hotPoint/42/r_ms20_3.jpg"],
// 第21张
["src/img/hotPoint/42/r_ms21_1.jpg"," MARRY ME   幸福从此开启","近日，中国时尚彩金珠宝领潮品牌潮宏基珠宝正式发布核心为“超现实主义”的2016/17彩金珠宝潮流趋势。该趋势由潮宏基珠宝联合腾讯时尚，以及全球范围内多位珠宝、时尚、艺术领域意见领袖共同发布。","src/img/hotPoint/42/r_ms21_2.jpg","梦游仙境","今季彩金新品以“梦游仙境”为主题诠释奇幻怪诞的超现实主义风格。梦中总可以自由幻想，超越空间时间，获取无限灵感。现在，就让潮宏基与你，在这场“梦游仙境”中，带着“智慧之眼”来一场“时光旅行”吧！","src/img/hotPoint/42/r_ms21_3.jpg"],
// 第22张
["src/img/hotPoint/42/r_ms22_1.jpg","月圆满 爱传承","值此中秋佳节，花好月圆，你我心心相连，愿以明月为证，与你约定终生。","src/img/hotPoint/42/r_ms22_2.jpg","姻爱闪耀","【潮宏基婚庆九宝系列】结合中式婚庆习俗中送嫁或迎娶的礼仪，从传统文化精髓中提炼出九个最具代表性的吉祥物件，传达“长长久久”之美好寓意。在明月的见证下，定下我们永恒的婚约，约定长长久久，永不分离。","src/img/hotPoint/42/r_ms22_3.jpg"],
// 第23张
["src/img/hotPoint/42/r_ms23_1.jpg","潮流新品 元素系列 解密极简图形的神秘力量","极简主义是时尚演进的一个重要方向，人们开始追求简洁纤细的珠宝。在2015年极简主义和几何图形继续热门的趋势下，潮宏基以高度抽象的线条和形状，打造出彩金潮流新品元素系列。","src/img/hotPoint/42/r_ms23_2.jpg","科技几何与自然的碰撞","在古希腊，人们认为世界万物由“地、风、水、火”四大元素组成，元素系列运用富含科技感的几何图形诠释这些自然现象，并赋予了最简单的形象以最深刻的内涵，为女性带来足以提升自我的强大力量。","src/img/hotPoint/42/r_ms23_3.jpg"],
// 第24张
["src/img/hotPoint/42/r_ms24_1.jpg","潮宏基“爱我7.7”与您共度浪漫七夕","牛郎织女书写跨越银河的爱恋，异于西方爱情的热烈奔放，却带着中式爱情含蓄诚挚的印记。","src/img/hotPoint/42/r_ms24_2.jpg","“爱我7.7”","在这浪漫的节日里充满甜蜜期待，潮宏基臻选幸福礼单，与您共同见证十指相扣间的亲密，犹如夜空中的繁星一般，璀璨而永恒。","src/img/hotPoint/42/r_ms24_3.jpg"],
// 第25张
["src/img/hotPoint/42/r_ms25_1.jpg","潮宏基SmileyWorld旅行家系列快乐登陆","2015年， SmileyWorld旅行家系列全新上市，以“Express Yourself”的快乐口号，带领大家穿越古今中外，从经典地标到传统服饰，从东方国度到西方世界。","src/img/hotPoint/42/r_ms25_2.jpg","Express Yourself","不用担心环游世界时出现语言障碍，因为微笑就是世界的通用语言。SmileyWorld旅行家系列快乐登陆，世界那么大，戴我去看看~！","src/img/hotPoint/42/r_ms25_3.jpg"],
// 第26张
["src/img/hotPoint/42/r_ms26_1.jpg","潮流新品 旋舞系列高级定制致敬优雅","今年时装周上，“舞动的裙摆”成为各大秀场最吸引眼球的时尚新宠，而高级定制珠宝与时装的精神一脉相承，都是对工艺和优雅的颂扬，CHJ感知这份期待，以旋转的裙摆打造彩金潮流新品——旋舞系列，用珠宝致敬高级定制精神的优雅精致。","src/img/hotPoint/42/r_ms26_2.jpg","贴近女性心灵的舞动","设计师章继元以裙摆的律动作为该系列的灵感来源，采用华丽的蕾丝镂空设计及独特的渐变珐琅工艺对旋舞系列加以瑰丽诠释。轻盈的姿态，跃动的光影源自内心热情的驱动，绽放清新的自然之美。","src/img/hotPoint/42/r_ms26_3.jpg"],
// 第27张
["src/img/hotPoint/42/r_ms27_1.jpg","潮宏基哆啦A梦系列哆啦A梦新品电影限量专款喜迎六一","首部哆啦A梦3D电影《哆啦A梦：伴我同行》全球热映，你是否想和哆啦A梦一起重温童年的美好时光？","src/img/hotPoint/42/r_ms27_2.jpg","伴我同行","潮宏基为你带来哆啦A梦3D电影限量专款，萌动趣稚的竹蜻蜓款、桃心款及奔跑款，伴你飞跃童年时光，圆你童真梦想！这个六一，让我们成为幸运的大雄，与挚爱的哆啦A梦一起玩耍！ ","src/img/hotPoint/42/r_ms27_3.jpg"],
// 第28张
["src/img/hotPoint/42/r_ms28_1.jpg","潮流新品 布拉格系列尽显哥特魅影、光之影画的美学精髓","“复古风”是最近几年的时尚大热，古为今用的“新古典主义”占据了国际一线时尚品牌的重要位置。潮宏基珠宝（CHJ JEWELLERY）继2014成功推出以现代巴洛克风格的“SanMarco圣马可”系列后，将于2015年推出另一新古典主义时尚系列“布拉格”系列。","src/img/hotPoint/42/r_ms28_2.png","光与影的魅力使者","化繁为简，神秘犹存的“布拉格”系列，以哥特建筑为元素，镂空光影，演绎黑与白，明与暗，或优雅或活泼，或庄重或成熟，灵动精湛的工艺呈现潮宏基时尚“金”典。","src/img/hotPoint/42/r_ms28_2.png"],
// 第29张
["src/img/hotPoint/42/r_ms29_1.jpg","【潮宏基珍情·Akoya系列】母亲节温情献礼，只为爱而优选","女人的基因里天生就藏着对惊喜的喜爱，对你爱意不减的妈妈也一样。虽然嘴上说着“不喜欢”、“不需要”，可当你给她递上礼物时，我们总能看到她不经意上扬的嘴角，她就是这样的妈妈。。","src/img/hotPoint/42/r_ms29_2.jpg","以经典AKOYA宠爱妈妈","低调、温润、细腻——历经磨砺与疼痛终于绽放莹润光泽的珍珠，一如初次体味为人母不易的新妈妈，时尚优雅的潮宏基Akoya系列完美体现妈妈温和的东方女性的含蓄美。在这充满爱意母亲节，想象一下当你给妈妈送上礼物的一瞬间，她该有多开心！而作为自己宝贝的新晋妈妈也可以趁此机会犒劳一下自己，这将是这个节日最佳心意之选！","src/img/hotPoint/42/r_ms29_3.jpg"],
// 第30张
["src/img/hotPoint/42/r_ms30_1.jpg"," 潮流新品 善缘系列  以东方智美，善行承缘，传承永恒祝福","本季，潮宏基珠宝（CHJ JEWELLERY）携手新玉设计运动发起人苏洁锋推出2015彩金潮流新品“善缘”系列，将西方现代珠宝注入东方之美的情感，以扇子的语言，让优雅女性拥有不可复刻的摇曳美态，这也成为CHJ2015/16彩金潮流“新女饰主义”中最具使命感的一层内涵。","src/img/hotPoint/42/r_ms30_2.png","善行成缘","扇子完全打开的姿态，是二分之一的圆形，它蕴含着一个家庭夫妻的组合关系。另一层面，三个扇形的组合，也是一个完整家庭的圆形图腾。设计师将这份感悟转化成珠宝语言，善缘系列中的每一把扇子都包含一个最传统但也最珍贵的祝福：愿每一个佩戴者，可以做一个圆满、幸福的女性。","src/img/hotPoint/42/r_ms30_3.png"],
// 第31张
["src/img/hotPoint/42/r_ms31_1.jpg","潮宏基Lock &Love爱情锁系列 法式浪漫，以锁让爱封存于世","潮宏基Lock & Love爱情锁系列，从莫斯科的爱情之树和巴黎塞纳河上的爱桥中汲取灵感，承载着爱情信物“连心锁”，将浪漫主义代表性建筑与顶级彩金珠宝融汇雕琢，以锁让爱封存于世。","src/img/hotPoint/42/r_ms31_2.png","Lock & Love","浪漫不外乎一场心灵的旅途，当引领彩金风尚的潮宏基遇到法国高级珠宝品牌Tournaire，一场源自浪漫主义的爱情宣言将从这里启程。","src/img/hotPoint/42/r_ms31_3.png"],
// 第32张
["src/img/hotPoint/42/r_ms32_1.jpg","【潮宏基微信服务号】“顺手牵￥”闹元宵，100%中奖！","羊羊得意闹元宵！在2015羊年春节，当然是要“顺手牵￥”，把￥带回家！如果你是潮宏基金彩俱乐部的成员，请你关注【潮宏基】微信服务号！如果你不是金彩会员，也请你关注【潮宏基】微信服务号！因为在这里，只要你注册或者绑定会员卡，就可以参与“顺手牵￥”抽奖游戏","src/img/hotPoint/42/r_ms32_2.jpg","开年￥","第一步，关注【潮宏基】微信服务号，点击导航栏“我”，注册或绑定会员卡号，即送积分；第二步，点击导航栏“品牌资讯”→ “最新活动”，即可参与抽奖。扫一扫，关注【潮宏基】微信服务号，参与“顺手牵羊”游戏！iPhone6 PLUS,咩儿黄金转运珠、纯金红包等幸运大奖等你拿！","src/img/hotPoint/42/r_ms32_2.jpg"],
// 第33张
["src/img/hotPoint/42/r_ms33_1.jpg","Mar8，今天我们都是女神！","我们常常不经意间成为了某人心中的女神，因为我们天生散发着最独特的气质。3月8日女神节即将到来，无论你是哪款气质女神，珠宝总会为你增添动人光彩，潮宏基也为你准备了【女神专享福利】。","src/img/hotPoint/42/r_ms33_2.png","女神专享","3月5日至8日女神节期间，只需关注【潮宏基珠宝】官方微信，回复【女神福利】，即可获得“潮宏基女神节优惠券”，众女神们快来领取你的专享福利吧！","src/img/hotPoint/42/r_ms33_3.png"],
// 第34张
["src/img/hotPoint/42/r_ms34_1.jpg","【潮宏基Lock&Love爱情锁系列】浪漫情人节，情倾一刻","在这甜蜜和特别的节日里，潮宏基为你打造情人节的浪漫惊喜，让她在打开礼盒上的蝴蝶结那一瞬间，露出幸福灿烂的笑容。潮宏基Lock&Love爱情锁系列以全球恋人的爱情圣地——莫斯科爱之树、巴黎爱桥为创作灵感，将法式浪漫主义代表性建筑与顶级彩金珠宝融汇雕琢，寓意真爱的永不分离的爱情锁悬挂于树上，如此美好信物定会成为你们的爱情见证，以锁让爱封存于世。","src/img/hotPoint/42/r_ms34_2.png","因为爱“锁”以爱","情倾一刻，潮宏基至臻金选的情人节甜蜜礼单，为她制造一份情人节的特别金喜，为爱情添加一份难忘的Valentine Memory！","src/img/hotPoint/42/r_ms34_3.png"],
// 第35张
["src/img/hotPoint/42/r_ms35_1.jpg","【潮宏基哆啦A梦2015新春限量珍藏款】快乐陪伴，闪耀新春！","                                                蓝胖子与你一同闹新春！乙未新年将至， 当哆啦穿上中国红，佳节送礼必定人见人爱！春节将至，潮宏基哆啦A梦新春限量珍藏款将是喜爱哆啦的你又一值得珍藏品！让快乐的哆啦A梦陪你Happy New Year~红红火火迎新年！","src/img/hotPoint/42/r_ms35_2.png","闪耀新春","新春款吊坠以黄金3D硬金工艺和特制硅胶Mix & Match，继2014世界杯款哆啦A梦备受追捧后，潮宏基再次推出穿着特制硅胶服装的哆啦产品，并专属定制的“福字”和“红褂”两款红色新春外衣，不仅可以灵活穿脱随意搭配，更点亮春节的喜气洋洋~为追求时尚创新的你带来焕然一新的体验！","src/img/hotPoint/42/r_ms35_3.png"],
// 第36张
["src/img/hotPoint/42/r_ms36_1.jpg","【潮宏基IPO5周年庆】5千万红利大派送，就是任性到底！","潮宏基上市5周年啦！作为A股首家时尚珠宝公司（股票代码：002345），潮宏基自2001年IPO上市5年来，年复合增长率超过30%，集团门店总数达到950家，市值从39.6亿元上涨到70.99亿元，品牌价值达到129.36亿元，还荣登“福布斯中国最具潜力上市企业榜”，并连续十年入选“中国500最具价值品牌”。","src/img/hotPoint/42/r_ms36_2.jpg","任性到底","上市五周年所取得的成绩，离不开一路支持的朋友，借此IPO五周年之际感恩回馈，潮宏基5千万红利豪礼大派送，见者有份！详情请关注【潮宏基珠宝】官方微信平台，在第一时间赢取属于你的红利！在2015年1月17-25日莅临潮宏基珠宝专柜，更有超低感恩折扣价，黄金、现金等多重好礼大放送！","src/img/hotPoint/42/r_ms36_2.jpg"],
// 第37张
["src/img/hotPoint/42/r_ms37_1.jpg","【潮宏基“咩儿”系列】乙未新宠Mie Babe萌趣驾到","咩咩~在乙未年的钟声即将敲响之际，潮宏基“金”彩乐园喜添新宠——“咩儿”闪耀登场！以羊的叫声“咩儿”命名的新宠，共同组成可爱讨喜的咩儿家族， 萌趣至极的咩儿带着“咩~咩~”的可爱叫声，必将掀起羊年一轮“咩”新潮。","src/img/hotPoint/42/r_ms37_2.png","萌趣","以“咩”为概念的羊年新宠希望带给大家更多轻松欢快的心灵体验，打破传统生肖珠宝过于“安分”的沉寂，并突破以往的选材范畴，结合粉嫩色彩的珐琅为黄金饰品融入柔美时尚气息，蝴蝶结、富贵锁和幸运草等元素巧妙配搭赋予萌趣的咩儿更多个性形象，为具有个性化需求的爱美女性倾情打造。","src/img/hotPoint/42/r_ms37_3.png"],
// 第38张
["src/img/hotPoint/42/r_ms38_1.jpg","潮宏基“金彩”纷呈圣诞季","Here comes the Christmas!在这令人充满期待的圣诞节,潮宏基珠宝（CHJ JEWELLERY）早已为你精心准备好金彩圣诞出行LOOK。令你释放摩登气息,散发浪漫可人的信号。","src/img/hotPoint/42/r_ms38_2.png","“金”喜","在这神秘、浪漫而缤纷的圣诞节，愿接受这份潮宏基为你专属打造的金彩礼物，让每一位爱美女性都展现自己的独特魅力，迎接新一年的爱与祝福。","src/img/hotPoint/42/r_ms38_3.png"],
// 第39张
["src/img/hotPoint/42/r_ms39_1.jpg","【潮宏基珠宝爱之礼赞系列】献给真爱的永恒承诺","  在这弥漫着甜蜜的婚庆季节，潮宏基诚意献上 Salute D'Amour 爱之礼赞，以唯美蝴蝶结连接起每一对新人最幸福、闪耀的时刻，陪伴真爱步入婚姻的神圣殿堂，相随相伴，直到永远。","src/img/hotPoint/42/r_ms39_2.jpg","礼赞","浪漫九月，潮宏基爱之礼赞系列珠宝，献给真爱的永恒承诺。于优雅之中，为每一对新人谱写唯美的人生新篇章，为闪耀婚礼唱响赞颂之歌，为真挚的爱情留下最初的纯粹和唯美。","src/img/hotPoint/42/r_ms39_3.jpg"],
// 第40张
["src/img/hotPoint/42/r_ms40_1.jpg","【潮宏基珠宝黄金婚嫁系列】花好月圆，姻爱闪耀","在明月的见证下，我们许下厮守终生的盟约，一份似金闪耀的幸福感在祈祷白头 偕老，百年好合的美好期盼中无限放大。我愿以明月为证，与你约定终生。","src/img/hotPoint/42/r_ms40_2.jpg","喜庆","潮宏基珠宝摆脱传统婚庆黄金的沉闷，用喜庆的红色丝带与华贵的黄金相伴，动人的喜庆 洋溢而出。红色玛瑙点缀其间，犹如含苞待放的花朵经过爱情的滋润，瞬间绽开笑颜， 展露出一生中最迷人时刻。","src/img/hotPoint/42/r_ms40_3.jpg"],
// 第41张
["src/img/hotPoint/42/r_ms41_1.jpg","【潮宏基珠宝清盈系列2代】斑斓展翅，彩金新品『清盈』华丽起舞"," 大自然是造物主的恩赐，是各种艺术和创意领域共同的灵感来源。在热带雨林中最善舞的蝴蝶精灵，似乎特别受设计师们的青睐。(2014年潮宏基彩金珠宝潮流趋势的跨界设计中，现代传播集团钟表珠宝副总监刘丽莉运用玫瑰花和蝴蝶这两个最值得抽象于珠宝的元素，将“MODERN RETRO 现代摩登”的ART DECO风格表现得淋漓尽致。)","src/img/hotPoint/42/r_ms41_2.png","蜕变","潮宏基珠宝(CHJ JEWELLRY)以热带雨林中色彩斑斓的蝴蝶来体现彩色宝石的神奇与美丽推出2014彩金珠宝潮流新品『清盈』系列。当蝴蝶遇上彩宝，碰撞出如梦似幻的浪漫典雅，绽露出蜕变后的华丽璀璨。","src/img/hotPoint/42/r_ms41_3.png"],
// 第42张
["src/img/hotPoint/42/r_ms42_1.jpg","【潮宏基珠宝xSwarovski】仲夏，为首饰盒增添一抹清新风","     缤纷仲夏，繁花似锦，催化一切浪漫情怀持续升温。在仲夏时节，为首饰盒增添一抹清新风似乎变得必不可少。","src/img/hotPoint/42/r_ms42_2.png","礼赞","  潮宏基珠宝（CHJ JEWELLERY）首度联合全球知名的天然宝石供应商SWAROVSKI施华洛世奇推出2014彩金珠宝潮流新品『仲夏花园』系列，让色彩与金彩齐绽闪耀，以令人耳目一新的“小清新”解构了2014年彩金潮流趋势“MODERN RETRO现代摩登”主义，再掀时尚风潮！","src/img/hotPoint/42/r_ms42_3.png"],
];

// 获取所有的a 标签下的img
var clickImgs = $(".h_caro_b > a > img");
clickImgs.on("click", function() {
	var index = clickImgs.index($(this));
	caroImg(index);
});

function caroImg(index){
	if(index == 17) {
		$("#h_main_con2").css({"display":"none"});
		$(".h_main_pic > img").attr({"src":""+fourMsArr[index][0]+""});
		$(".h_main_t1 > h2").text(fourMsArr[index][1]);
		$(".h_main_t1 > p").text(fourMsArr[index][2]);
		$(".h_main_zhu1 > img").attr({"src":""+fourMsArr[index][3]+""});
		return;
	}else {
		$("#h_main_con2").css({"display":"block"});
	}
	$(".h_main_pic > img").attr({"src":""+fourMsArr[index][0]+""});
	$(".h_main_t1 > h2").text(fourMsArr[index][1]);
	$(".h_main_t1 > p").text(fourMsArr[index][2]);
	$(".h_main_zhu1 > img").attr({"src":""+fourMsArr[index][3]+""});
	$(".h_main_t2 > h2").text(fourMsArr[index][4]);
	$(".h_main_t2 > p").text(fourMsArr[index][5]);
	$(".h_main_zhu2 > img").attr({"src":""+fourMsArr[index][6]+""});
}
// *************************接受子页面传过来的数据**********************************
function getQueryString(){
	var result = location.search.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+","g")); 
	if(result == null){
		return "";
	}
	for(var i = 0; i < result.length; i++){
		result[i] = result[i].substring(1);
	}
	return result;
}
	var h_url = getQueryString()[0];
	if(h_url == undefined) {
		return;
	}else {
		var h_urlStr = parseInt(h_url.slice(5));
		console.log(h_urlStr);
		caroImg(h_urlStr);
	}
	
});