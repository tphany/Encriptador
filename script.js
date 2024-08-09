document.addEventListener('DOMContentLoaded', (event) => {

    const textarea = document.getElementById("presentacion__web__texto");
    const mensaje = document.querySelector(".mensaje");

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

    function mostrarTextoEncriptado() {
        const textoEncriptado = encriptar(textarea.value);
        mensaje.value = textoEncriptado;
    }

    // Escuchar el evento de entrada de texto en el primer textarea
    textarea.addEventListener('input', mostrarTextoEncriptado);
});
