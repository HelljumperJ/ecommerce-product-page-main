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
    if (msgContador.textContent==1){
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


const productsList = document.querySelector("#btn-add-cart")
let allProducts = []

productsList.addEventListener('click', () => {
obtenerDato()
})
function obtenerDato(){
    let id=document.querySelector('#productId')
    let titulo=document.querySelector('#titulo')
    let precio=document.querySelector('#precio')
    let cantidad=document.querySelector('#msgContador')
    let imgProduct=document.querySelector('#img-product').getAttribute("src")
    let total=parseFloat(precio.textContent ) * parseInt(cantidad.textContent)
    let shoppingCartContainer=document.querySelector('#shopping-cart-container')
    console.log(imgProduct)

    allProducts.push ({"id":parseInt(productId.textContent), "img":imgProduct, "name":titulo.textContent,"price":parseFloat(precio.textContent ),"quantity":parseInt(cantidad.textContent), "total":total })
    allProducts.forEach(function (item){
        console.log(item.name,item.price,item.quantity,item.total)
        let shoppingCart=`
        <div class="flex gap-2">
            <img src="${item.img}" class="h-14 w-14 rounded-xl" />
            <span class="text-gray-400">${item.name}</span>
            <span class="text-gray-400">${item.price}</span>
            <span class="text-gray-400">${item.quantity}</span>
            <span class="text-gray-400">${item.total}</span>

        </div>
        `
        shoppingCartContainer.innerHTML=shoppingCart
    })

} 






