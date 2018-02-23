import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

// You must implement the makeTable(..) function, used below:
//const table = makeTable(persons);


function Person(fn, ln, s) {
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
};

const persons = [
  new Person("Kurt", "Wonnegut", "Socker"),
  new Person("Jan", "Peterson", "Hockey"),
  new Person("Jane", "Peterson", "Skating"),
  new Person("John", "Hansen", "Socker"),
];


function makeTable(data) {
  const headers = _.keys(data[0]);
  const headerHTML = headers.map(h => <th>${_.startCase(h)}</th>).join(" ");
  const bodyHTML = data.map((p) => {
      return "<tr>" + headers.map(property => <td>${p[property]}</td>).join("") + "</tr>";
  }).join("");
  return `<table class="table">
  <thead><tr>${headerHTML}</tr></thead>
  <tbody>${bodyHTML}</tbody>
  </table>`
}