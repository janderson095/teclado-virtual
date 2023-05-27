function verificaElemento() {
    if (document.getElementById('texto').checked) {
        carregarText();

    }
    if (document.getElementById('radio').checked) {
        criaRadio("radios");

    }
    
    if (document.getElementById('paragrafo').checked) {
        criaParagrafo("paragrafos");

    }
}

function carregarText() {
    criaInput("textos")
}

function carregarRadio() {
    criaRadio("radios")
}

function carregarParagrafo() {
    criaParagrafo("paragrafos")
}


function criaInput(textos) {
    let linha = document.getElementById(textos);
    for (i = 0; i < 20; i++) {
        let criarForm = document.createElement("input");
        criarForm.setAttribute("type", "text");
        criarForm.setAttribute("id", "text" + i);
        criarForm.setAttribute("value", i);
        linha.appendChild(criarForm);
    }
}

function criaRadio(radios) { // criou uma função e chamou atravez do criaRadio(inicio da pagina) para iniciar e ja chamar a linha da função
    let linha = document.getElementById(radios);//pega o id radio do html
    for (i = 20; i < 40; i++) {
        let criarForm = document.createElement("input"); //atribui a variavel para mandar p o HTML
        criarForm.setAttribute("type", "radio"); //adiciona um atributo tipo radio
        criarForm.setAttribute("id", "radio" + i);//adiciona sempre a id concatenação para nao ser a msm id
        criarForm.setAttribute("value", i);//valor com concatenação
        criarForm.setAttribute("disabled", true); //desalibita todos
        linha.appendChild(criarForm); // atraves da variavel linha ele chama a variavel criarForm e adiciona filho 
    }
}

function criaParagrafo(paragrafos) {
    let linha = document.getElementById(paragrafos);
    for (i = 40; i < 70; i++) {
        let criarForm = document.createElement("p");
        let texto = "Paragrafo" + i;
        criarForm.setAttribute("id", "p" + i);
        criarForm.setAttribute("value", i);
        criarForm.textContent = texto;
        linha.appendChild(criarForm);
    }
}





