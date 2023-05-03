// Obtenemos los elementos de la clase "column" de  nuestro div
var elements = document.getElementsByClassName("column")
// Declaracion de  variable para un ciclo for
var i;
// Generacion de un vista de lista
function listView(){
    for(i=0; i < elements.length; i++){
        elements[i].style.width = "100%"
    }
}

// Generacion de vista en cuadro
function gridView(){
    for(i=0; i < elements.length; i++){
        elements[i].style.width = "45%"
    }
}
