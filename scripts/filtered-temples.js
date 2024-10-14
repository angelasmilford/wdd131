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




//variables for the hamburger button and navigation panel
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

//click event to open and close the navigation panel using the hamburger button
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});




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
    dedicated: "",
    area: ,
    imageUrl:
    ""
  },
  {
    templeName: "Suva Fiji",
    location: "Suva, Fiji",
    dedicated: "",
    area: ,
    imageUrl:
    ""
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "",
    area: ,
    imageUrl:
    ""
  }
];

const gallery = document.getElementsByClassName('gallery');

temples.forEach(temple => {
  const card = document.createElement('section');
  card.className = '.gallery';
  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
  `;
  templeContainer.appendChild(card);
});

displayTemples(temples);

document.getElementById('home').addEventListener('click', (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.getElementById('old').addEventListener('click', (e) => {
  e.preventDefault();
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]); // Extract year
    return year < 1900;
  });
  displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', (e) => {
  e.preventDefault();
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]); // Extract year
    return year > 2000;
  });
  displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', (e) => {
  e.preventDefault();
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', (e) => {
  e.preventDefault();
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});