console.log("zzsxs")

//////////////cart////////////////
// product 1


function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo1').click(function(){ 
    let name = 'Yellow rose'; 
    let qty = parseInt($('#flo1-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo1-decrease').click(() => { 
    let quantity = parseInt($('#flo1-qty').text()); 
    if (quantity > 1) { 
        $('#flo10-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo1-increase').click(() => { 
    let quantity = parseInt($('#flo1-qty').text()); 
    console.log(quantity); 
    $('#flo1-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item">
          ${element['name']} 
             </th>
             <th scope="col" id="Quntity">
            ${element['qty']} 
             </th>
             <th scope="col" id="Price">
            ${element['price']} 
            </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })

// protect 2/////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo2').click(function(){ 
    let name = 'Cuocus purple flower'; 
    let qty = parseInt($('#flo12-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo2-decrease').click(() => { 
    let quantity = parseInt($('#flo2-qty').text()); 
    if (quantity > 1) { 
        $('#flo2-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo2-increase').click(() => { 
    let quantity = parseInt($('#flo2-qty').text()); 
    console.log(quantity); 
    $('#flo2-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })

// product 3////////////////////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo3').click(function(){ 
    let name = 'Bright Yellow rose'; 
    let qty = parseInt($('#flo3-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo3-decrease').click(() => { 
    let quantity = parseInt($('#flo3-qty').text()); 
    if (quantity > 1) { 
        $('#flo3-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo3-increase').click(() => { 
    let quantity = parseInt($('#flo3-qty').text()); 
    console.log(quantity); 
    $('#flo3-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price">
          ${element['price']} 
          </th>`)  
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })

// product 4
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo4').click(function(){ 
    let name = 'Nada Flower'; 
    let qty = parseInt($('#flo14-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo4-decrease').click(() => { 
    let quantity = parseInt($('#flo4-qty').text()); 
    if (quantity > 1) { 
        $('#flo10-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo4-increase').click(() => { 
    let quantity = parseInt($('#flo4-qty').text()); 
    console.log(quantity); 
    $('#flo4-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price">
          ${element['price']} 
          </th>`)  
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })

// protect 5
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo5').click(function(){ 
    let name = 'Syda flower'; 
    let qty = parseInt($('#flo5-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo5-decrease').click(() => { 
    let quantity = parseInt($('#flo5-qty').text()); 
    if (quantity > 1) { 
        $('#flo5-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo5-increase').click(() => { 
    let quantity = parseInt($('#flo5-qty').text()); 
    console.log(quantity); 
    $('#flo5-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })

// protect 6
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo6').click(function(){ 
    let name = 'Atheer Flower'; 
    let qty = parseInt($('#flo6-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo6-decrease').click(() => { 
    let quantity = parseInt($('#flo6-qty').text()); 
    if (quantity > 1) { 
        $('#flo6-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo6-increase').click(() => { 
    let quantity = parseInt($('#flo6-qty').text()); 
    console.log(quantity); 
    $('#flo6-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })


// product 7/////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo7').click(function(){ 
    let name = 'Odee Flower'; 
    let qty = parseInt($('#flo7-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo7-decrease').click(() => { 
    let quantity = parseInt($('#flo7-qty').text()); 
    if (quantity > 1) { 
        $('#flo7-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo7-increase').click(() => { 
    let quantity = parseInt($('#flo7-qty').text()); 
    console.log(quantity); 
    $('#flo10-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price">
          ${element['price']} 
          </th>`) 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);

// produced 8
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo8').click(function(){ 
    let name = 'Cosmos flower'; 
    let qty = parseInt($('#flo8-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo8-decrease').click(() => { 
    let quantity = parseInt($('#flo8-qty').text()); 
    if (quantity > 1) { 
        $('#flo8-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo8-increase').click(() => { 
    let quantity = parseInt($('#flo8-qty').text()); 
    console.log(quantity); 
    $('#flo8-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);

$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })

// product 9///////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo9').click(function(){ 
    let name = 'PURE JASMINE FLOWER BUDS'; 
    let qty = parseInt($('#flo9-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo9-decrease').click(() => { 
    let quantity = parseInt($('#flo9-qty').text()); 
    if (quantity > 1) { 
        $('#flo9-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo-i9ncrease').click(() => { 
    let quantity = parseInt($('#flo9-qty').text()); 
    console.log(quantity); 
    $('#flo9-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);

$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })


// product 10////////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo10').click(function(){ 
    let name = 'PURE JASMINE FLOWER BUDS'; 
    let qty = parseInt($('#flo10-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo10-decrease').click(() => { 
    let quantity = parseInt($('#flo10-qty').text()); 
    if (quantity > 1) { 
        $('#flo10-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo10-increase').click(() => { 
    let quantity = parseInt($('#flo10-qty').text()); 
    console.log(quantity); 
    $('#flo10-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`)  
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })


// product 11////////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo11').click(function(){ 
    let name = 'ROSES FLOWER BUDS'; 
    let qty = parseInt($('#flo11-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo11-decrease').click(() => { 
    let quantity = parseInt($('#flo11-qty').text()); 
    if (quantity > 1) { 
        $('#flo11-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo11-increase').click(() => { 
    let quantity = parseInt($('#flo11-qty').text()); 
    console.log(quantity); 
    $('#flo11-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);

$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })

// product 12////////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo12').click(function(){ 
    let name = 'ROSES FLOWER BUDS'; 
    let qty = parseInt($('#flo12-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo12-decrease').click(() => { 
    let quantity = parseInt($('#flo12-qty').text()); 
    if (quantity > 1) { 
        $('#flo12-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo12-increase').click(() => { 
    let quantity = parseInt($('#flo12-qty').text()); 
    console.log(quantity); 
    $('#flo12-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })



// product 13////////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo13').click(function(){ 
    let name = 'SYDA FLOWER BUDS'; 
    let qty = parseInt($('#flo13-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo13-decrease').click(() => { 
    let quantity = parseInt($('#flo13-qty').text()); 
    if (quantity > 1) { 
        $('#flo13-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo13-increase').click(() => { 
    let quantity = parseInt($('#flo13-qty').text()); 
    console.log(quantity); 
    $('#flo13-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);

$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })


// product 14///////////////////////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo14').click(function(){ 
    let name = 'HARBAL HIBISCUS FLOWER BUDS'; 
    let qty = parseInt($('#flo14-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo14-decrease').click(() => { 
    let quantity = parseInt($('#flo14-qty').text()); 
    if (quantity > 1) { 
        $('#flo14-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo14-increase').click(() => { 
    let quantity = parseInt($('#flo14-qty').text()); 
    console.log(quantity); 
    $('#flo14-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`)  
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })

// product15///////////////////////////////////////
$('#flo15').click(function(){ 
    let name = 'LAVANDER BUDS'; 
    let qty = parseInt($('#flo15-qt')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});

$('#flo15-decrease').click(() => { 
    let quantity = parseInt($('#flo15-qt').text()); 
    if (quantity > 1) { 
        $('#flo15-qt').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo15-increase').click(() => { 
    let quantity = parseInt($('#flo15-qt').text()); 
    console.log(quantity); 
    $('#flo15-qt').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })



// product 16////////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo16').click(function(){ 
    let name = 'PURE JASMINE FLOWER BUDS'; 
    let qty = parseInt($('#flo16-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo16-decrease').click(() => { 
    let quantity = parseInt($('#flo16-qty').text()); 
    if (quantity > 1) { 
        $('#flo10-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo16-increase').click(() => { 
    let quantity = parseInt($('#flo16-qty').text()); 
    console.log(quantity); 
    $('#flo16-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`)  
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);

$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })


// product 17////////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo17').click(function(){ 
    let name = ''; 
    let qty = parseInt($('#flo17-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo17-decrease').click(() => { 
    let quantity = parseInt($('#flo17-qty').text()); 
    if (quantity > 1) { 
        $('#flo10-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) 
$('#flo17-increase').click(() => { 
    let quantity = parseInt($('#flo17-qty').text()); 
    console.log(quantity); 
    $('#flo17-qty').text(++quantity) 
}) 

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`) 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
     
  })



// product 18////////////////////
function Item(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
} 
$('#flo18').click(function(){ 
    let name = ''; 
    let qty = parseInt($('#flo18-qty')).text();
    let price =3000;
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    {
        let i = []; 
        i.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(i)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
});
$('#flo18-decrease').click(() => { 
    let quantity = parseInt($('#flo18-qty').text()); 
    if (quantity > 1) { 
        $('#flo18-qty').text(--quantity) 
    } 
    console.log(quantity); 
}) ;
$('#flo18-increase').click(() => { 
    let quantity = parseInt($('#flo18-qty').text()); 
    console.log(quantity); 
    $('#flo18-qty').text(++quantity) 
}) ;

const cardItems = JSON.parse(window.localStorage.getItem('SelectedItems')); 
cardItems.forEach(element => { 
    $('#ProdectRow').append( 
        `<th scope="col" id="Item" ">
        ${element['name']} 
           </th>
           <th scope="col" id="Quntity" ">
          ${element['qty']} 
           </th>
           <th scope="col" id="Price" ">
          ${element['price']} 
          </th>`) 
}); 
let total = 0; 
cardItems.forEach(element => { 
    total += element['price']; 
}); 
$('#totalPrice').html(`<p>${total}</p>`);
$('#ok').click(function () { 
    localStorage.removeItem('SelectedItems') 
}); 