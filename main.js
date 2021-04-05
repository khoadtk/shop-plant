const home = document.querySelector(".home");
const main = document.querySelector(".main");
const lci = document.querySelector(".location");
const service = document.querySelector(".service__card");
const shop = document.querySelector(".shop");
const product = document.querySelector(".product");
const content = document.querySelector(".content");
const nav = document.querySelectorAll(".nav__item");
const barItem = document.querySelectorAll(".content__bar--item");
const productItem = document.querySelectorAll(".shop__bar--item");
const arrMain = [home, main, service, shop, lci, product];
const bgBottom = document.querySelector(".main__bottom--img");
const app = document.querySelector(".app");
const productList = document.querySelector(".product__list");

const btnHome=document.getElementById("home")


//dark to light
document.querySelector(".mobile--dark").addEventListener('click', function() {
    document.body.classList.toggle('dark');
  });

//loadding page
function loadding(){
    if(window.innerWidth<739){
        btnHome.innerHTML="Home"
    }
}

//show Home page
function toPage() {
    arrMain.forEach((e) => {
        (e.style.display = "none")
    });
    if (this.innerText === "Service") {
        console.log("service")
        main.style.display = "block";
        service.style.display = "block";
        content.style.display = "none";
        app.style.backgroundImage = "url(asset/Background02.png)";
        bgBottom.src = "asset/service__bottom.png";
        if (window.innerWidth<739) {
            document.querySelector(".nav__menu").style.display="none";
            document.querySelector(".nav__menu--mobile").style.display="flex";
        }
    } else if (this.innerText === "Shop") {
        main.style.display = "block";
        shop.style.display = "flex";
        content.style.display = "none";
        app.style.backgroundImage = "url(asset/Background07.png)";
        bgBottom.src = "asset/service__bottom.png";
        if (window.innerWidth<739) {
            document.querySelector(".nav__menu").style.display="none";
            document.querySelector(".nav__menu--mobile").style.display="flex";
        }
    } else if (this.innerText === "Location") {
        app.style.backgroundImage = "url(asset/Background08.png)";
        main.style.display = "block";
        lci.style.display = "block";
        bgBottom.src = "asset/service__bottom.png";
        if (window.innerWidth<739) {
            document.querySelector(".nav__menu").style.display="none";
            document.querySelector(".nav__menu--mobile").style.display="flex";
        }
    } else {
        home.style.display = "block";
        app.style.backgroundImage = "url(asset/Background01.png)";
        content.style.display = "block";
        if (window.innerWidth<739) {
            document.querySelector(".nav__menu").style.display="none";
            document.querySelector(".nav__menu--mobile").style.display="flex";
        }
    }
}

function toProduct() {
    arrMain.forEach((e) => (e.style.display = "none"));
    app.style.backgroundImage = "url(asset/Background02.png)";
    main.style.display = "block";
    product.style.display = "flex";
    content.style.display = "none";
    bgBottom.src = "asset/service__bottom1.png";
    window.scrollTo(0, 0);
    console.log(bgBottom);
}

function showList() {
    if (productList.style.display === "none") {
        productList.style.display = "Block";
    } else {
        productList.style.display = "none";
    }
}

nav.forEach((element) => element.addEventListener("click", toPage));

barItem.forEach((element) => element.addEventListener("click", toProduct));

document.querySelector(".content__btn").addEventListener("click", toProduct);

document.querySelector(".mobile--nav").addEventListener("click", (e)=>{
    document.querySelector(".nav__menu--mobile").style.display="none";
    document.querySelector(".nav__menu").style.display="flex";
});


setInterval(() => {
    let x = 4;
    productItem.forEach((e) => (e.style.display = "none"));
    productItem.forEach((element) => {
        element.style.order--;
        element.style.display = "none";
        if (element.style.order == 0) {
            element.style.order = 4;
            element.style.display = "none";
        } else {
            if (element.style.order == 1 || element.style.order == 2) {
                setTimeout(() => {
                    element.style.display = "none";
                }, 3500);
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    });
}, 4000);



///animation scroll
var scroll =
    window.requestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
var elementsToShow = document.querySelectorAll(".play-on-scroll");


isElementInViewport=(el)=> {
    let rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
    );
}


loop =()=> {
    elementsToShow.forEach((item,index) => {
        if (isElementInViewport(item)) {
            item.classList.add("is--show");
        } else {
            item.classList.remove("is--show");
        }
    });
    scroll(loop);
}
loop();

/// end animation scroll

