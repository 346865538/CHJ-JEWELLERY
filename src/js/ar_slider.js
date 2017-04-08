/**
 * Created by lanou on 17/3/30.
 */
var rightA = document.getElementsByClassName('ar_rightA')[0];
var leftA = document.getElementsByClassName('ar_leftA')[0];
var wrap = document.getElementsByClassName('ar_wrap')[0];
var isRoll = false;
wrap.style.left = '-1000px';
//wrap.className = "ar_wrap";
var num = 0 ;
leftA.onclick = function(){
    if(isRoll){
        return;
    }
    isRoll = true;
    setTimeout(function(){
        isRoll = false
    },450)
    if(wrap.className = "ar_wrap"){
        wrap.className = "ar_wrap donghua"
    }
    if(num == 4){
        setTimeout(function(){
            num = -6
            wrap.className = "ar_wrap";
            wrap.style.left = num*200-1000+'px';
            setTimeout(function(){
                wrap.className = "ar_wrap donghua";
            },10)
        },450)
    }
    num ++;
    wrap.style.left = num*200-1000+'px';
}
rightA.onclick = function(){
    if(isRoll){
        return;
    }
    isRoll = true;
    setTimeout(function(){
        isRoll = false
    },450)
    if(wrap.className = "ar_wrap"){
        wrap.className = "ar_wrap donghua"
    }
    if(num == -11){
        setTimeout(function(){
            num = -1
            wrap.className = "ar_wrap";
            wrap.style.left = num*200-1000+'px';
            setTimeout(function(){
                wrap.className = "ar_wrap donghua";
            },10)
        },450)
    }
    num --;
    wrap.style.left = num*200-1000+'px';
}
