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
        var errorDiv = document.getElementById('error');
        var btnRegistro = document.getElementById('btnRegistro');
        var lista_Productos= document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');


        //Extras 
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');
        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('blur',mostrardias);
        pase_dosdia.addEventListener('blur',mostrardias);
        pase_completo.addEventListener('blur',mostrardias);

        nombre.addEventListener('blur',validarCampos);
        apellido.addEventListener('blur',validarCampos);
        email.addEventListener('blur',validarCampos);
        email.addEventListener('blur',validarMail);


        function validarCampos(){
            if(this.value ==''){
                errorDiv.style.display='block';
                errorDiv.innerHTML = "Este campo es obliagatorio";
                this.style.border ='1px solid red';
                errorDiv.style.border ='1px solid red';
            }else{
                errorDiv.style.display = 'none';
                this.style.border ='1px solid #cccccc';

            }
        }
      function validarMail(){
          if(this.value.length >=1){
            if(this.value.indexOf("@")> -1){
                errorDiv.style.display = 'none';
                this.style.border ='1px solid #cccccc';
              }else{
                errorDiv.style.display='block';
                errorDiv.innerHTML = "Debe contener @";
                this.style.border ='1px solid red';
                errorDiv.style.border ='1px solid red';
              }
          }
         

      }

        // funcion que nos calcula el dinero y lo muestra en el html
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

                   lista_Productos.style.display = 'block';
                    lista_Productos.innerHTML ='';
                    for(var i=0; i<listadoProductos.length; i++)
                    lista_Productos.innerHTML += listadoProductos[i] + '<br/>';
            }
            suma.innerHTML = "$ " + totalPagar.toFixed(2);
             
        }
        // funcion que nos despliga los dias de acuerdo al boleto que solicitemos
        function mostrardias(){
            console.log('has hecho click');
            var boletosDia =  parseInt(pase_dia.value,10)||0,
            boletos2Dias = parseInt(pase_dosdia.value,10)||0,
            boletoCompleto = parseInt(pase_completo.value,10)||0;
            
            var diasElegidos= [];
            
            if (boletosDia > 0){
                diasElegidos.push('viernes');
                console.log(diasElegidos);
            }
            if(boletos2Dias > 0){
                diasElegidos.push('viernes','sabado');
                console.log(diasElegidos);
            }
            if(boletoCompleto > 0){
                diasElegidos.push('viernes','sabado','domingo');
                console.log(diasElegidos);
            }
            for(var i = 0; i < diasElegidos.length; i++){
                document.getElementById(diasElegidos[i]).style.display='block';
            }

        }

  
    }); //Dom Content loaded
})();