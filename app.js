let tenerTexto = document.getElementById("texto");
let salidaTexto = document.getElementById("output");
let errorL = document.getElementById("error");
let copiarBoton = document.getElementById("copy")
const diccionario = { "a": "1", "e": "2", "i": "3", "o": "4", "u": "5", "A": "6", "E": "7", "I": "8", "O": "9", "U": "0", }

tenerTexto.addEventListener("input", function () {
    if (tenerTexto.value.length >= 1) {
        tenerTexto.style.backgroundColor = "#686868"
        errorL.setAttribute("hidden", true)
        errorL.innerText = "El texto proporcionado debe tener al menos un carácter"
        errorL.style.color = "#965151"
    } else {
        errorL.removeAttribute("hidden")
        tenerTexto.style.backgroundColor = "#965151"
    }
})

function invocar(numero) {
    if (tenerTexto.value.length < 1) {
        errorL.removeAttribute("hidden")
        errorL.innerText = "El texto proporcionado debe tener al menos un carácter"
        errorL.style.color = "#965151"
        tenerTexto.style.backgroundColor = "#965151"
        return;
    } else {
        tenerTexto.style.backgroundColor = "#686868"
        errorL.setAttribute("hidden", true)
        encriptado(tenerTexto.value, numero)
    }
}

function limpiarTexto() {
    tenerTexto.value = ""
    salidaTexto.value = ""
}

/**
 * 
 * @param {string} texto Añade el texto a ejecutar su función
 * @param {number} funcion 0 = encriptar | 1 = desencriptar
 */
function encriptado(texto, funcion) {
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
}

function copiar() {
    try {
        salidaTexto.removeAttribute("disabled")
        salidaTexto.select()
        document.execCommand("copy")
        copiarBoton.innerText="¡Copiado!"
        setTimeout(() => {
            copiarBoton.innerText="Copiar contenido"
        }, 1500)
        salidaTexto.setAttribute("disabled", true)
    } catch (error) {
        alert(error)
    }
}