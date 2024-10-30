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

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];
  
const productSelect = document.getElementById("product");
  
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; // Use product ID as the value
    option.textContent = product.name; // Display product name
    productSelect.appendChild(option);
});  

// Get the review counter from localStorage or initialize it to 0
let reviewCount = localStorage.getItem('reviewCount') || 0;

// Increment the counter each time the page is loaded
reviewCount++;

// Save the updated counter back to localStorage
localStorage.setItem('reviewCount', reviewCount);

// Update the display in the HTML
document.getElementById('reviewCount').textContent = reviewCount;