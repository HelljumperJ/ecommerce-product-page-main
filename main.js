document.querySelector("#btnSumar").addEventListener("click",sumarUno);
document.querySelector("#btnRestar").addEventListener("click",restarUno);
let contador=0

function sumarUno(){
    contador=contador+1
    document.querySelector("#msgContador").innerHTML=contador
}

function restarUno(){
    contador=contador-1
    document.querySelector("#msgContador").innerHTML=contador
}

if (contador=0){
    restarUno:disabled

}

