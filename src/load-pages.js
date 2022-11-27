import './style.css';


const body = document.querySelector('body');
const content = document.querySelector("#content");


function headerFooter() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const  headerTitles = ["Home", "Menu", "Contact"];

    headerTitles.forEach(title => {
        let currentButton = document.createElement('button');
        currentButton.innerHTML = title;
        currentButton.classList.add('header-button');
        currentButton.setAttribute('id', title);

        header.appendChild(currentButton);
    })

    const bgRef = document.createElement('a');
    bgRef.innerHTML = "Background Image by tirachard";
    bgRef.href = "https://www.freepik.com/free-photo/wooden-board-empty-table-top-blurred-background_1387629.htm#query=restaurant%20background&position=2&from_view=keyword"
   
    // footerContent.appendChild(bgRef);
    footer.appendChild(bgRef);
    const link = document.createTextNode('  on Freepik')
    footer.appendChild(link)

}


function homePage() {
    
    const restaurantName = document.createElement("div");

    // Create title elements
    restaurantName.classList.add('restaurant-name');
    restaurantName.classList.add('inner');
    const title1 = document.createElement('h1');
    const title2 = document.createElement('h1');
    const title3 = document.createElement('h1');
    title1.textContent = "Trini Delights";
    title2.textContent = "&"
    title3.textContent = "Brooklyn Bites";

    restaurantName.appendChild(title1);
    restaurantName.appendChild(title2);
    restaurantName.appendChild(title3);

    content.appendChild(restaurantName);

    // Intro elements
    const intro = document.createElement('div');
    const introContent = document.createElement('p');
    introContent.innerHTML = "Bringing together the staple dishes of the islands of Trinidad and tobago together with local favorite street foods of NYC."
    intro.appendChild(introContent)
    intro.classList.add('inner');
    intro.classList.add('intro');
    content.appendChild(intro)

    // Create working hours elements
    const hoursData = [
        {day: "Sunday", hours: "11:00am - 9:00pm"},
        {day: "Monday", hours: "12:00pm - 11:00pm"},
        {day: "Tuesday", hours: "12:00pm - 11:00pm"},
        {day: "Wednesday", hours: "12:00pm - 11:00pm"}, 
        {day: "Thursday", hours: "12:00pm - 11:00pm"}, 
        {day: "Friday", hours: "12:00pm - 12:00am"},
        {day: "Saturday", hours: "11:00am - 1:00am"}, 
    ]

    const hours = document.createElement('div');
    const hoursHeading = document.createElement('h2');
    const hoursContent = document.createElement('ul');

    hours.classList.add('inner');
    hours.classList.add('hours');


    hoursHeading.innerHTML = "Working Hours";
    hours.appendChild(hoursHeading);

    hoursData.forEach(e => {
        let entry = document.createElement('li');
        entry.innerHTML = `${e.day}: ${e.hours}`;
        hoursContent.appendChild(entry);
    });

    hours.appendChild(hoursContent);
    content.appendChild(hours);

    // Create Location/Address Elements
    const location = document.createElement('div');
    const locationHeading = document.createElement('h2');
    const locationContent = document.createElement('p');

    location.classList.add('inner');
    location.classList.add('location')

    locationHeading.innerHTML = "Location";
    location.appendChild(locationHeading);
    locationContent.innerHTML = "1-Chome-2-3 Hatsudai, Shibuya City , Tokyo"
    location.appendChild(locationContent)

    content.appendChild(location)

}

function clearContent(){
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
}


export { headerFooter, homePage, clearContent }