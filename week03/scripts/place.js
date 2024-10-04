// Function to display the last modified date
function displayLastModified() {
    const lastModifiedDate = document.lastModified; // Get the last modified date of the document
    document.getElementById('lastModified').textContent = lastModifiedDate; // Update last modified in the footer
}

// Call the functions to update the footer
displayLastModified();

