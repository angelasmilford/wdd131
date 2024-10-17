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




const temp = 10; // Temperature in Celsius
const windSpeed = 5; // Wind speed in km/h
const condition = "Cloudy"; // Static weather condition

function calculateWindChill(temp, windSpeed) {
  return (
    13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(2); // Round 2 decimal places
}

function displayWindChill() {
  const windChillElement = document.getElementById("windChill");
  const conditionElement = document.getElementById("condition");

  conditionElement.textContent = condition;

  if (temp <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = `${windChill} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}

document.addEventListener("DOMContentLoaded", displayWindChill);