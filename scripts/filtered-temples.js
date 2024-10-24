const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Apia Samoa",
    location: "Apia, Samoa",
    dedicated: "1983, August, 5-7",
    area: 18691,
    imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
  },
  {
    templeName: "Suva Fiji",
    location: "Suva, Fiji",
    dedicated: "2000, June, 18",
    area: 12755,
    imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/suva-fiji-temple/suva-fiji-temple-8571-main.jpg",
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27-29",
    area: 53997,
    imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
  },
];

// Function to filter and display temples based on the category
function filterTemples(category) {
  const templeContainer = document.getElementById('templeContainer');
  templeContainer.innerHTML = ''; // Clear the container

  let filteredTemples;
  
  switch (category) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filteredTemples = temples.filter(temple => parseInt(temple.area) > 90000);
      break;
    case 'small':
      filteredTemples = temples.filter(temple => parseInt(temple.area) < 10000);
      break;
    case 'home':
    default:
      filteredTemples = temples;
      break;
  }

  // Loop through the filtered temples and create cards
  filteredTemples.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;

    // Append the card to the container
    templeContainer.appendChild(card);
  });
}

// Initially display all temples
filterTemples('home');



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