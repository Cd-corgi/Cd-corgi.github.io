let dictionary = {
    "a": "/", "b": "!", "c": "\#", "d": "∆", "e": "÷", "f": "=", "g": ":", "h": "\;", "i": "\"", "j": "…", "k": "\-", "l": "\*", "m": "$", "n": "^", "o": "°", "p": "•", "q": "@", "r": "\_", "s": "+", "t": "'", "u": ",", "v": "%", "w": "¢", "x": "~", "y": "√", "z": "π", ",": "„", ";": "★", ":": "\`", ".": "{", "!": "¡", "?": "?", "\"": "²", "(": "³", ")": "³", "\/": "♡", "1": "⨀", "2": "⨃", "3": "⨆", "4": "⨉", "5": "⨌", "6": "⨏", "7": "⨒", "8": "⨕", "9": "⨁", "0": "⨄",
}

let invertedDictionary = {
    "/": "a", "!": "b", "#": "c", "∆": "d", "÷": "e", "=": "f", ":": "g", ";": "h", "\"": "i", "…": "j", "-": "k", "*": "l", "$": "m", "^": "n", "°": "o", "•": "p", "@": "q", "_": "r", "+": "s", "'": "t", ",": "u", "%": "v", "¢": "w", "~": "x", "√": "y", "π": "z", "„": ",", "★": ";", "`": ":", "{": ".", "¡": "!", "?": "?", "²": "\"", "³": "(", "³": ")", "♡": "\/", "⨀": "1", "⨃": "2", "⨆": "3", "⨉": "4", "⨌": "5", "⨏": "6", "⨒": "7", "⨕": "8", "⨁": "9", "⨄": "0",
}

document.addEventListener("DOMContentLoaded", () => {
    let yes = true
    while (yes == true) {
        const texto = prompt("Escribe tu llave de acceso");
        if (texto === null || texto.trim() === "") {
            alert("Debes ingresar un texto.");
        }
        if (texto !== "09230107") {
            alert("Contraseña errada.");
        } else {
            yes = false
        }
    }
})

function traducir() {
    const input = document.getElementById('floatingTextarea1').value;
    let output = document.getElementById('floatingTextarea2');

    if (input.length == 0) return alert("Deberas proveer un texto para encriptar");


    let proc = encriptar(input.toLowerCase());
    output.value = proc;
}

function destraducir() {
    const input = document.getElementById('floatingTextarea1').value;
    let output = document.getElementById('floatingTextarea2');

    if (input.length == 0) return alert("Deberas proveer un texto para encriptar");


    let proc = desencriptar(input.toLowerCase());
    output.value = proc;
}

function encriptar(value) {
    let results = "";

    for (let i = 0; i < value.length; i++) {
        console.log(dictionary[value[i]])
        results += dictionary[value[i]] == undefined ? value[i] : dictionary[value[i]];
    }

    return results;
}

function desencriptar(value) {
    let results = "";

    for (let i = 0; i < value.length; i++) {
        console.log(invertedDictionary[value[i]])
        results += invertedDictionary[value[i]] == undefined ? value[i] : invertedDictionary[value[i]];
    }

    return results;
}