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

// O código declara três arrays `cLetras1`, `cLetras2` e `cLetras3`, que contêm as letras para cada linha do teclado. Em seguida, a função `cria` é chamada três vezes, passando os arrays de letras e os IDs dos elementos HTML onde os botões serão criados.

// A função `cria` recebe os parâmetros `letra` e `tecla`. Ela obtém o elemento HTML com o ID especificado por `tecla` usando `document.getElementById(tecla)` e armazena-o na variável `linha`.

// Em seguida, a função entra em um loop `for` que itera de 0 a 9 (10 iterações). Durante cada iteração, ela cria um elemento de input de botão usando `document.createElement("input")` e armazena-o na variável `btnLetra`.

// A função configura os atributos do botão recém-criado usando os métodos `setAttribute()`. Ele define o tipo de entrada como "button" com `btnLetra.setAttribute("type", "button")`, define o ID do botão como o valor da letra atual do loop com `btnLetra.setAttribute("id", letra[i])` e define o valor do botão como a letra atual do loop com `btnLetra.setAttribute("value", letra[i])`.

// Por fim, a função anexa o botão à linha usando `linha.appendChild(btnLetra)`.

// No código fornecido, a função `cria` é chamada três vezes para criar três linhas de botões com as letras fornecidas nos arrays. No geral, parece estar correto e deve criar os botões corretamente com os IDs e valores especificados nos arrays. Certifique-se de ter elementos HTML com os IDs "teclado1", "teclado2" e "teclado3" em seu documento HTML onde os botões serão inseridos.

function aperta(lt) {
    document.getElementById("aperta").innerHTML = `Você apertou a letra ${lt}`;
}

function solta(lt) {
    document.getElementById("solta").innerHTML = `Você soltou a tecla ${lt}`;
}

