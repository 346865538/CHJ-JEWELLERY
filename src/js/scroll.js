var wrap = document.getElementsByClassName('wrap')[0];
var scrollBlock = document.getElementsByClassName('scrollBlock')[0];
var text = document.getElementsByClassName('textWrap')[0];
var scrollWrap = document.getElementsByClassName('scrollWrap')[0];
var wrapH = document.getElementsByClassName('wrap')[0].offsetHeight;
var scrollBlockH = scrollBlock.offsetHeight;
var textH = text.offsetHeight;
var scrollH = scrollWrap.offsetHeight;
var scrollNum = 0 ;
wrap.onmousewheel =function(ev){
	ev.preventDefault(); 
	if(ev.wheelDelta > 0){
		if(scrollNum  < 10 ){
			return;
		}
		scrollNum -= 10;
		scrollBlock.style.top = scrollNum+"px";
		text.style.top = -(scrollNum)/scrollH*(textH-wrapH)+'px';
	}
	if(ev.wheelDelta < 0 ){
		if(scrollNum + scrollBlockH >= scrollH){
			return;
		}
		scrollNum+=10;
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
