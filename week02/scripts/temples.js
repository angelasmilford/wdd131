// Function to display the current year
function displayCurrentYear() {
    const currentYear = new Date().getFullYear(); // Get the current year
    document.getElementById('currentyear').textContent = currentYear; // Update the year in the footer
}

// Function to display the last modified date
function displayLastModified() {
    const lastModifiedDate = document.lastModified; // Get the last modified date of the document
    document.getElementById('lastModified').textContent = lastModifiedDate; // Update last modified in the footer
}

// Call the functions to update the footer
displayCurrentYear();
displayLastModified();


//Hamburger effect that only shows in the mobile view

//clicking the hamburger button toggles the navigation menu items from viewable to not viewable

//use a symbol, such as 'X' to close the hamburger menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => { //changed to 'click'
	navigation.classList.toggle('open');//changed to 'classList' and 'open'
	hamButton.classList.toggle('open');
});


const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    header.classList.toggle('menu-active')
});