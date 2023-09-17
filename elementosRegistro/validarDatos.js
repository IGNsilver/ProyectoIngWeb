$(document).ready(function() {
    console.log("Contenido agregado");  // mensaje de confirmación

    // funciones para validar un rut chileno.
    var validarRut = function(rutCompleto) {
        if (!/^[0-9]+-[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        
        var tmp = rutCompleto.split('-');
        var digv = tmp[1]; 
        var rut = tmp[0];
        if ( digv == 'K' ) digv = 'k' ;
            if (dv(rut) == digv)
                return true; 
        
        return false;
    }; 
    
    var dv = function(rut) {
        var M = 0, S = 1;
        
        for (; rut; rut = Math.floor(rut / 10))
            S = (S + rut % 10 * (9 - M++ % 6)) % 11;
        
        return S ? S - 1 : 'k';
    };

    // Validación de formulario de registro
    $("#registroForm").validate({
        rules: {
            rut: {
                validarRut: true
            },
            confirmPassword: {
                equalTo: "#password"
            }
        },
        messages: {
            nombreUsuario: "Introduce tu nombre.",
            rut: "Introduce tu RUT.",
            email: "Introduce un email válido.",
            password: "Introduce tu contraseña.",
            confirmPassword: {
                required: "Confirma tu contraseña.",
                equalTo: "Las contraseñas no coinciden."
            },
            region: "Seleccione una región.",
            comuna: "Selecciona una comuna.",
            terms: "Debes aceptar los términos y condiciones."
        }
    });
});