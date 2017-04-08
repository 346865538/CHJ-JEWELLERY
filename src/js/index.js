var lunboBox = document.querySelector('.lunboBox');
lunboBox.style.height = (document.body.clientHeight - 90) + "px";

var imgs = $('.lunboBox .lunbo');
var imgpages = 0;
var lunboInterval = null;

imgrun();
function imgrun(){
	lunboInterval = setInterval(function(){
		for(var i = 0; i < imgs.length; i++){
			imgs.eq(i).fadeOut(200);
		}
		imgpages++;
		if(imgpages >= 4){
			imgpages = 0;
		}
		imgs.eq(imgpages).fadeIn(200);
		for(var k = 0; k < navs.length; k++){
			if(navs.eq(k).hasClass("hoveron")){
				navs.eq(k).removeClass("hoveron");
			}
		}
		navs.eq(imgpages).addClass("hoveron");
	},5000)
}

console.log(imgs);
for(let i = 0; i < imgs.length; i++){
	imgs.eq(i).on("click",function(){
		console.log(this);
	})
}

var hppps = ['hotPoint.html','trends.html','collections.html','culture.html']

$('.clickchoose').on('click',function(){
	console.log(imgpages);
	window.location.href = "http://vipcw33.top/teamobject/"+hppps[imgpages];
})









var navs = $('.rightNav li');

for(let i = 0; i < navs.length; i++){
	navs.eq(i).hover(function(){
		clearInterval(lunboInterval);
		for(var k = 0; k < navs.length; k++){
			if(navs.eq(k).hasClass("hoveron")){
				navs.eq(k).removeClass("hoveron");
			}
		}
		navs.eq(i).addClass("hoveron");
		if(i == imgpages){
			return;
		}else{
			clearInterval(lunboInterval);
			for(var j = 0; j < imgs.length; j++){
				imgs.eq(j).fadeOut(300);
			}
			imgpages = i;
			imgs.eq(i).fadeIn(300);
		}
	},imgrun)
}


$('.leftNav > li').hover(function(){
	$('.hoverbg').show();
	$('.runpoint').show();
	$('.runpoint').css({
		"top":this.offsetTop+10,
	})
},function(){
	$('.hoverbg').hide();
	$('.runpoint').hide();
})





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

for(let i = 0; i < $('.class1 li').length; i++){
	$('.class1 li').eq(i).on('click',function(){
		for(let j = 0; j < $('.class1 li').length; j++){
			$('.class1 li').eq(j).css({
				"color":"#999999"
			})
		}
		$('.class1 li').eq(i).css({
			"color":"#ffe6a4"
		})
	})
}

for(let i = 0; i < $('.class2 li').length; i++){
	$('.class2 li').eq(i).on('click',function(){
		for(let j = 0; j < $('.class2 li').length; j++){
			$('.class2 li').eq(j).css({
				"color":"#999999"
			})
		}
		$('.class2 li').eq(i).css({
			"color":"#ffe6a4"
		})
	})
}
