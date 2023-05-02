$(document).ready(function(){
    $("#loginform").submit(function(e){
        e.preventDefault();
        var usuario = $("#usuario").val();
        var contrasena = $("#clave").val();

        let mensaje = "";
        let enviar = false;

        //Validar Usuario
        if(usuario.trim().length < 4 || usuario.trim().length > 10){
            mensaje += "<br>Usuario: El usuario debe tener al menos 4 a 10 caracteres";
            enviar = true;
        }
        if (!usuario.match(/([A-Z])/)){
            mensaje += "<br>Usuario: Debe contener al menos una mayuscula.";
             enviar = true;
         }
         if (!usuario.match(/([a-z])/)){
             mensaje += "<br>Usuario: Debe contener al menos una minuscula.";
              enviar = true;
          }
          /*
        var letra=usuario.charAt(0);
        if(!esMayuscula(letra)){
            mensaje+= "<br>Usuario: El primer caracter debe ser mayuscula";
            enviar=true;
        }*/
        //Validar password
        if(contrasena.trim().length < 8 || contrasena.trim().length > 12){
            mensaje = mensaje + "<br>Contraseña: Debe tener entre 8 y 12 caracteres.";
            enviar = true;
        }

        if(contrasena.trim()  == ""){
            mensaje += "<br>Contraseña: No puede estar vacia.";
            enviar = true;
        }

        if (!contrasena.match(/([A-Z])/)){
           mensaje += "<br>Contraseña: Debe contener al menos una mayuscula";
            enviar = true;
        }
        if (!contrasena.match(/([a-z])/)){
            mensaje += "<br>Contraseña: Debe contener al menos una minuscula.";
             enviar = true;
         }

         if (!contrasena.match(/([0-9])/)){
            mensaje += "<br>Contraseña: Debe contener al menos un digito numerico.";
            enviar = true;
         }

        if (!contrasena.match(/([@,#,.,,])/)){
            mensaje += "<br>Contraseña: Debe contener un simbolo o caracter especial (@,#,.,,)";
            enviar = true;
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
