
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


var hrefs = ['时光旅行','梦游仙境','智慧之眼','旋舞系列','元素系列','布拉格系列','善缘系列','LL系列','情迷威尼斯系列','清盈系列','仲夏花园系列','星克拉系列','夜色系列','弘系列','爱之礼赞系列','心蝶系列','皇室印象系列','执手成说系列','婚庆黄金','迪士尼玛丽猫系列','咩儿系列','大嘴猴系列','多啦A梦系列','Pony木马系列','熊猫系列','Smiley系列','My Wish系列','鼓韵系列','牡丹系列','彩宝系列','凤影系列','群镶系列','珍珠系列','捻指金兰'];



var leftnavs = $('.showimgbox ul li');

for(let i = 0; i < hrefs.length; i++){
	leftnavs.eq(i).on('click',function(){
		window.location.href = "http://vipcw33.top/teamobject/details.html?name="+hrefs[i];
	})
}

for(let i = 0; i < $('.shangpins li').length; i++){
	$('.shangpins li').eq(i).on('click',function(){
		window.location.href = "http://vipcw33.top/teamobject/details.html?name="+hrefs[i];
	})
}

for(let i = 0; i < $('.xl_series_link_list a').length; i++){
	$('.xl_series_link_list a').eq(i).on('click',function(){
		window.location.href = "http://vipcw33.top/teamobject/details.html?name="+hrefs[i];
	})
}









$('.ul4>li,.ul6>li').on('click',function(){
	window.location.href = "http://vipcw33.top/teamobject/article.html?name="+this.innerText;
})


var hrefs2 = ['http://vipcw33.top/teamobject/touchme.html?name=各地专店','http://vipcw33.top/teamobject/touchme.html?name=商务热线','http://irm.p5w.net/ssgs/S002345/?code=002345'];

for(let i = 0; i < $('.ul5 > li').length; i++){
	$('.ul5 > li').eq(i).on('click',function(){
		window.location.href = hrefs2[i];
	})	
}
for(let i = 0; i < $('.lianxi > li').length; i++){
	$('.lianxi > li').eq(i).on('click',function(){
		window.location.href = hrefs2[i];
	})
}




$('.ulsongta1').on('click',function(){
	window.location.href = "http://chjchina.com/Send/list/45.html";
})

var https = ['http://chjchina.com/Send/list/46.html','http://chjchina.com/Send/list/47.html','http://chjchina.com/Send/list/48.html','http://chjchina.com/Send/list/49.html']

for(let i = 0; i < $('.ulsongta2').length; i++){
	$('.ulsongta2').eq(i).on('click',function(){
		window.location.href = https[i];
	})
}


var search1 = null;
var search2 = null;

$('.class1 li,.class2 li').on('click',function(){
	var parclass = $(this).parent().attr("class");
	if(parclass == "class1"){
		search1 = this.innerText;
	}else {
		search2 = this.innerText;
	}
	console.log(search1,search2)
	if(search1 != null & search2 != null){
		window.location.href = "http://vipcw33.top/teamobject/search.php?name="+search1+"&name2="+search2;
	}
})


