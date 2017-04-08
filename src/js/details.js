var navs = $('.rightNav li');

for(let i = 0; i < navs.length; i++){
	navs.eq(i).hover(function(){
		for(var k = 0; k < navs.length; k++){
			if(navs.eq(k).hasClass("hoveron")){
				navs.eq(k).removeClass("hoveron");
			}
		}
		navs.eq(2).addClass("hoveron");
		navs.eq(i).addClass("hoveron");
	},function(){})
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

//for(let i = 0; i < $('.choose').length; i++){
//	$('.choose').eq(i).on('click',function(){
//		$('.choose ul').hide();
//		$('.choose ul').eq(i).show();
//	})
//}

$('.choose').hover(function(){
	$('.choose ul').show();
},function(){
	$('.choose ul').hide();
})








$('.choose > ul >li').on('click',function(){
	console.log(this.innerText);
	window.location.href = "http://vipcw33.top/teamobject/details.html?name="+this.innerText;
})