(function(){
    "use strict";

    var regalo=document.getElementById('regalo');
    document.addEventListener("DOMContentLoaded" ,function(){
        //Campos Pases
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //Campos Pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdia = document.getElementById('pase_dosdia');
        var pase_completo = document.getElementById('pase_completo');

        //Botones y divs
        var calcular = document.getElementById('calcular');
        var error = document.getElementById('error');
        var btnRegistro = document.getElementById('btnRegistro');
        var lista_Productos= document.getElementById('lista-productos');


        //Extras 
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');
        calcular.addEventListener('click', calcularMontos);
        

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value ===''){
            alert("Debes elegir un regalo");
            regalo.focus();
            } else {
                var boletosDia =  parseInt(pase_dia.value,10)||0,
                    boletos2Dias = parseInt(pase_dosdia.value,10)||0,
                    boletoCompleto = parseInt(pase_completo.value,10)||0,
                    cantCamisas = parseInt(camisas.value,10)||0,
                    cantEtiquetas = parseInt(etiquetas.value,10)||0;

                    

                 

                    var totalPagar=(boletosDia * 30) + (boletos2Dias * 45) +(boletoCompleto *50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);
                    console.log(totalPagar);
                    var listadoProductos = [];
                    if(boletosDia >=1){
                        listadoProductos.push(boletosDia + ' Pase por dia');
                    }
                    if(boletos2Dias >=1){
                        listadoProductos.push(boletos2Dias + ' Pase por 2 dia');
                    }
                    if(boletoCompleto >=1){
                        listadoProductos.push(boletoCompleto + ' Pase Completo');
                    }
                    if(cantCamisas >=1){
                        listadoProductos.push(cantCamisas + ' Camisas')
                    }
                    if(cantEtiquetas >=1){
                        listadoProductos.push(cantEtiquetas + ' Etiquetas')
                    }




                   
                    lista_Productos.innerHTML ='';
                    for(var i=0; i<listadoProductos.length; i++)
                    lista_Productos.innerHTML += listadoProductos[i] + '<br/>';
            }
             
        }

  
    }); //Dom Content loaded
})();