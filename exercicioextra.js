criaInput("texto")
criaRadio("radio")
criaParagrafo("paragrafo")

function criaInput(texto) {
    let linha = document.getElementById(texto);
    for (i = 0; i < 20; i++) {
        let criarForm = document.createElement("input");
        criarForm.setAttribute("type", "text");
        criarForm.setAttribute("id","text"+ i);
        criarForm.setAttribute("value", i);
        linha.appendChild(criarForm);
    }
}

function criaRadio(radio) { // criou uma função e chamou atravez do criaRadio(inicio da pagina) para iniciar e ja chamar a linha da função
    let linha = document.getElementById(radio);//pega o id radio do html
    for (i = 20; i < 40; i++) {
        let criarForm = document.createElement("input"); //atribui a variavel para mandar p o HTML
        criarForm.setAttribute("type", "radio"); //adiciona um atributo tipo radio
        criarForm.setAttribute("id","radio"+ i);//adiciona sempre a id concatenação para nao ser a msm id
        criarForm.setAttribute("value", i);//valor com concatenação
        criarForm.setAttribute("disabled", true); //desalibita todos
        linha.appendChild(criarForm); // atraves da variavel linha ele chama a variavel criarForm e adiciona filho 
    }
}

function criaParagrafo(paragrafo) {
    let linha = document.getElementById(paragrafo);
    for (i = 40; i < 70; i++) {
        let criarForm = document.createElement("p");
        let texto = "Paragrafo"+i;
        criarForm.setAttribute("id","p"+ i);
        criarForm.setAttribute("value", i);
        criarForm.textContent = texto;
        linha.appendChild(criarForm);
    }
}



