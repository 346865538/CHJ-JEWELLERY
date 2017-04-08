var navs = $('.rightNav li');

for(let i = 0; i < navs.length; i++){
	navs.eq(i).hover(function(){
		for(var k = 0; k < navs.length; k++){
			if(navs.eq(k).hasClass("hoveron")){
				navs.eq(k).removeClass("hoveron");
			}
		}
		navs.eq(1).addClass("hoveron");
		navs.eq(i).addClass("hoveron");
	},function(){})
}

for(let i = 0; i < $('.videobox ul li').length; i++){
	$('.videobox ul li').eq(i).on('click',function(){
		$('.videologobox').fadeOut();
		$('.videologobox').eq(i).fadeIn();
		$('.videobox ul li div').css({
			"display" : "block",
		})
		$('.videobox ul li div').eq(i).css({
			"display" : 'none',
		})
		
	})
}

$('.leftbtn31').on('click',function(){
	$('.lunbobox').css({
		"transform" : "translate3d(0%, 0, 0)",
	})
})


$('.rightbtn32').on('click',function(){
	$('.lunbobox').css({
		"transform" : "translate3d(-66.66666666666666666666%, 0, 0)",
	})
})

$('.rightbtn31,.leftbtn33').on('click',function(){
	$('.lunbobox').css({
		"transform" : "translate3d(-33.3333333333333333333333333%, 0, 0)",
	})
})



var mySwiper = new Swiper('.swiper-container', {
	autoplay: 1500,
	nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
})


for(let i = 1; i < $('.kol img').length; i++){
	$('.kol img').eq(i).hover(function(){
		$('.kol div').eq(i-1).show();
	},function(){
		
	})
}

for(let i = 0; i < $('.kol div').length; i++){
	$('.kol div').eq(i).hover(function(){
		
	},function(){
		$('.kol div').eq(i).hide();
	})
}

// 第一组btn
var index1 = 1;
$('.rightbtn1').click(function(){
	$('.showimgbox .ul1').css({
		"transform" : "matrix(1, 0, 0, 1, "+(-150*index1)+", 0)",
	})
	index1++;
	if(index1 >= 8){
		index1 = 0;
	}
})
$('.leftbtn1').click(function(){
	index1--;
	if(index1 <= 0){
		index1 = 7;
	}
	$('.showimgbox .ul1').css({
		"transform" : "matrix(1, 0, 0, 1, "+(-150*index1)+", 0)",
	})
})

$('.leftNav > li').hover(function(){
	$('.leftNav > li').css({"color":"#999999"})
},function(){
	$('.leftNav > li').css({"color":"white"})
})
// 第二组btn
var index2 = 1;
$('.rightbtn2').click(function(){
	$('.showimgbox .ul2').css({
		"transform" : "matrix(1, 0, 0, 1, "+(-150*index2)+", 0)",
	})
	index2++;
	if(index2 >= 2){
		index2 = 0;
	}
})
$('.leftbtn2').click(function(){
	index2--;
	if(index2 <= 0){
		index2 = 1;
	}
	$('.showimgbox .ul2').css({
		"transform" : "matrix(1, 0, 0, 1, "+(-150*index2)+", 0)",
	})
})

