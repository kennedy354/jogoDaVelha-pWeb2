const btnNovoJogo = document.querySelector("button")

const casa1 = document.querySelector("#casa_101")
const casa2 = document.querySelector("#casa_102")
const casa3 = document.querySelector("#casa_103")
const casa4 = document.querySelector("#casa_201")
const casa5 = document.querySelector("#casa_202")
const casa6 = document.querySelector("#casa_203")
const casa7 = document.querySelector("#casa_301")
const casa8 = document.querySelector("#casa_302")
const casa9 = document.querySelector("#casa_303")

var player = 1
var travarInput = 0
var pontosErrados1=0
var pontosErrados2=0

document.getElementById("pontos_player_1").textContent = `J1 - ${pontosErrados1} Pontos`
document.getElementById("pontos_player_2").textContent = `J2 - ${pontosErrados2} Pontos`

btnNovoJogo.onclick = function(e){
    document.getElementById("casa_101").className = "casa v";
    document.getElementById("casa_102").className = "casa v";
    document.getElementById("casa_103").className = "casa v";
    document.getElementById("casa_201").className = "casa v";
    document.getElementById("casa_202").className = "casa v";
    document.getElementById("casa_203").className = "casa v";
    document.getElementById("casa_301").className = "casa v";
    document.getElementById("casa_302").className = "casa v";
    document.getElementById("casa_303").className = "casa v";

    travarInput = 0
    player = 1
}

function checarVencedor1(){
    if( ((document.getElementById("casa_101").className == "casa x") && (document.getElementById("casa_102").className == "casa x") && (document.getElementById("casa_103").className == "casa x"))
     || ((document.getElementById("casa_201").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_203").className == "casa x"))
     || ((document.getElementById("casa_301").className == "casa x") && (document.getElementById("casa_302").className == "casa x") && (document.getElementById("casa_303").className == "casa x"))
     || ((document.getElementById("casa_101").className == "casa x") && (document.getElementById("casa_201").className == "casa x") && (document.getElementById("casa_301").className == "casa x")) 
     || ((document.getElementById("casa_102").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_302").className == "casa x")) 
     || ((document.getElementById("casa_103").className == "casa x") && (document.getElementById("casa_203").className == "casa x") && (document.getElementById("casa_303").className == "casa x")) 
     || ((document.getElementById("casa_101").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_303").className == "casa x")) 
     || ((document.getElementById("casa_103").className == "casa x") && (document.getElementById("casa_202").className == "casa x") && (document.getElementById("casa_301").className == "casa x"))){
        pontosErrados1++
        document.getElementById("pontos_player_1").textContent = `J1 - ${pontosErrados1} Pontos`
        tudoX()
    }
}
function checarVencedor2(){
    if( ((document.getElementById("casa_101").className == "casa o") && (document.getElementById("casa_102").className == "casa o") && (document.getElementById("casa_103").className == "casa o"))
     || ((document.getElementById("casa_201").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_203").className == "casa o")) 
     || ((document.getElementById("casa_301").className == "casa o") && (document.getElementById("casa_302").className == "casa o") && (document.getElementById("casa_303").className == "casa o")) 
     || ((document.getElementById("casa_101").className == "casa o") && (document.getElementById("casa_201").className == "casa o") && (document.getElementById("casa_301").className == "casa o")) 
     || ((document.getElementById("casa_102").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_302").className == "casa o")) 
     || ((document.getElementById("casa_103").className == "casa o") && (document.getElementById("casa_203").className == "casa o") && (document.getElementById("casa_303").className == "casa o")) 
     || ((document.getElementById("casa_101").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_303").className == "casa o")) 
     || ((document.getElementById("casa_103").className == "casa o") && (document.getElementById("casa_202").className == "casa o") && (document.getElementById("casa_301").className == "casa o"))){
        pontosErrados2++
        document.getElementById("pontos_player_2").textContent = `J2 - ${pontosErrados2} Pontos`
        tudoX()
    }
}
function checarVencedores(){
    if(travarInput==0){
        checarVencedor1()
        checarVencedor2()
    }
}
function tudoX(){
    document.getElementById("casa_101").className = "casa x";
    document.getElementById("casa_102").className = "casa o";
    document.getElementById("casa_103").className = "casa x";
    document.getElementById("casa_201").className = "casa o";
    document.getElementById("casa_202").className = "casa x";
    document.getElementById("casa_203").className = "casa o";
    document.getElementById("casa_301").className = "casa x";
    document.getElementById("casa_302").className = "casa o";
    document.getElementById("casa_303").className = "casa x";

    travarInput = 1
}

casa1.onclick = function(e) {
    if(document.getElementById("casa_101").className == "casa v"){
        if (player==1){
            document.getElementById("casa_101").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_101").className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}
casa2.onclick = function(e) {
    if(document.getElementById("casa_102").className == "casa v"){
        if (player==1){
            document.getElementById("casa_102").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_102").className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}
casa3.onclick = function(e) {
    if(document.getElementById("casa_103").className == "casa v"){
        if (player==1){
            document.getElementById("casa_103").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_103").className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}
casa4.onclick = function(e) {
    if(document.getElementById("casa_201").className == "casa v"){
        if (player==1){
            document.getElementById("casa_201").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_201").className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}
casa5.onclick = function(e) {
    if(document.getElementById("casa_202").className == "casa v"){
        if (player==1){
            document.getElementById("casa_202").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_202").className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}
casa6.onclick = function(e) {
    if(document.getElementById("casa_203").className == "casa v"){
        if (player==1){
            document.getElementById("casa_203").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_203").className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}
casa7.onclick = function(e) {
    if(document.getElementById("casa_301").className == "casa v"){
        if (player==1){
            document.getElementById("casa_301").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_301").className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}
casa8.onclick = function(e) {
    if(document.getElementById("casa_302").className == "casa v"){
        if (player==1){
            document.getElementById("casa_302").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_302").className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}
casa9.onclick = function(e) {
    if(document.getElementById("casa_303").className == "casa v"){
        if (player==1){
            document.getElementById("casa_303").className = "casa x";
            player = 2
        }
        else if (player==2){
            document.getElementById("casa_303").className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}