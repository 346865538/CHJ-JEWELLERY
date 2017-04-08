
var select_btn = document.getElementsByClassName('select_btn');
var select_list = document.getElementsByClassName('select_list');
var select_items = document.getElementsByClassName('select_items');
for(var i = 0 ; i < select_btn.length;i++){
    select_btn[i].index = i ;
    select_btn[select_btn[i].index].onclick = function(){
        for(var j = 0 ; j < select_list.length ; j++){
            if(j == this.index){
                if(select_list[j].style.display == "block"){
                    select_list[j].style.display = "none";
                }else{
                    select_list[j].style.display = "block";
                }
            }
        }
    }
}
for(var i = 0; i < select_items.length ; i++){
    select_items[i].index = i ;
    select_items[select_items[i].index].onclick = function(){
        console.log(this.innerHTML)
    }
}