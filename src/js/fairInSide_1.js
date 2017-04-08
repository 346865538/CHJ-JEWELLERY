// ***************************轮播图*****************************
$(function() {
	var imgArr = $(".f_caro_img").length;
	// 左按钮
	var smallCaro = 0;
	$("#f_caro_leftBtn").on("click", function() {
		if(smallCaro == 0) {
			smallCaro = imgArr-3;
			$(".f_caro_con").css({transition:"0s"});
		}else {
			smallCaro -= 1;
			$(".f_caro_con").css({transition:"all 1s"});
		}
		$(".f_caro_con").css({marginLeft: ""+-273*smallCaro+"px"});
		

	});
	// 右按钮
	$("#f_caro_rightBtn").on("click", function() {
		if(smallCaro >= imgArr-3) {
			smallCaro = 0;
			$(".f_caro_con").css({transition:"0s"});
		}else {
			smallCaro += 1;
			$(".f_caro_con").css({transition:"all 1s"});
		}
		$(".f_caro_con").css({marginLeft: ""+-273*smallCaro+"px"});
	})
})