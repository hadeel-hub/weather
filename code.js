function popMessage(){
    alert("Weather is loading ...");
}

function hide(){
    var x=document.getElementById('move');
   
 x.remove();
}
var tmprtures = document.querySelectorAll('.tempretures');
function celToFeh(deg){
return deg*1.8+32;
}
function fehToCel(deg){
    return (deg-32)*5/9;
}
function degree(element){
    // // console.log(element.value);
    // console.log(tmprtures);
    if(element.value=='Fehrenheit'){
        // change to fehr
        for(var i=0;i<tmprtures.length;i++){
            tmprtures[i].children[0].innerText=parseInt(celToFeh(tmprtures[i].children[0].innerText));
            tmprtures[i].children[1].innerText=parseInt(celToFeh(tmprtures[i].children[1].innerText));
        }

    }
    else if(element.value=='Celsius'){
     for(var i=0; i<tmprtures.length;i++){
        tmprtures[i].children[0].innerText=parseInt(fehToCel(tmprtures[i].children[0].innerText));
        tmprtures[i].children[1].innerText=parseInt(fehToCel(tmprtures[i].children[0].innerText));
     }

        // change to celsius
    }



}


