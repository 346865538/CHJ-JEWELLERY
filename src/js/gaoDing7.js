$(".j_box3_img1 > div ").hover(function() {
	$(".j_box3_img1  .j_box3_cover").show();
	$(".j_box3_img1 p").show();
},function() {
	$(".j_box3_cover").hide();
	$(".j_box3_img1 p").hide();
});
$(".j_box3_img2 > div ").hover(function() {
	$(".j_box3_img2  .j_box3_cover").show();
	$(".j_box3_img2 p").show();
},function() {
	$(".j_box3_cover").hide();
	$(".j_box3_img2 p").hide();
});
$(".j_box3_img3 > div ").hover(function() {
	$(".j_box3_img3  .j_box3_cover").show();
	$(".j_box3_img3 p").show();
},function() {
	$(".j_box3_cover").hide();
	$(".j_box3_img3 p").hide();
});
// ******************小图轮播*********************
var count = 0;
var caroSwitch = false;
var j_box3_timers;
if(caroSwitch) {
	clearInterval(j_box3_timers);
}else {
	j_box3_timers = setInterval(function() {
		var imgs = $(".j_box3_caro > img");
		var points = $(".j_box3_slide > a");
		imgs.eq(count).fadeOut();
		points.css({"backgroundPosition":"0 0"});
		imgs.eq(count+1).fadeIn();
		points.eq(count+1).css({"backgroundPosition":"0 -15px"});
		count++;
		if(count == 2) {
			count = -1;
		}
	},2000);
}

// 点击遮罩层appendBox出现
$(".j_box3_cover").on("click", function() {
	caroSwitch = true;
	$("#j_box3_appendBox").css({"display":"block"});
	wrap = document.getElementsByClassName('wrap')[0];
	scrollBlock = document.getElementsByClassName('scrollBlock')[0];
	text = document.getElementsByClassName('textWrap')[0];
	scrollWrap = document.getElementsByClassName('scrollWrap')[0];
	wrapH = document.getElementsByClassName('wrap')[0].offsetHeight;
	scrollBlockH = scrollBlock.offsetHeight;
	textH = text.offsetHeight;
	scrollH = scrollWrap.offsetHeight;
	wrap.onmousewheel = function(ev){
		ev.preventDefault(); 
		if(ev.wheelDelta > 0){
			if(scrollNum  < 10 ){
				return;
			}
			scrollNum -= 20;
			scrollBlock.style.top = scrollNum+"px";
			text.style.top = -(scrollNum)/scrollH*(textH-wrapH)+'px';
		}
		if(ev.wheelDelta < 0 ){
			if(scrollNum + scrollBlockH >= scrollH){
				return;
			}
			scrollNum += 20;
			scrollBlock.style.top = scrollNum+"px";
			text.style.top = -(scrollNum+scrollBlockH)/scrollH*(textH-wrapH)+'px';
		}
		
	}
	scrollWrap.onclick = function (ev) {	
		if(ev.offsetY < scrollBlockH/2){
			scrollNum = 0;
			scrollBlock.style.top = scrollNum+"px";
			text.style.top = -(scrollNum)/scrollH*(textH-wrapH)+'px';
		}else if( ev.offsetY > scrollH - (scrollBlockH)){
			scrollNum = scrollH - scrollBlockH;
			scrollBlock.style.top = scrollNum+"px";
			text.style.top = -(scrollNum)/scrollH*(textH-wrapH)+'px';
		}
		else{
			scrollNum = ev.offsetY-(scrollBlockH/2);
			scrollBlock.style.top = scrollNum+"px";
			text.style.top = -(scrollNum)/scrollH*(textH-wrapH)+'px';
		}
	}
})
// ******关闭按钮的事件
$(".j_box3_close").on("click", function() {
	$("#j_box3_appendBox").css({"display":"none"});
	caroSwitch = false;
})
// *****************************第三页的动画*****************************
$(".j_box5_f").hover(function() {
	$(this).parent().find("table").fadeIn();
}, 
	function() {
		$(this).parent().find("table").fadeOut();
});

// **************************首页底部播图按钮的点击事件***************************
var threeImgArr = [".j_box1",".j_box7",".j_box8"];
var lastIndex = 0;
$(".j_bottomBtn a").on("click", function() {
	var index = $(".j_bottomBtn a").index($(this));
	console.log("index"+index,"lastIndex"+lastIndex);
	$(".j_bottomBtn a").css({"backgroundPosition":"0 0"});
	$(""+threeImgArr[lastIndex]+"").fadeOut(100);
	$(""+threeImgArr[index]+"").fadeIn(1000);
	$(this).css({"backgroundPosition":"0 -24px"});
	lastIndex = index;
});

// **************************左边轮播图按钮的点击事件***************************
var threeImgArr = [".j_box1",".j_box7",".j_box8"];
var sixImgArr = ["#j_box1_big",".j_box2",".j_box3",".j_box4",".j_box5",".j_box6"];
var imgLastIndex = 0;
$(".j_rightBtn a").on("click", function() {
	var index = $(".j_rightBtn a").index($(this));
	$(".j_rightBtn a").css({"backgroundPosition":"0 0"});
	$(this).css({"backgroundPosition":"0 -24px"});
	if(index == 0) {
		$("#j_con").css({"margin-top":""+0+"vh"});
	}
	// else {
		// $("#j_con").css({"margin-top":""+-100+"vh"});
	// }
	$(""+sixImgArr[imgLastIndex]+"").css({"display":"none"});
	$(""+sixImgArr[index]+"").css({"display":"block"});
	imgLastIndex = index;
});