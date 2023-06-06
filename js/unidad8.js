var infoCamara = document.getElementById('conte2_b2')

function textCamara() {
    infoCamara.style.display = 'block'
}

var imgCamara = document.getElementById('conte2_b1')

function ocultarImg() {
    imgCamara.style.display = 'none'
}

function cerrarCamara() {
    infoCamara.style.display = 'none'
}

function mostrarImg() {
    imgCamara.style.display = 'block'
}

//Inicio de Pantalla Chica

var infoPantalla = document.getElementById('conte2_c2')

function textPantalla() {
    infoPantalla.style.display = 'block'
}

var imgPantalla = document.getElementById('conte2_c1')

function ocultarImgPantalla() {
    imgPantalla.style.display = 'none'
}

//Inicio Pantalla Grand

function ocultarInfoPantalla() {
    infoPantalla.style.display = 'none'
}

var infoPantallaGrand = document.getElementById('conte2_c3')

function textPantallaGrand() {
    infoPantallaGrand.style.display = 'block'
}

//Volver a Pantalla

function ocultarInfoPantallaGrand() {
    infoPantallaGrand.style.display = 'none'
}

function mostrarPantalla() {
    imgPantalla.style.display = 'block'
}

//Chip info

var infoChip = document.getElementById('conte2_d2')

function mostrarInfoChip() {
    var edad = prompt('Indique su edad en números')

    if (edad>=18) {
        infoChip.style.display = 'block' 
    }
   else {
        alert('Para ver el contenido debe ser mayor de 18 años')
        assert(imgChip.style.display = 'block')
   }
}

var imgChip = document.getElementById('conte2_d1')

function ocultarImgChip() {
    imgChip.style.display = 'none'
}

//Chip Salir

function ocultarInfoChip() {
    infoChip.style.display = 'none'
}

function mostrarImgChip() {
    imgChip.style.display = 'block'
}

//Colores Almacenamientos - Mostrar más info

var infoColores = document.getElementById('conte2_a2')

function mostrarColores() {
    infoColores.style.display = 'block'
}

var imgColores = document.getElementById('conte2_a1')

function ocultarImgColores() {
    imgColores.style.display = 'none'
}

//Colores Almacenamientos - Ocultar más info

function ocultarColores() {
    infoColores.style.display = 'none'
}

function mostrarImgColores() {
    imgColores.style.display = 'block'
}