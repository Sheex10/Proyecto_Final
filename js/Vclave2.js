$(document).ready(function(){
    $("#loginform").submit(function(e){
        e.preventDefault();
        var contrasena = $("#clave").val();
        var confirmacion = $("#confirmacion").val();



        let mensaje = "";
        let enviar = false;

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
         //validar confirmacion password
        if(confirmacion.trim().length < 8 || confirmacion.trim().length > 12){
            mensaje = mensaje + "<br>Confirmacion: Debe tener entre 8 y 12 caracteres.";
            enviar = true;
        }

        if(confirmacion.trim()  == ""){
            mensaje += "<br>Confirmacion: No puede estar vacia.";
            enviar = true;
        }

        if (!confirmacion.match(/([A-Z])/)){
           mensaje += "<br>Confirmacion: Debe contener al menos una mayuscula.";
            enviar = true;
        }
        if (!confirmacion.match(/([a-z])/)){
            mensaje += "<br>Confirmacion: Debe contener al menos una minuscula.";
             enviar = true;
         }

         if (!confirmacion.match(/([0-9])/)){
            mensaje += "<br>Confirmacion: Debe contener al menos un digito numerico.";
            enviar = true;
        }

        if (!confirmacion.match(/([@,#,.,,])/)){
            mensaje += "<br>Confirmacion:Debe contener un simbolo o caracter especial (@,#,.,,)";
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