const numero = document.getElementById("numero");
const btn_promessa = document.getElementById("btn_promessa");

numero.innerHTML = "esperando...";

btn_promessa.addEventListener("click", (evt) => {
    numero.innerHTML = "processando...";
    promise()
        .then((retorno) => {
        //deu certo
        numero.innerHTML = retorno;
        numero.classList.remove("erro");
        numero.classList.add("ok");
        })

        .catch((retorno) => {
        //deu errado
        numero.innerHTML = retorno;
        numero.classList.remove("ok");
        numero.classList.add("erro");
        })

});

const promise=()=>{
    let promise = new Promise((resolve, reject) => {
        let res = true;
        let tempo = 3000;

        //espera um tempo para processar

        setTimeout(() => {
            if (res) {
            resolve("deu tudo certo");
            } else {
            reject("deu tudo errado");
            }
            }, tempo);
        });
        return promise

/*      promise.then((retorno) => {
        //deu certo
        numero.innerHTML = retorno;
        numero.classList.remove("erro");
        numero.classList.add("ok");
        });

        promise.catch((retorno) => {
        //deu errado
        numero.innerHTML = retorno;
        numero.classList.remove("ok");
        numero.classList.add("erro");
        });
} */

}
