function validar(){
    var nombre, apellido, direccion, ciudad, telefono, mail, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    direccion = document.getElementById("direccion").value;
    ciudad = document.getElementById("ciudad").value;
    telefono = document.getElementById("telefono").value;
    mail = document.getElementById("mail").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellido === "" || direccion === "" || ciudad === "" || telefono === "" || mail === ""){
        alert("Todavia hay campos vacíos")
        return false;
    }
    else if(nombre.length>20){
        alert("El nombre es muy largo")
        return false;
    }
    else if(apellido.length>30){
        alert("El apellido es muy largo")
        return false;
    }
    else if(telefono.length>25){
        alert("El numero de telefono es muy largo")
        return false;
    }
    else if(isNaN(telefono)){
        alert("El dato ingresado en telefono no es un número")
        return false;
    }
    else if(mail.length>100){
        alert("El e-mail es muy largo")
        return false;
    }
    else if(!expresion.test(mail)){
        alert("El correo no es válido")
        return false;
    }
    
 }
 //expresion= expresiones regulares letres+@letras+.(punto)letras(com, es)

 function contactoValido() {
    var nombreC, apellidoC, mailC, expresion;
    nombreC = document.getElementById("nombreC").value;
    apellidoC = document.getElementById("apellidoC").value;
    mailC = document.getElementById("mailC").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombreC === "" || apellidoC === "" || mailC === ""){
        alert("Todavia hay campos vacíos")
        return false;
    }
   
    else if(nombreC.length>20){
        alert("El nombre es muy largo")
        return false;
    }
    else if(apellidoC.length>25){
        alert("El apellido es muy largo")
        return false;
    }
    else if(mailC.length>100){
        alert("El e-mail es muy largo")
        return false;
    }
    else if(!expresion.test(mailC)){
        alert("El correo no es válido")
        return false;
    }
 }
  
