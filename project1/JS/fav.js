function FavItem (name, image, desc)
{
this.name = name;
this.img = image;
this.desc = desc;
}
function addNewItemToFavorities(newItem){
    let selectedItems =  JSON.parse(window.localStorage.getItem('FavoriteItems'));
    console.log(selectedItems);
    for(let i = 0; i<selectedItems.length; i++)
    {
        //<div> rows cols </div>
        //ADD AS CARD FOR ALL FAVORITE ITEMS
        $('#id').text(selectedItems[i].name)
        $('#img').attr('src', selectedItems[i].img)
    }
    if(selectedItems == null )
    {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('FavoriteItems', JSON.stringify(a));
    } else
    {
        selectedItems.push(newItem);
        window.localStorage.setItem('FavoriteItems', JSON.stringify(FavoriteItems));
    }
}
$('#buds1').click(function(){
    let name = 'pure1';
    let image = 'seebs11.jpg';
    let desc = ('#desc1').text();
    let newItem = new FavItem(name, image, desc);
    //use find method to find object with name 'service1' from
    addNewItemToFavorities(newItem);
})
$('#buds1').click(function(){
    let name = 'pure1';
    let image = buds1.attr('src');
    let desc = ('#desc1').text();
    let newItem = new FavItem(name, image, desc);
    //use find method to find object with name 'service1' from
    addNewItemToFavorities(newItem);
})
$('#flower2').click(function(){
    let name = 'flower2';
    let imag = 3 .attr('src');
    let desc = ('#desc').text();
    let newItem = new FavItem(name, image, desc);
    addNewItemToFavorities(newItem);
})
$('#srvTwoAddFav').click(function(){
    console.log('Inside Favorities function');
    let favItems = window.localStorage.setItem('favItems',JSON.stringify(cars[1]));
})
white_check_mark
eyes
raised_hands





