$(document).ready(function() {
    $("#loginForm").validate({
            rules: {
                loginEmail: {
                    required: true,
                    email: true
                },
                loginPassword: {
                    required: true,
                    minlength: 6
                }
            },
            messages: {
                loginEmail: {
                    required: "Introduce tu correo electrónico.",
                    email: "Tu correo esta mal escrito, intentalo denuevo."
                },
                loginPassword: {
                    required: "Introduce tu contraseña.",
                    minlength: "Tu contraseña es incorrecta, intentalo denuevo."
                }
            }
        });
    });