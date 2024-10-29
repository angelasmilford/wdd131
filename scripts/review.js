// Get the review counter from localStorage or initialize it to 0
let reviewCount = localStorage.getItem('reviewCount') || 0;

// Increment the counter each time the page is loaded
reviewCount++;

// Save the updated counter back to localStorage
localStorage.setItem('reviewCount', reviewCount);

// Update the display in the HTML
document.getElementById('reviewCount').textContent = reviewCount;

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