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



function calculateWindchill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
      return (
        35.74 +
        0.6215 * temperature -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temperature * Math.pow(windSpeed, 0.16)
      ).toFixed(2);
    }
    return "N/A"; // Windchill is not applicable
  }
  
  // Display the windchill factor when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.getElementById("temperature");
    const windElement = document.getElementById("wind-speed");
    const windchillElement = document.getElementById("windchill");
  
    const temperature = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windElement.textContent);
  
    const windchill = calculateWindchill(temperature, windSpeed);
    windchillElement.textContent = `${windchill} °F`;
  });