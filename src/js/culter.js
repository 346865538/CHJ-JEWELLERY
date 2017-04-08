window.onload = function(){
    //切换子页
    var switchBtn = document.getElementsByClassName('cc_product_item');
    var page1 = document.getElementsByClassName('cc_between_page1')[0];
    var page2 = document.getElementsByClassName('cc_between_page2')[0];
    var page3 = document.getElementsByClassName('cc_between_page3')[0];
    var page4 = document.getElementsByClassName('cc_between_page4')[0];
    var pageArr = [page1,page2,page3,page4];
    for(var i = 0 ; i < switchBtn.length;i++){
        switchBtn[i].index = i;
        switchBtn[switchBtn[i].index].onclick = function(){
            //滑屏
            var h = document.getElementsByClassName('cc_trend_top')[0].offsetTop ;
            var bodyH = document.body.scrollTop;
            if(bodyH < h ){
                var timer = setInterval(function(){
                    if(bodyH > h ){
                        clearInterval(timer)
                        document.body.scrollTop = h
                    }else{
                        bodyH += 30 ;
                        document.body.scrollTop = bodyH;
                    }
                },10)
            }
            for( var j = 0 ; j <pageArr.length;j++){
                if(j == this.index){
                    pageArr[j].style.display = "block";
                }else{
                    pageArr[j].style.display = "none";
                }
            }
        }
    }

    //cc_slider
    var wrap = document.getElementsByClassName('cc_wrap')[0];
    wrap.style.left = "0";

    var leftA = document.getElementsByClassName('cc_leftA')[0];
    var rightA = document.getElementsByClassName('cc_rightA')[0];
    var offsetCoefficient = wrap.offsetWidth/wrap.parentNode.offsetWidth;
    var num = Math.ceil(parseInt(wrap.style.left) /offsetCoefficient/-25);

    leftA.onclick = function(){
        if( offsetCoefficient.toFixed(2) ==1.35 && num == 1){
            return;
        }
        if( offsetCoefficient.toFixed(2) ==2 && num == 2){
            return;
        }
        if(offsetCoefficient.toFixed(2) ==4 && num == 3){
            return;
        }
        num++;
        wrap.style.left = -25*num*offsetCoefficient+'%';
    }
    rightA.onclick = function(){
        if(num == 0 ){
            return;
        }
        num--;
        wrap.style.left = -25*num*offsetCoefficient+'%';
    }
    window.onresize = function () {
        offsetCoefficient = wrap.offsetWidth/wrap.parentNode.offsetWidth;

        if(offsetCoefficient <= 1 ||offsetCoefficient.toFixed(2) ==1.35 || offsetCoefficient.toFixed(2) ==2 ||offsetCoefficient.toFixed(2) ==4){
            num = 0;
        }
        wrap.style.left = -25*num*offsetCoefficient+'%';
    }



    ////cc_mp_section_01
    var exhibition = document.getElementsByClassName('exhibition');
    var cc_showtext_btn = document.getElementsByClassName('cc_showtext_btn');
    var changeImg = document.getElementsByClassName('changeImg')[0];
    for(var i = 0 ; i <cc_showtext_btn.length ; i++){
        cc_showtext_btn[i].index = i;
        cc_showtext_btn[cc_showtext_btn[i].index].onclick = function(){
            var num = this.index;
            for (var j = 0 ; j < exhibition.length; j ++){
                changeImg.src = "src/img/culture/cc_mp_section_"+num+".png"
                if( j == num){
                    exhibition[j].className = "exhibition";
                }else{
                    exhibition[j].className = "exhibition exhibition-none";
                }
            }
        }
    }
    ////cc_mp_section_03
    var leftA2 = document.getElementsByClassName('cc_leftA2')[0];
    var rightA2 = document.getElementsByClassName('cc_rightA2')[0];
    var section03_slide_wrap = document.getElementsByClassName('section03_slide_wrap')[0];
    var cc_imgWrap = document.getElementsByClassName('cc_imgWrap');
    var cc_mask = document.getElementsByClassName('cc_mask');
    var sec03_chengeImg = document.getElementsByClassName('section03_chengeImg')[0];
    var carousel_subtitle = document.getElementsByClassName('carousel_subtitle')[0];
    var carousel_desc = document.getElementsByClassName('carousel_desc')[0];
    var left = -50;
    section03_slide_wrap.style.left=left+'%';
    leftA2.onclick = function(){
        if( section03_slide_wrap.className == "section03_slide_wrap"){
            section03_slide_wrap.className = "section03_slide_wrap wrap_transtion";
        }
        left += 50;
        section03_slide_wrap.style.left = left+'%';
        console.log(section03_slide_wrap.className)
        console.log(left)
        if(left == 0){
            setTimeout(function(){
                section03_slide_wrap.className = "section03_slide_wrap";
                left = -200;
                section03_slide_wrap.style.left = left+'%';
            },400)
        }
    }
    rightA2.onclick = function(){
        if( section03_slide_wrap.className == "section03_slide_wrap"){
            section03_slide_wrap.className = "section03_slide_wrap wrap_transtion";
        }
        left -= 50;
        section03_slide_wrap.style.left = left+'%';

        if(left == -200){
            setTimeout(function(){
                section03_slide_wrap.className = "section03_slide_wrap";
                left = 0;
                section03_slide_wrap.style.left = left+'%';
            },400)
        }
    }
    for(var i = 0 ; i < cc_imgWrap.length;i++){
        cc_imgWrap[i].index = i;
        cc_imgWrap[cc_imgWrap[i].index].onclick = function(){
            for(var j = 0 ; j < cc_mask.length ; j++){
                if(j == this.index ){
                    cc_mask[j].style.opacity = 0;
                    sec03_chengeImg.style.opacity = 0;
                    sec03_chengeImg.src = "";
                    sec03_chengeImg.src = "src/img/culture/cc_mp_section_03img"+this.index+".jpg";
                    sec03_chengeImg.onload = function(){
                        sec03_chengeImg.style.opacity = 1;
                    }
                    carousel_subtitle.innerHTML = this.getAttribute('subtitle');
                    carousel_desc.innerHTML = this.getAttribute('desc')
                }else{
                    cc_mask[j].style.opacity = .6;
                }
            }
        }
    }
    //page2轮播图1
    var cc_m2_btn = document.getElementsByClassName('cc_m2_section_01_btn');
    var cc_m2_img  = document.getElementsByClassName('cc_m2_section_01_img')[0];
    for(var i = 0;i <cc_m2_btn.length;i++ ){
        cc_m2_btn[i].index = i;
        cc_m2_btn[cc_m2_btn[i].index].onclick = function(){
            for (var j = 0 ; j < cc_m2_btn.length ; j++){
                if(j == this.index){
                    cc_m2_btn[j].style.backgroundColor = "#c2a24b";
                    cc_m2_img.style.opacity = 0;
                    var _j = j;
                    setTimeout(function(){
                        cc_m2_img.src = "src/img/culture/cc_mp2_section_01_"+_j+".jpg";
                        cc_m2_img.style.opacity=1;
                    },400)
                }else{
                    cc_m2_btn[j].style.backgroundColor = "#8b8b8b";
                }
            }
        }
    }
    //自定义滚动条
    var text = document.querySelector('.text');
    var aBlock = document.querySelector('.aBlock');
    var cc_wrap = document.querySelector('.cc_slide');
    var scrollBar =document.querySelector('.scrollBar');
    var aBlockLocation;//滑动块的位置

    scrollBar.onclick = function (ev) {
        if(ev.offsetY > 300){
            aBlockLocation = 300;
            aBlock.style.top = aBlockLocation + 'px';
            textScroll (aBlockLocation)
        }else if(ev.offsetY < 50){
            aBlockLocation = 0;
            aBlock.style.top = aBlockLocation + 'px';
            textScroll (aBlockLocation)
        }else{
            aBlockLocation = ev.offsetY -50;
            aBlock.style.top = aBlockLocation + 'px';
            textScroll (aBlockLocation)
        }
    }
    cc_wrap.onmousewheel = function(ev){
        ev.preventDefault();
        if(ev.wheelDelta < 0){
            aBlockLocation = aBlock.offsetTop;
            aBlockLocation += 10;
            textScroll (aBlockLocation)
            if(aBlock.offsetTop > 247){
                aBlockLocation = 247;
                textScroll (aBlockLocation)
            }
        }
        if(ev.wheelDelta > 0){
            aBlockLocation = aBlock.offsetTop;
            aBlockLocation -= 10;
            textScroll (aBlockLocation)
            if(aBlock.offsetTop < 0){
                aBlockLocation = 0;
                textScroll (aBlockLocation)
            }
        }
    }
    aBlock.onmousedown = function (ev) {
        var y = ev.offsetY;
        // ev.cancelBubble = true;
        document.onmousemove = function (ev) {
            aBlockLocation = ev.clientY - y - 100;

            if(aBlockLocation < 0 ){
                aBlockLocation = 0;
                textScroll (aBlockLocation)
            }else if(aBlockLocation > 247 ){
                aBlockLocation = 247;
                textScroll (aBlockLocation)
            }else{

                textScroll (aBlockLocation)
            }
        }
    }
    document.onmouseup = function (ev) {
        document.onmousemove = null;
    }
    function textScroll (aBlockLocation) {
        text.style.top = - aBlockLocation/247 * (text.clientHeight-347) + 'px';
        aBlock.style.top = aBlockLocation + 'px';
    }
}
