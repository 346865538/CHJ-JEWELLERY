// ************************右边固定栏***********************
var scrollSwitch = 0;
// 滚轮滚到640以上的时候更换图片
$("body").animate({scrollTop:640},500);
$(window).scroll(function() {
	var scrollDec = $("body").scrollTop();
	if(scrollDec >= 640) {
		$(".tobottom img").attr({src:"src/img/publicPart/totop.png"});
		scrollSwitch = 1;
	}else {
		$(".tobottom img").attr({src:"src/img/publicPart/tobottom.png"});
		scrollSwitch = 0;
	}
});
// 回到顶部的点击时间
$(".tobottom").on("click", function() {
	if(scrollSwitch == 0) {
		$("body").animate({scrollTop:640},500);
		scrollSwitch = 1;
	}else if(scrollSwitch == 1) {
		$("body").animate({scrollTop:0},500);
		scrollSwitch = 0;
	}
});