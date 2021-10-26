
function Item (name, qty, price) 
{ 
this.name = name; 
this.qty = qty; 
this.price = price; 
} 
$('#fishBurger').click(function(){ 
    let name = 'Fish burger'; 
    let qty = 1; //$('#qty').val(); 
    let price = 56;//$('#price').val(); 
    let newItem = new Item(name, qty, price); 
    let selectedItems =  JSON.parse(window.localStorage.getItem('SelectedItems')); 
    console.log(selectedItems); 
    if(selectedItems == null ) 
    { 
        let a = []; 
        a.push(newItem); 
        console.log(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(a)); 
    } else 
    { 
        selectedItems.push(newItem); 
        window.localStorage.setItem('SelectedItems', JSON.stringify(selectedItems)); 
    } 
})
// $(".munu-toggle-btn").click(function (e) {
//     $("this").toggleclass("fa-time");
//     const newLocal = "active";
//     $(".navigation-menu").toggleclass(newLocal);
    
// });
