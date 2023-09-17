$(document).ready(function() {
    console.log("Contenido agregado"); // mensaje de confirmación

    // agregar el contenido a regionesComunas
    for (const region in regionesComunas) {
        $('#region').append(`<option value="${region}">${region}</option>`);
    }

    // cambio de region
    $('#region').change(function() {
        const regionSeleccionada = $(this).val();
        const comunas = regionesComunas[regionSeleccionada];

        // funcion que limpia las comunas
        $('#comuna').empty().append('<option selected disabled value="">Selecciona una comuna...</option>');

        // llena las comunas dependiendo de su region
        comunas.forEach(comuna => {
            $('#comuna').append(`<option value="${comuna}">${comuna}</option>`);
        });
    });
});