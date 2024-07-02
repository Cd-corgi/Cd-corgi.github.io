let tenerTexto = document.getElementById("texto");
let salidaTexto = document.getElementById("resu");
let errorL = document.getElementById("advertencia");
let errorL1 = document.getElementById("ad1");
let errorL2 = document.getElementById("ad2");
let copiarBoton = document.getElementById("copy")
const diccionario = { "a": "1", "e": "2", "i": "3", "o": "4", "u": "5", "A": "6", "E": "7", "I": "8", "O": "9", "U": "0", }

tenerTexto.value = ""
salidaTexto.value = ""

// window.onresize = function () {
//     location.reload()
// }

if (tenerTexto.value.length <= 1) {
    errorL.removeAttribute("hidden")
    errorL2.removeAttribute("hidden")
    errorL1.innerHTML = "Ningún mensaje fue<br>encontrado"
    salidaTexto.style.opacity = 0
    copiarBoton.style.display = "none"
}

function invocar(numero) {
    if (tenerTexto.value.length < 1) {
        errorL.removeAttribute("hidden")
        return;
    } else {
        errorL.setAttribute("hidden", true)
        errorL1.innerHTML = ""
        errorL2.setAttribute("hidden", true)
        copiarBoton.style.display = "flex"
        encriptado(tenerTexto.value, numero)
    }
}

function limpiarTexto() {
    tenerTexto.value = ""
    salidaTexto.value = ""
    errorL.removeAttribute("hidden")
    salidaTexto.style.opacity = 0
}

/**
 * 
 * @param {string} texto Añade el texto a ejecutar su función
 * @param {number} funcion 0 = encriptar | 1 = desencriptar
 */
function encriptado(texto, funcion) {
    salidaTexto.style.opacity = 1
    var resultado = ""
    switch (funcion) {
        case 0:
            const transformar = { 1: "ai", 2: "enter", 3: "imes", 4: "ober", 5: "ufat", 6: "AI", 7: "ENTER", 8: "IMES", 9: "OBER", 0: "UFAF", }
            resultado = texto.replace(/[aeiouAEIOU0-9]/g, (match) => diccionario[match])
            resultado = resultado.replace(/[0-9]/g, (match) => transformar[match])
            salidaTexto.value = resultado.length < 1 ? "" : resultado
            break;
        case 1:
            const detransformar = { "ai": "a", "enter": "e", "imes": "i", "ober": "o", "ufat": "u", "AI": "A", "ENTER": "E", "IMES": "I", "OBER": "O", "UFAF": "U", }
            resultado = texto.replace(/(ai|enter|imes|ober|ufat|AI|ENTER|IMES|OBER|UFAF)/gm, (match) => detransformar[match])
            salidaTexto.value = resultado.length < 1 ? "" : resultado
            break;
    }
    if (window.innerWidth <= 991 && window.innerWidth >= 300) {
        salidaTexto.style.height = '5px'
        salidaTexto.style.height = salidaTexto.scrollHeight + 'px';
    }
}

function copiar() {
    try {
        salidaTexto.removeAttribute("disabled")
        salidaTexto.select()
        document.execCommand("copy")
        salidaTexto.setAttribute("disabled", true)
    } catch (error) {
        alert(error)
    }
}