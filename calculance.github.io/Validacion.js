class Validacion {

    fecha= new Date();
    expresiones= {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        id: /^\d{7,10}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        contacto: /^\d{10}$/ // 7 a 14 numeros.
    }
    
    validacionInput = (e) => {

        switch (e.target.id) {
            case "nombre":
                if (this.expresiones.nombre.test(e.target.value)) {
                    document.getElementById("errorNombre").classList.remove("mensaje_error-activo");
                    document.getElementById("nombre").style.borderBottom = "2px solid #000";
                } else {
                    document.getElementById("errorNombre").classList.add("mensaje_error-activo");
                    document.getElementById("nombre").style.borderBottom = "2px solid red";
                }    
            break;
            case "identificacion":
                if (this.expresiones.id.test(e.target.value)) {
                    document.getElementById("errorId").classList.remove("mensaje_error-activo");
                    document.getElementById("identificacion").style.borderBottom = "2px solid #000";
                } else {
                    document.getElementById("errorId").classList.add("mensaje_error-activo");
                    document.getElementById("identificacion").style.borderBottom = "2px solid red";
                }    
            break;
            case "contacto":
                if (this.expresiones.contacto.test(e.target.value)) {
                    document.getElementById("errorCel").classList.remove("mensaje_error-activo");
                    document.getElementById("contacto").style.borderBottom = "2px solid #000";
                } else {
                    document.getElementById("errorCel").classList.add("mensaje_error-activo");
                    document.getElementById("contacto").style.borderBottom = "2px solid red";
                }    
            break;
            case "email":
                if (this.expresiones.email.test(e.target.value)) {
                    document.getElementById("errorEmail").classList.remove("mensaje_error-activo");
                    document.getElementById("email").style.borderBottom = "2px solid #000";
                } else {
                    document.getElementById("errorEmail").classList.add("mensaje_error-activo");
                    document.getElementById("email").style.borderBottom = "2px solid red";
                }    
            break;
            default:
                alert("Debe llenar todos los campos");
        }
    }

    validacionSelect = (e) => {
        switch (e.target.name) {
            case "area":
                if (e.target.value === "0") {
                    document.getElementById("errorArea").classList.add("mensaje_error-activo");  
                    document.getElementById("area").style.borderBottom = "2px solid red";
                } else {
                    document.getElementById("errorArea").classList.remove("mensaje_error-activo");
                    document.getElementById("area").style.borderBottom = "2px solid #000";           
                }    
            break;
            case "cargo":
                if (e.target.value === "0") {
                    document.getElementById("errorCargo").classList.add("mensaje_error-activo"); 
                    document.getElementById("cargo").style.borderBottom = "2px solid red"; 
                } else {
                    document.getElementById("errorCargo").classList.remove("mensaje_error-activo"); 
                    document.getElementById("cargo").style.borderBottom = "2px solid #000";                     
                }    
            break;
            case "ubicacion":
                if (e.target.value === "0") {
                    document.getElementById("errorUbicacion").classList.add("mensaje_error-activo");  
                    document.getElementById("ubicacion").style.borderBottom = "2px solid red"; 
                } else {
                    document.getElementById("errorUbicacion").classList.remove("mensaje_error-activo");  
                    document.getElementById("ubicacion").style.borderBottom = "2px solid #000";                              
                }    
            break;
            default:
                alert("Debe llenar todos los campos");
        }
    }

    validacionFecha(e){
        let dia = this.fecha.getDate().toString();
        if(dia.length <= 1){
            dia = "0" + dia; 
        }
        let mes = (this.fecha.getMonth() + 1).toString();
        if(mes.length <= 1){
            mes = "0" + mes;
        }
        let fechaActual = `${this.fecha.getFullYear()}-${mes}-${dia}`;

        switch (e.target.id) {
            case "fechaInput":
                if (e.target.value >= fechaActual) {
                    document.getElementById("horario").classList.add("horario-activo");
                    document.getElementById("errorFecha").classList.remove("mensaje_error-activo");
                    document.getElementById("fechaInput").style.borderBottom = "2px solid #000";
                } else {
                    document.getElementById("errorFecha").classList.add("mensaje_error-activo");
                    document.getElementById("horario").classList.remove("horario-activo");
                    document.getElementById("errorHora").classList.remove("mensaje_error-activo");
                    document.getElementById("fechaInput").style.borderBottom = "2px solid red"; 
                }
            break;
            case "hora2":
                if (e.target.value > document.getElementById("hora1").value){
                    document.getElementById("errorHora").classList.remove("mensaje_error-activo");
                    document.getElementById("hora2").style.border = "#000";
                } else {
                    document.getElementById("errorHora").classList.add("mensaje_error-activo");
                    document.getElementById("hora2").style.border = "red"; 
                }
            break;
            default:
               alert("Debe llenar todos los campos");
        }
    }
}