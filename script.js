document.addEventListener('DOMContentLoaded', (event) => {

    const textarea = document.getElementById("presentacion__web__texto");
    const mensaje = document.querySelector(".mensaje");
    const botonEncriptar = document.getElementById("presentacion__cifrado__encriptar");
    const botonDesencriptar = document.getElementById("presentacion__cifrado__desencriptar");
    const botonCopiar = document.getElementById("copiar__mensaje");

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
    
    function encriptar(stringEncriptar) {
        let matrizCodigo = [
            ["e", "enter"], 
            ["i", "imes"], 
            ["a", "ai"], 
            ["o", "ober"], 
            ["u", "ufat"]
        ];
        stringEncriptar = stringEncriptar.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringEncriptar.includes(matrizCodigo[i][0])) {
                stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return stringEncriptar;
    }

    function desencriptar(stringDesencriptar) {
        let matrizCodigo = [
            ["enter", "e"], 
            ["imes", "i"], 
            ["ai", "a"], 
            ["ober", "o"], 
            ["ufat", "u"]
        ];
        stringDesencriptar = stringDesencriptar.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringDesencriptar.includes(matrizCodigo[i][0])) {
                stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return stringDesencriptar;
    }

    function mostrarTextoEncriptado() {
        const textoEncriptado = encriptar(textarea.value);
        mensaje.value = textoEncriptado;
    }

    function mostrarTextoDesencriptado() {
        const textoDesencriptado = desencriptar(mensaje.value);
        mensaje.value = textoDesencriptado;
    }

    // Copiado de texto encriptado 
    function copiarTexto() {
        mensaje.select();
        document.execCommand('copy');
        alert("Texto copiado al portapapeles");
    }

    // Evento de clic en botón Encriptar
    botonEncriptar.addEventListener('click', mostrarTextoEncriptado);

    botonDesencriptar.addEventListener('click', mostrarTextoDesencriptado);

    botonCopiar.addEventListener('click', copiarTexto);

});
