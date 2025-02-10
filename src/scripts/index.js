let dictionary = {
    "a": "/", "b": "!", "c": "\#", "d": "∆", "e": "÷", "f": "=", "g": ":", "h": "\;", "i": "\"", "j": "…", "k": "\-", "l": "\*", "m": "$", "n": "^", "o": "°", "p": "•", "q": "@", "r": "\_", "s": "+", "t": "'", "u": ",", "v": "%", "w": "¢", "x": "~", "y": "√", "z": "π", ",": "„", ";": "★", ":": "\`", ".": "{", "!": "¡", "?": "?", "\"": "²", "(": "³", ")": "³", "\/": "♡",
}

let invertedDictionary = {
    "/": "a", "!": "b", "#": "c", "∆": "d", "÷": "e", "=": "f", ":": "g", ";": "h", "\"": "i", "…": "j", "-": "k", "*": "l", "$": "m", "^": "n", "°": "o", "•": "p", "@": "q", "_": "r", "+": "s", "'": "t", ",": "u", "%": "v", "¢": "w", "~": "x", "√": "y", "π": "z", "„": ",", "★": ";", "`": ":", "{": ".", "¡": "!", "?": "?", "²": "\"", "³": "(", "³": ")", "♡": "\/"
}

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