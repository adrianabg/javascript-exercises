'use strict'

function marcarOpcio(seleccionada){
    document.getElementById("rating").onclick
    console.log("Me has dado click:"+seleccionada);
 
    for(var i = 1; i <= 5; i++){
        var rating = document.getElementById("corb"+i);
 
        if(seleccionada <=i){
            rating.style.color = "black";
        }else{
           rating.style.color = "white";
        }
    }
}

var container = document.getElementById("rating");

document.addEventListener("click", function(event) { 
    if(event.target.closest("#rating")) return; 
        document.getElementById("corb1").style.color = "white";
        document.getElementById("corb2").style.color = "white";
        document.getElementById("corb3").style.color = "white";
        document.getElementById("corb4").style.color = "white";
        document.getElementById("corb5").style.color = "white";
});

