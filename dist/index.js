"use strict";

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

require("./css/index.css");

//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js"
//import { getFirestore, collection, getDocs, query } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
const firebaseApp = (0, _app.initializeApp)({
  apiKey: "AIzaSyAbB5YTMV3gkN-VvegI39ogGyeJBo0Ng5I",
  authDomain: "school-5aab5.firebaseapp.com",
  projectId: "school-5aab5"
});
const db = (0, _firestore.getFirestore)(firebaseApp);
const consulta = (0, _firestore.query)((0, _firestore.collection)(db, 'school'));
let queryData = await (0, _firestore.getDocs)(consulta).catch(e => console.log(e)); //Variable que catura los estudiantes y sus datos de la base de datos

let studentsArray = [];
queryData.forEach(student => studentsArray.push(student.data()));
let searchValue = document.getElementById("searchBox");
let optionValue = document.getElementById("searchOptions");
let searchButton = document.getElementById("searchButton");
let titleSearch = document.getElementById("titleSearch"); //Compara y filtra los datos ingresados segun el parámetro de busqueda elegido

searchButton.addEventListener("click", results);

function results() {
  let table = document.getElementById('databaseTable');
  table.innerHTML = '';
  const studentsFiltered = studentsArray.filter(elem => {
    return elem["".concat(optionValue.value)] === searchValue.value;
  });
  buildFilteredTable(studentsFiltered);
} //Convierte la marca de tiempo a la fecha en formato dd/mm/aaaa


function getOnlyDate(timestamp) {
  let date = new Date(timestamp.seconds * 1000);
  return date.toLocaleString('es-MX', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
} // //Genera la tabla filtrada de los alumnos y su informacion desde la base de datos de firebase
// ARREGLAR Barra de Busquedas


function buildFilteredTable(data) {
  //Variable que guarda la tabla de las busquedas
  let studentElements = '';
  let table = document.getElementById('databaseTable');
  let studentTable = document.getElementById('studentTable');
  data.forEach(elem => {
    studentElements = "\n    ".concat(!!studentElements ? studentElements : '', "\n    <tr>\n      <th scope=\"row\">").concat(elem.id, "</th>\n      <td>").concat(elem.name, "</td>\n      <td>").concat(elem.course, "</td>\n      <td>").concat(elem.grade, "</td>\n      <td>").concat(getOnlyDate(elem.startDate), "</td>\n      <td>").concat(getOnlyDate(elem.endDate), "</td>\n      <td class=\"d-flex\">\n        <a class=\"mx-4\" href=\"#\"><img src=\"images/plus.png\"/></a>\n      </td>\n    </tr>\n    ");
    table.innerHTML = studentElements;
    titleSearch.style.display = "block";
    studentTable.style.display = 'table';
  });
}