let cLetras1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
let cLetras2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'];
let cLetras3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', ';'];
cria(cLetras1, "teclado1");
cria(cLetras2, "teclado2");
cria(cLetras3, "teclado3");


function cria(letra, tecla) {
    var linha = document.getElementById(tecla);
    for (i = 0; i < 10; i++) {
        var btnLetra = document.createElement("input");
        btnLetra.setAttribute("type", "button");
        btnLetra.setAttribute("id", letra[i]);
        btnLetra.setAttribute("value", letra[i]);
        linha.appendChild(btnLetra);
    }
}


function aperta(lt) {
    document.getElementById("aperta").innerHTML = `Você apertou a letra ${lt}`;
}

function solta(lt) {
    document.getElementById("solta").innerHTML = `Você soltou a tecla ${lt}`;
}

