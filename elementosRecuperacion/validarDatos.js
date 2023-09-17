// funcion del boton volver
$(document).ready(function() {

    // boton volver
    $("#volverButton").click(function() {
        window.location.href = '../../index.html';
    });
});


$(document).ready(function() {
    console.log("Contenido agregado");  // mensaje de confirmación

    // codigo de 6 digitos correo
    $("#verificarCodigo").validate({
        rules: {
            digit1: {
                required: true,
                digits: true,
                maxlength: 1
            },
            digit2: {
                required: true,
                digits: true,
                maxlength: 1
            },
            digit3: {
                required: true,
                digits: true,
                maxlength: 1
            },
            digit4: {
                required: true,
                digits: true,
                maxlength: 1
            },
            digit5: {
                required: true,
                digits: true,
                maxlength: 1
            },
            digit6: {
                required: true,
                digits: true,
                maxlength: 1
            }
        },
        messages: {
            digit1: "Introduce un dígito válido.",
            digit2: "Introduce un dígito válido.",
            digit3: "Introduce un dígito válido.",
            digit4: "Introduce un dígito válido.",
            digit5: "Introduce un dígito válido.",
            digit6: "Introduce un dígito válido."
        }
    });
});