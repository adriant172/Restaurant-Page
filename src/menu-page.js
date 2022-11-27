import './style.css';
import curry from'./img/trinidad-curry-chicken.jpeg'

const content = document.querySelector("#content");

class menuItem {
    constructor(name, description, price, pictureURL){
        this.name = name;
        this.description = description;
        this.price = price;
        this.pictureURL = pictureURL;
    }

}

function menuPage() {

    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = "Menu";
    menuTitle.classList.add('inner');
    content.appendChild(menuTitle)
    
    const menuItems = [];
    const triniCurryChicken = new menuItem("Trinidadian Curry Chicken", "This is a staple dish in trinidad enjoyed in restaurants and homes alike. Made with a wide assortment of herbs and spices. Definitely will delight your taste buds!", "1000 YEN", curry)

    menuItems.push(triniCurryChicken);

    menuItems.forEach( item => {
        let currentItem = document.createElement('div');
        let itemName = document.createElement('h2');
        let itemDescription = document.createElement('p');
        let itemPrice = document.createElement('p');
        let itemImage = document.createElement('img');

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