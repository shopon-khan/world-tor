fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = Countries => {
    const countriesDiv = document.getElementById('countrys');
    // foreach use
    Countries.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.className = `country`;

        const countryIfo = `
            <h3 class="country-name"> ${country.name} </h3>
            <p> ${country.capital}</p>
            <button class="button" onclick= "displayCountriesDetail('${country.name}')"> Details </button>
    
            `;
        countryDiv.innerHTML = countryIfo;

        countriesDiv.appendChild(countryDiv);

    });

    // forlop use
    // for (let i = 0; i < Countries.length; i++) {
    //     const country = Countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className =  `country`;

    //     const countryIfo = `
    //     <h3 class="country-name"> ${country.name} </h3>
    //     <p> ${country.capital}</p>

    //     `;
    //        countryDiv.innerHTML = countryIfo;

    //         countriesDiv.appendChild(countryDiv);

    // function use
    // const h3 = document.createElement('h3');
    // h3.innerText = country.name;
    // countryDiv.appendChild(h3);

    // const p = document.createElement('p');
    // p.innerText = country.capital;
    // countryDiv.appendChild(p);

    // short version

    // }



}


// add country all information with a function 

const displayCountriesDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then (res => res.json())
    .then(data =>renderCountryInfo(data[0]));
}

// add function to call dynamic api
const renderCountryInfo = country => {
    console.log(country);
    const countryDiv =document.getElementById("countryDiv");
    countryDiv.innerHTML = `
    <h1> ${country.name} </h1>
    <p> Population: ${country.population} </p>
    <p> Area: ${country.area} </p>
    <img src= "${country.flag}">

    `
}
