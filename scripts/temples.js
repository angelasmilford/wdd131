//variables for the hamburger button and navigation panel
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

//click event to open and close the navigation panel using the hamburger button
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


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