//https://replit.com/@joseolinda/jogoDaVelha

//https://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript

//https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript


const elemm = document.querySelector("#casa_101")

elemm.onclick = function() { alert('blah'); };

elemm.onclick = function() { document.getElementById("casa_101").className = "casa x";};

if ( document.getElementById("casa_101").className == "casa x" ){
    elemm.onclick = function() { document.getElementById("casa_101").className = "casa o";};
}
