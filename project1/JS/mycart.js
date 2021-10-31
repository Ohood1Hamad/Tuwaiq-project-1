let carts = document.querySelectorAll('.addtocart');

let products = [{
        name: "Yellow Rose",
        tag: "yellow Rose",
        price: 25,
        inCart: 0
    },
    {
        name: "Cuocus purple flower",
        tag: "cuocus purple flower ",
        price: 30,
        inCart: 0
    },
    {
        name: "Bright Yellow rose",
        tag: "bright Yellow rose",
        price: 55,
        inCart: 0
    },
    {
        name: "Carnation Flower",
        tag: "carnation Flower",
        price: 55,
        inCart: 0
    },
    {
        name: "Syda flower",
        tag: "syda flower",
        price: 55,
        inCart: 0
    },
    {
        name: "Joori Flower",
        tag: "joori Flower<",
        price: 60,
        inCart: 0
    },
    {
        name: "Odee Flower",
        tag: "odee Flower",
        price: 60,
        inCart: 0
    },
    {
        name: "Cosmos flower",
        tag: "cosmos flower",
        price: 25,
        inCart: 0
    },
    {
        name: "White Tulips",
        tag: "white Tulips",
        price: 25,
        inCart: 0
    },{
        name: "PURE JASMINE FLOWER BUDS",
        tag: "pure JASMINE FLOWER BUDS ",
        price: 30,
        inCart: 0
    },
    {
        name: "ROSES FLOWER BUDSe",
        tag: "rOSES FLOWER BUDS",
        price: 55,
        inCart: 0
    },
    {
        name: "SYDA FLOWER BUDS",
        tag: "sYDA FLOWER BUDS",
        price: 99,
        inCart: 0
    },
    {
        name: "HARBAL HIBISCUS FLOWER BUDS",
        tag: "hARBAL HIBISCUS FLOWER BUDS",
        price: 30,
        inCart: 0
    },
    {
        name: "LAVANDER BUDS",
        tag: "laVANDER BUDS",
        price: 300,
        inCart: 0
    },
    

]


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let pruductNumbers = localStorage.getItem('cartNumbers');
    if (pruductNumbers) {
        document.querySelector('.cart span').textContent = pruductNumbers;

    pruductNumbers = parseInt(pruductNumbers);
    }

}

function cartNumbers(product) {

    let pruductNumbers = localStorage.getItem('cartNumbers');

    if (pruductNumbers) {
        localStorage.setItem('cartNumbers', pruductNumbers + 1);
        document.querySelector('.cart span').textContent = pruductNumbers + 1;

    } else {

        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    }
    setItems(product);
}

function setItems(product) {
    let cartItmes = localStorage.getItem('productsInCart');
    cartItmes = JSON.parse(cartItmes);
    if (cartItmes != null) {
        if (cartItmes[product.tag] == undefined) {
            cartItmes = {
                ...cartItmes,
                [product.tag]: product
            }

        }
        cartItmes[product.tag].inCart += 1;

    } else {
        products.inCart = 1;

        cartItmes = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItmes));

}
function totalCost(product) {
    let cartCost =localStorage.getItem('totalCost');
    if (cartCost != null ) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost" , cartCost + product.price);

    } else {
        localStorage.setItem("totalCost" , product.price);

    }
    
}
function displayCart() {
    let cartItmes = localStorage.getItem("productsInCart");
    cartItmes =JSON.parse(cartItmes);
    let productcontainer = document.querySelector (".products");
    let cartCost =localStorage.getItem('totalCost');


    console.log(cartItmes)

    if (cartItmes && productcontainer) {
        productcontainer.innerHTML= " ";
            Object.values(cartItmes).map(item=> {
                productcontainer.innerHTML += `
                <div class="products">
                <ion-icon name="close-circle"></ion-icon>
                <img src= "imgs/${item.tag}.jpg
                <span> ${item.name} </span>
                </div>
                <div class="price"> ${item.price},00 </div>

                <div class="quantity">
                <ion-icon name="decrease"
                name= "arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="increase"
                name= "arrow-dropright-circle"></ion-icon>
                </div>
                <div class = "total"> 
                ${item.inCart = item.price},00
                `;


            });

        productcontainer.innerHTML += 
        `<div class= cartTotalcontainer"> 
        <h2 class = "cartTotalflo">
        cart total </h2>
<h2 class="cartTotal">
${cartCost},00
</h2> 
`
    }
    
}
onLoadCartNumbers()
displayCart()