$(document).ready(function(){
    $('#contenido').append("con jQuery es mas facil")
});

document.addEventListener('DOMContentLoaded',function(event){
    var elemento = document.getElementById('contenido2');
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Con javascript es mas dificil');
    parrafo.appendChild(texto);
    elemento.appendChild(parrafo);

});