var navs = $('.rightNav li');

for(let i = 0; i < navs.length; i++){
	navs.eq(i).hover(function(){
		for(var k = 0; k < navs.length; k++){
			if(navs.eq(k).hasClass("hoveron")){
				navs.eq(k).removeClass("hoveron");
			}
		}
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


for(let i = 0; i < $('.wrap > div').length; i++){
	var ranh = parseInt(Math.random()*(510-450)+450);
	$('.wrap > div').eq(i).height(ranh);
}


var prevclick = 0;
var pages = $('.midcontainer > div');

for(let i = 0; i < $('.search ul li').length - 1; i++){
	$('.search ul li').eq(i).on("click",function(){
		$('.search ul li').eq(prevclick).removeClass('onhover');
		pages.eq(prevclick).hide();
		$('.search ul li').eq(i).addClass('onhover');
		pages.eq(i).show();
		prevclick = i;
	})
}


window.onload = function(){
	var a = decodeURI(getQueryString()).substring(5);
	switch (a){
		case "各地专店":
			$('.a1').show();
			gdzdgo();
			break;
		case "商务热线":
			$('.a2').show();
	}
}

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

function gdzdgo(){
	$.ajax({
		type:"get",
		url:"zd.php",
		async:true,
		dataType:"json", 
		success:function(str){
			// 提取406个店的城市去重 将去重后的结果显示
			var linshi = new Array();
			for(let i = 0; i < 407; i++){
				if(linshi[linshi.length-1] != str[i][0]){
					linshi.push(str[i][0]);
				}
			}
			for(let i = 0; i < linshi.length; i++){
				var linshi2 = $('<option value="">'+linshi[i]+'</option>');
				$('.a1 select').append(linshi2);
			}
			// 提取406个店 将去重后的结果显示
			var linshi = [];
			for(let i = 407; i < str.length; i++){
				linshi.push(str[i]);
			}
			for(let i = 0; i < linshi.length; i++){
				var x = "<li>"+
						"<p class='p1'>"+linshi[i][1]+"</p>"+
						"<br />"+
						"<p class='p2'>"+linshi[i][2]+"</p>"+
						"<br />"+
						"<p class='p3'>"+linshi[i][3]+"</p>"+
					"</li>"
				$('.dian').append(x);
			}
		}
	});
}

$('select').on('change',function(){
	var zd = $(this).find("option:selected").text();
	if(zd == "请选择省份..."){
		$('.hr22').hide();
	}
	$.ajax({
		type:"get",
		url:"gdzd.php",
		async:true,
		data:{
			name:zd,
		},
		dataType:"json",
		success:function(str){
			$('.shengfen').html(zd);
			$('.hr22').show();
			var linshi = new Array();
			for(let i = 0; i < str.length; i++){
				if(linshi[linshi.length-1] != str[i][0]){
					linshi.push(str[i][0]);
				}
			}
			$('.shi').html("");
			for(let i = 0; i < linshi.length; i++){
				var x = "<li>"+
						"<a data-city='"+linshi[i]+"'>"+linshi[i]+"</a>"+
					"</li>";
				$('.shi').append(x);
			}
			
			$('.shi li a').on('click',function(){
				var xxf = $('.shi li a').data().city;
				$.ajax({
					type:"get",
					url:"gdzd.php",
					async:true,
					data:{
						ucity:xxf,
					},
					dataType:"json",
					success:function(str){
						console.log(str);
						$(".dian").html("");
						for(let i = 0; i < str.length; i++){
							var x = "<li>"+
								"<p class='p1'>"+str[i][1]+"</p>"+
								"<br />"+
								"<p class='p2'>"+str[i][2]+"</p>"+
								"<br />"+
								"<p class='p3'>"+str[i][3]+"</p>"+
							"</li>";
							$('.dian').append(x);
						}
					}
				});
				
			})
		}
	});
	
})



