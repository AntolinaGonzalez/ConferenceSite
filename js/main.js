
(function(){
    'use strict';
    var regalo= document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){  
        
    //campos datos usuarios
    var nombre= document.getElementById('nombre');
    var apellido=document.getElementById('apellido');
    var email=document.getElementById('email');
    //campos pases
    var pase_dia= document.getElementById('pase_dia');
    var pase_completo= document.getElementById('pase_dia');
    var pase_2dia= document.getElementById('pase_dia');

    //botones y divs
    var calcular= document.getElementById('calcular');
    var errorDiv= document.getElementById('Error');
    var botonRegistro=document.getElementById('btnRegistro');
    var lista_productos=document.getElementById('Lista_productos');
    var suma= document.getElementById('suma-total');
    //Extras
    
    var camisas=document.getElementById('camisa_evento');
    var etiquetas=document.getElementById('etiqueta');

    botonRegistro.disabled = true;

    if(document.getElementById('calcular')){

    calcular.addEventListener('click', calcularMontos);
    pase_dia.addEventListener('blur', mostrarDias);
    pase_2dias.addEventListener('blur', mostrarDias);
    pase_complet.addEventListener('blur', mostrarDias);

    nombre.addEventListener('blur',validarCampos);
    apellido.addEventListener('blur', validarCampos);
    email.addEventListener('blur',validarCampos);

    email.addEventListener('blur',validarMail);

    function validarCampos(){
        if (this.value==''){
            errorDiv.style.display='block';
            errorDiv.innerHTML='Este campo es obligatorio';
            this.style.border='2px solid red';
        } else{
            errorDiv.style.display='none';
            this.style.border='2px solid #cccccc'
        }
    }

    function validarMail(){
        if(this.value.indexOf("@")>-1){
            errorDiv.style.display='none';
            this.style.border='2px solid #cccccc'
        }else{
            errorDiv.style.display='block';
            errorDiv.innerHTML='Email invalido';
            this.style.border='2px solid red';
        }
    }

    function calcularMontos(event){
        event.preventDefault();
       // console.log('has hecho click en calcular');
       if (regalo.value==''){
           alert('debes elegir un regalo');
           regalo.focus();
       } else{
        var boletoDia=parseInt(pase_dia.value,10) || 0;
        var boleto2Dias= parseInt(pase_2dias.value,10) || 0;
        var boletoCompleto=parseInt(pase_complet.value,10) || 0;
        var cantCamisas= parseInt(camisas.value,10) || 0;
        var cantEtiquetas= parseInt(etiquetas.value,10) ||0;
        var totalPagar=(boletoDia*30)+(boleto2Dias*45)+(boletoCompleto*50)+(0.93*(cantCamisas*10))+(cantEtiquetas*2);
        console.log(totalPagar);

        var ListadoProductos=[];

        if (boletoDia>0){
            ListadoProductos.push(boletoDia +" Pase por dia" );     
        }
        if (boleto2Dias>0){
            ListadoProductos.push(boleto2Dias +" Pase por dos dia" );
        }
        if (boletoCompleto>0){
            ListadoProductos.push(boletoCompleto +" Pase completo" );
        }
        if (cantCamisas>0){
            ListadoProductos.push(cantCamisas +" Camisas" );
        }
        if (cantEtiquetas >0){
            ListadoProductos.push(cantEtiquetas +" Cantidad de etiquetas" );
        }
        lista_productos.style.display='block';
        lista_productos.innerHTML='';
        for (var i=0; i<ListadoProductos.length; i++){
            lista_productos.innerHTML+= ListadoProductos[i] + '<br/>';
        }

        suma.innerHTML= '$'+ totalPagar.toFixed(2);
        botonRegistro.disabled= false;
        document.getElementById('total_pedido').value= totalPagar;
       }
    }
    function mostrarDias(){
        var boletoDia=parseInt(pase_dia.value,10) || 0;
        var boleto2Dias= parseInt(pase_2dias.value,10) || 0;
        var boletoCompleto=parseInt(pase_complet.value,10) || 0;
       
        var diasElegidos=[];
        if( boletoDia>0){
            diasElegidos.push('viernes');
            console.log(diasElegidos);
        }
        if(boleto2Dias>0){
            diasElegidos.push('viernes','sabado');
            console.log(diasElegidos);
        }
        if(boletoCompleto>0){
            diasElegidos.push('viernes','sabado', 'domingo');
            console.log(diasElegidos);
        }

        for(var i=0; i<diasElegidos.length; i++){
            var mostrar=document.getElementById(diasElegidos[i]);
                mostrar.style.display='block';
        }
    }
}
    });// dom content loaded
})();


$(function(){
    //programa de conferencia

    //Aqui pondria el lettering si tan solo me gustara

    //Menu fijo
    //para que se mantenga en nav en el scroll
    var windowheigh=$(window).height();
    var barraAltura=$('.barra').innerHeight();
   
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if(scroll > windowheigh){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        } else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    });
    
    //Menu responsive

    $('.menu-mobil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });

    //
    $('.programa-evento .info-curso:first').show();
   $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click',function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').fadeOut(1000);
        var enlace= $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;        
    });

    //Animaciones para los numeros

    $('.resumen-evento li:nth-child(1) p').animateNumber({number:6},1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number:15},1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number:3},1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number:9},1500);


    $('.cuenta-regresiva').countdown('2020/6/19 00:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    })

    var map = L.map('mapa').setView([-27.489405, -58.789837], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
    
    L.marker([-27.489405, -58.789837]).addTo(map)
    .bindPopup('GLDWebcam 2020<br> Boletos ya disponibles.')
    .openPopup()
    .bindTooltip('un tooltip')
    .openTooltip();   

});