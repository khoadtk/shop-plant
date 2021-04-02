const home = document.querySelector(".home");
const main = document.querySelector(".main");
const lci =document.querySelector(".location");
const service=document.querySelector(".service__card")
const shop =document.querySelector(".shop")
const product =document.querySelector(".product")
const nav=document.querySelectorAll(".nav__item")
const arrMain=[home,main,service,shop,lci,product]
const  bgBottom =document.querySelector(".main__bottm--img")
const app=document.querySelector(".app")
const productList=document.querySelector(".product__list") 



//show Home page
function toPage(){
    console.log(this.innerText)
    arrMain.forEach(e=>e.style.display="none")
    if (this.innerText==="Service") {
        main.style.display="block"
        service.style.display="block"
        app.style.backgroundImage ="url(asset/Background02.png)"
    }
    else if (this.innerText==="Shop") {
        main.style.display="block"
        shop.style.display="flex"
        app.style.backgroundImage ="url(asset/Background07.png)"
    }
    else if (this.innerText==="Location") {
        app.style.backgroundImage ="url(asset/Background08.png)"
        main.style.display="block"
        lci.style.display="block"
    }
    else {
        home.style.display="block"
        app.style.backgroundImage ="url(asset/Background01.png)"
    }
}

function toProduct(){
    app.style.backgroundImage ="url(asset/Background02.png)" 
    shop.style.display="none"
    product.style.display="flex"
    bgBottom.src="asset/service__bottom1.png"
}

function showList(){
    if (productList.style.display==="none") {
        
        productList.style.display="Block"
    }
    else{
        productList.style.display="none"}
}
nav.forEach(element => element.addEventListener('click',toPage));


