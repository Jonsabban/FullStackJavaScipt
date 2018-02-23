const fetch = require("node-fetch");
const URL = "https://swapi.co/api/people/";

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    let results = {};

    fetch(URL + id)
        .then(res => res.json())
        .then(data => {
            let newURL = data.films[0];
            console.log(newURL);
            results.personName = data.name;

            return fetch(newURL).then(res => res.json())
        })
        .then(data => {
            let newURL = data.species[0];
            console.log(newURL);
            results.title = data.title;

            return fetch(newURL).then(res => res.json())
        })
        .then(data => {
            let newURL = data.homeworld;
            console.log(newURL);
            results.speciesName = data.name;

            return fetch(newURL).then(res => res.json())
        })
        .then(data => {
            results.planet = data.name;
            console.log(results);
        })
        .catch(err => console.log("Error: " + err));
}

const id = process.argv[2];
getPlanetforFirstSpeciesInFirstMovieForPerson(id);

