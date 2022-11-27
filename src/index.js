import { headerFooter, homePage, clearContent } from './load-pages';
import './menu-page'
import './contact-page'
import './style.css';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';


headerFooter();
homePage();

// Add event listeners to the tab switching buttons 
const pageSwitchButtons = document.querySelectorAll('.header-button');


pageSwitchButtons.forEach( button => {
    button.addEventListener('click', (event) => {
        clearContent();
        const currentID = event.target.id
        if (currentID == 'Home') {
            homePage();
        }
        if (currentID == 'Menu') {
            menuPage();
        }
        if (currentID == 'Contact') {
            contactPage();
        }
    })
})

