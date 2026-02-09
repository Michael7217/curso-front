const form=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    window.location=form.value //redirecionamento
    //window.location.replace() substitui a pagina atual
    //window.location.assign() adiciona nova pagina, mas nao substitui
    //window.location.reload() recarrega a pagina atual
    //window.history.back() volta no historico
    //window.history.forward() avança no histórico
})
