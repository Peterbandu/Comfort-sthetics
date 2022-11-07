/*FUNCIÓN PARA HABILITAR E INHABILITAR BOTÓN SUBMIT*/
var check = document.getElementById('checkterms');
var boton = document.getElementById('botonsubmit');
boton.disabled = true;

obtenercookies();
check.addEventListener("change", validarcheck);


function validarcheck() {

    var checkchecked = check.checked;

    if (checkchecked) {

        boton.disabled = false;
    } else {

        boton.disabled = true;
    }

}

/*CONTADOR DE TEXTAREA*/
const textarea = document.getElementById('textarea');
const contador = document.getElementById('contador');

textarea.addEventListener('input', function(e) {

    const target = e.target;
    const maxlenght = target.getAttribute('maxlenght');
    const longitud = target.value.length;

    contador.innerHTML = `${longitud}/${maxlenght}`;

    if (longitud = maxlenght) {
        contador.setAttribute("style", "color: red;");
    }

})


/*FUNCIÓN PARA HACER MAYÚSCULA LAS PRIMERAS LETRAS*/
function letramayuscula() {
    var inombre = document.getElementById('form_nombre');
    var iapellido = document.getElementById('form_apellido');
    let letrap_nombre = inombre.value;
    let letrap_apellido = iapellido.value;


    inombre.value = letrap_nombre[0].toUpperCase() + letrap_nombre.slice(1);
    iapellido.value = letrap_apellido[0].toUpperCase() + letrap_apellido.slice(1);

}

/*FUNCIÓN PARA COMPARAR CONFIRMACIÓN DE EMAIL*/
function compararecontraseña() {

    var password1 = document.getElementById('form_password1').value;
    var password2 = document.getElementById('form_password2').value;
    var mensaje = document.getElementById('mensajecomparacion');

    if (password2 === password1) {

        mensaje.innerHTML = '¡Todo parece bien!';
        mensaje.setAttribute("style", "color: green;");
    } else {

        mensaje.innerHTML = '¡Revise la contraseña ingresada sea igual a la anterior!';
        mensaje.setAttribute("style", "color: red;");
    }
}

/*FUNCIONES PARA HACER APARECER Y DESAPARECER MODAL*/

let ventana_modal = document.getElementById('modal');

function vermodal() {

    ventana_modal.classList.remove('d-none');
}

function cerrarmodal() {

    ventana_modal.classList.add('d-none');
}

/*FUNCIÓN PARA BORRAR TODO*/


function borrartodo() {
    ventana_modal.classList.add('d-none');
    let nombre = document.getElementById('form_nombre');
    let apellido = document.getElementById('form_apellido');
    let password1 = document.getElementById('form_password1');
    let password2 = document.getElementById('form_password2');
    let comentario = document.getElementById('textarea');
    let mensajecoincidencia = document.getElementById('mensajecomparacion');
    let email = document.getElementById('form_email');


    nombre.value = '';
    apellido.value = '';
    password1.value = '';
    password2.value = '';
    comentario.value = '';
    mensajecoincidencia.innerHTML = '';
    email.value = '';
}




function crearcookie() {

    let nombre = document.getElementById('form_nombre').value;
    let apellido = document.getElementById('form_apellido').value;
    let password1 = document.getElementById('form_password1').value;
    let password2 = document.getElementById('form_password2').value;
    let comentario = document.getElementById('textarea').value;
    let mensaje2 = document.getElementById('mensaje2');
    let email = document.getElementById('form_email').value;



    if (password2 === password1) {
        mensaje2.innerHTML = '';
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('apellido', apellido);
        localStorage.setItem('password1', password1);
        localStorage.setItem('password2', password2);
        localStorage.setItem('comentario', comentario);
        localStorage.setItem('email', email);

    } else {
        mensaje2.setAttribute('style', 'color: red;');
        mensaje2.innerHTML = 'Revisa la información suministrada';
    }
}

function obtenercookies() {
    let nombre_inicial = localStorage.getItem("nombre");
    let apellido_inicial = localStorage.getItem("apellido");
    let password1 = localStorage.getItem("password1");
    let password2 = localStorage.getItem("password2");
    let comentario_inicial = localStorage.getItem("comentario");
    let email_inicial = localStorage.getItem("email");


    let nombre = document.getElementById('form_nombre');
    let apellido = document.getElementById('form_apellido');
    let password1_i = document.getElementById('form_password1');
    let password2_i = document.getElementById('form_password2');
    let comentario = document.getElementById('textarea');
    let email = document.getElementById('form_email');


    nombre.value = nombre_inicial;
    apellido.value = apellido_inicial;
    password1_i.value = password1;
    password2_i.value = password2;
    comentario.value = comentario_inicial;
    email.value = email_inicial;


}