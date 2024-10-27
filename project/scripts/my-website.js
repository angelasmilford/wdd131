document.addEventListener('DOMContentLoaded', () => {
    function displayCurrentYear() {
      const currentYear = new Date().getFullYear();
      document.getElementById('currentyear').textContent = currentYear;
    }
  
    function displayLastModified() {
      const lastModifiedDate = document.lastModified;
      document.getElementById('lastModified').textContent = lastModifiedDate;
    }
  
    displayCurrentYear();
    displayLastModified();
  
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.nav');
  
    hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
    });
  
    const islands = [
        {
            name: "Federated States of Micronesia",
            capital: "Palikir",
            code: "+691",
            area: 702,
            ltd: ".fm",
            imageUrl: 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/125px-Flag_of_the_Federated_States_of_Micronesia.svg.png",
        },
        {
            name: "Guam",
            capital: "Hagåtña",
            code: "+1-671",
            area: 702,
            ltd: ".gu",
            imageUrl: 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/130px-Flag_of_Guam.svg.png",
        },
        {
            name: "Kiribati",
            capital: "Tarawa",
            code: "+686",
            area: 702,
            ltd: ".ki",
            imageUrl: 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/125px-Flag_of_Kiribati.svg.png",
        },
        {
            name: "Marshall Islands",
            capital: "Majuro",
            code: "+692",
            area: 702,
            ltd: ".mh",
            imageUrl: 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/125px-Flag_of_the_Marshall_Islands.svg.png",
        },
        {
            name: "Nauru",
            capital: "Yaren",
            code: "+674",
            area: 702,
            ltd: ".nr",
            imageUrl: 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/125px-Flag_of_Nauru.svg.png",
        },
        {
            name: "Northern Mariana Islands",
            capital: "Saipan",
            code: "+1-670",
            area: 702,
            ltd: ".mp",
            imageUrl: 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_the_Northern_Mariana_Islands.svg/130px-Flag_of_the_Northern_Mariana_Islands.svg.png",
        },
        {
            name: "Palau",
            capital: "Ngerulmud",
            code: "+680",
            area: 702,
            ltd: ".pw",
            imageUrl: 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/125px-Flag_of_Palau.svg.png",
        },
    ];
  
  
    const islandContainer = document.querySelector('#islandContainer');
    islands.forEach(island => {
      const card = document.createElement('div');
      card.classList.add('island-card');
  
      card.innerHTML = `
        <img src="${island.imageUrl}" alt="${island.name}" loading="lazy">
        <h3>${island.name}</h3>
        <p><strong>Capital:</strong> ${island.capital}</p>
        <p><strong>Calling Code:</strong> ${island.code}</p>
        <p><strong>Internet LTD:</strong> ${island.ltd}</p>
        <p><strong>Area:</strong> ${island.area} sq km</p>
      `;
  
      islandContainer.appendChild(card);
    });
});
  