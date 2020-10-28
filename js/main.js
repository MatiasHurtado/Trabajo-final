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
        var resultados= document.getElementById('lista-productos');


        calcular.addEventListener('click', calcularMontos);
        

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value ===''){
            alert("Debes elegir un regalo");
            regalo.focus();
            } else {
                var boletosDia = pase_dia.value,
                    boletos2Dias=pase_dosdia.value,
                    boletoCompleto= pase_completo.value;
                    

                    console.log("Boletos Dias "+ boletosDia);
                    console.log("Boletos 2 Dias "+ boletos2Dias);
                    console.log("Boletos Completos "+ boletoCompleto);

                    var totalPagar=(boletosDia * 38) + (boletos2Dias * 45) +(boletoCompleto *50);
                    console.log(totalPagar);
           


            }
            
        }

  
    }); //Dom Content loaded
})();