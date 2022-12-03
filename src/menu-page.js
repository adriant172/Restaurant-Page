import './style.css';
import curryImg from'./img/trinidad-curry-chicken.jpeg'
import dpRotiImg from './img/dhalpuri-roti.jpeg'
import doublesImg from './img/chickpea-doubles.jpeg'
import chickenOverRiceImg from './img/chicken-over-rice.jpeg'
import pizzaSliceImg from './img/ny-pizza-slice.jpeg'


const content = document.querySelector("#content");

class menuItem {
    constructor(name, description, price, pictureURL){
        this.name = name;
        this.price = price;
        this.description = description;
        this.pictureURL = pictureURL;
    }

}

function menuPage() {

    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = "Menu";
    menuTitle.classList.add('inner');
    menuTitle.classList.add('page-title');
    content.appendChild(menuTitle);
    
    const menuItems = [];
    const triniCurryChicken = new menuItem("Trinidadian Curry Chicken","1000 YEN", "This is a staple dish in trinidad enjoyed in restaurants and homes alike. Made with a wide assortment of herbs and spices. Definitely will delight your taste buds!", curryImg);

    const dhalpuriRoti = new menuItem("Dhalpuri Roti", "500 YEN", "Dhalpuri  roit is one of the most popular roti's in trinidad. It is almost a must to enjoy it with a curry or stew.", dpRotiImg );

    const doubles = new menuItem("Doubles", "600 YEN", "Number Trinidadian street food. Made with curried chickpeas sandwiched with a deep fried bara. Enjoy it by itself or with a little tamarind sauce for an added sweetness", doublesImg);

    const chickenOverRice = new menuItem("Chicken over Rice", "900 YEN", "This New York City staple street food has fed many hungry natives from their lunch breaks down to that final meal at 2am after parting all night. Delicious and filling and can be down right addictive thanks to the addition od the white sauce", chickenOverRiceImg );

    const pizzaSlice = new menuItem("Pizza Slice", "400 YEN", "This truly needs no introduction. Cheese, sauce , crispy crust. Need I say more ?", pizzaSliceImg );

    menuItems.push(triniCurryChicken);
    menuItems.push(dhalpuriRoti);
    menuItems.push(doubles);
    menuItems.push(chickenOverRice);
    menuItems.push(pizzaSlice);



    menuItems.forEach( item => {
        let currentItem = document.createElement('div');
        currentItem.classList.add('inner');
        currentItem.classList.add('menu-item');

        let itemName = document.createElement('h2');
        let itemPrice = document.createElement('p');
        let itemDescription = document.createElement('p');
        let itemImage = document.createElement('img');
        itemImage.classList.add('item-image');

        itemName.innerHTML = item.name;
        itemDescription.innerHTML = item.description;
        itemPrice.innerHTML = item.price;
        itemImage.src = item.pictureURL;
        let itemProperties = [itemName, itemDescription, itemPrice, itemImage]
        
        itemProperties.forEach( prop => {
            currentItem.appendChild(prop)
        })

        content.appendChild(currentItem);

    })
    
}











export { menuPage };