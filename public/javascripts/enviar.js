$(document).ready(function () {
    $("#boton").click(function () {
        enviar();
        console.log('this:', this);
    })
    
})

function enviar() {
    var campo = $("#mensaje")
    $.ajax({
        type: "POST",
        url: "/escribir",
        data: {
            palabra: campo.val().toLowerCase()
        }
    }).done(function (data) {
        campo.val("")
        alert("ya se esta mostrando su mensaje en la matrix led");
        console.log('data:', data);
    })
}