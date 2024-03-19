const campoTexto = document.querySelector("#campoTexto");
const campoMensaje = document.querySelector("#texto-mensaje");

function botonEncriptar(){
    const textoEncriptado = Encriptar(campoTexto.value);
    campoMensaje.value = textoEncriptado;
    campoTexto.value = "";

}

function Encriptar (stringEncriptado){
    const codigoMatriz = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < codigoMatriz.length; i++){
        if (stringEncriptado.includes(codigoMatriz[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(
                codigoMatriz[i][0],
                codigoMatriz[i][1]
            )
        }
    }
    return stringEncriptado;
}

function botonDesecriptar(){
    const textoEncriptado = Desencriptar(campoMensaje.value);
    campoTexto.value = textoEncriptado;
    campoMensaje.value = "";
}

function Desencriptar(stringDesencriptado) {
    const  codigoMatriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    for (let i = 0; i < codigoMatriz.length; i++){
        if(stringDesencriptado.includes(codigoMatriz[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(
                codigoMatriz[i][1],
                codigoMatriz[i][0]
                
            )
        }
    }
    return stringDesencriptado;
}

function copiar(){
    const textoCopiado = document.querySelector("#texto-mensaje");
    textoCopiado.select();
    document.execCommand("copy");
    campoMensaje.value = "";
}
document.querySelector("#copiarTexto").addEventListener("click", copiar);

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8 || tecla == 32) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

