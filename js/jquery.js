$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        var nombre = $("#nombre").val();
        var contrasena = $("#clave").val();

        let mensaje="";
        let enviar=false;

        if(nombre.trim().length<4 || nombre.trim().lenght>10){
            mensaje+= "El nombre de usuario debe tener al menos 4 a 10 caracteres";
            enviar=true;
        }

        var letra=nombre.charAt(0);
        if(!esMayuscula(letra)){
            mensaje+= "El primer caracter debe ser mayuscula";
            enviar=true;
        }

        if(enviar){
            $("#warnings").html(mensaje);
        }
        else{
            $("#warnings").html("Sesion iniciada");
        }
    });

    function esMayuscula(letra){
        console.log(letra);
        console.log(letra.toUpperCase());
        if(letra == letra.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
         
    }


});