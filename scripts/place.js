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




// Static values for temperature and wind speed (match displayed values)
const temperature = 10; // °C
const windSpeed = 5;    // km/h

/**
 * Calculate wind chill factor using the Celsius formula.
 * @param {number} temp - Temperature in °C.
 * @param {number} wind - Wind speed in km/h.
 * @returns {string} - Wind chill factor rounded to 1 decimal place.
 */
function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1); // Return result rounded to 1 decimal place
}

/**
 * Display wind chill factor if conditions are met, otherwise show "N/A".
 */
function displayWindChill() {
    let windChill;

    // Check if temperature <= 10°C and wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChill = "N/A"; // Not applicable
    }

    // Display wind chill factor in the weather section
    document.getElementById("windChill").textContent = windChill;
}

// Run displayWindChill when the page loads
window.onload = displayWindChill;