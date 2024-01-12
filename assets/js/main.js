const btnRestar = document.querySelector("#btnRestar")
const btnSumar = document.querySelector("#btnSumar")
const msgContador = document.querySelector("#msgContador")

btnSumar.addEventListener("click",sumarUno);
btnRestar.addEventListener("click",restarUno);
let contador=0

function sumarUno(){
    contador=contador+1
    document.querySelector("#msgContador").innerHTML=contador
    evaluar()
}

function restarUno(){
    contador=contador-1
    document.querySelector("#msgContador").innerHTML=contador
    evaluar()
}
function evaluar(){
    if (msgContador.textContent==0){
        btnRestar.disabled=true;
    }
    else  {
        btnRestar.disabled=false;
    }
}
evaluar()

// ================================== //

const cartInfo = document.querySelector("#cart-product")
const rowProduct = document.querySelector("#row-product")


const productsList = document.querySelector("#container-items")
let allProducts = []

productsList.addEventListener('click', e => {
    if (e.target.classList.contains("btn-add-cart")) {

    }
})
