const fetch = require("node-fetch");
const performance = require("performance-now")
const URL = "https://swapi.co/api/people/";

/*
var start = performance();
var end = performance();

function fetchPerson(url) {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
};
async function printNames() {
    console.log(start.toFixed(3));
    console.log("Before");
    const person1 = await fetchPerson(URL + 1);
    const person2 = await fetchPerson(URL + 2);
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
    console.log((start-end).toFixed(3));
}

printNames();
*/


function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    let results = {};
    fetch(URL + id)
        .then(res => res.json())
        .then(data => {
            let newURL = data.films[0];
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
async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    let results = {}; let res; let json;
    try {
        res = await fetch(URL + id);
        json = await res.json();
        results.character = json.name;
        res = await fetch(json.films[0]);
        json = await res.json();
        results.title = json.title;
        res = await fetch(json.species[0]);
        json = await res.json();
        results.speciesName = json.name;
        res = await fetch(json.homeworld);
        json = await res.json();
        results.planet = json.name;
    }
    catch (err) {
        console.log("fecth failed", err);
    }
    console.log(results);
}

const id = process.argv[2];
console.log(getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id));
