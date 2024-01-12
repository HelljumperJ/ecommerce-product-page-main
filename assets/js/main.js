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
    let btnCheck=document.querySelector('#button-check')
    let imgProduct=document.querySelector('#img-product').getAttribute("src")
    let shoppingCartContainer=document.querySelector('#shopping-cart-container')
    let imgDelete=document.querySelector('#img-delete').getAttribute("src")
    let total=parseFloat(precio.textContent ) * parseInt(cantidad.textContent)
    
    console.log(imgProduct)

    allProducts.push ({"id":parseInt(productId.textContent),"button":btnCheck, "delete":imgDelete, "img":imgProduct, "name":titulo.textContent,"price":parseFloat(precio.textContent ),"quantity":parseInt(cantidad.textContent), "total":total })
    allProducts.forEach(function (item){
        console.log(item.name,item.price,item.quantity,item.total)
        let shoppingCart=`
 <div>
  <div class="hero-content flex-col lg:flex-row">
    <img src="${item.img}" class="h-14 w-14 rounded-xl" />
    <div class="flex-col h-8 w-72">
            <span class="text-gray-400">${item.name}</span>
            <span class="text-gray-400"><br><br>$${item.price}.00</span>
    </div>  
    <span class="text-gray-400 mt-12"><br><br>x${item.quantity}</span>
    <span class="font-bold"><br><br>$${item.total}.00</span>
    <img src="${item.delete}" class="h-4 w-4 m-auto justify-end" />
  </div>
  <button class="text-white bg-orange-500 btn m-auto justify-center w-80 mt-6 " ${item.button}>Checkout</button>
</div>
            `
        shoppingCartContainer.innerHTML=shoppingCart
    })

} 






