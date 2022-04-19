import { queryData } from "./startDatabase"
import { buildFilteredTable } from "./searchResults"
import './css/index.css'

//Variable que catura los estudiantes y sus datos de la base de datos
let studentsArray = [];
queryData.forEach((student) =>  studentsArray.push(student.data()));

let searchValue = document.getElementById("searchBox");
let optionValue = document.getElementById("searchOptions");
let searchButton = document.getElementById("searchButton");

//Obtiene los datos de la base de datos
const results = () => {

  let table = document.getElementById('databaseTable');
  table.innerHTML = '';

  const studentsFiltered = studentsArray.filter(elem => {
    return (
      elem[`${optionValue.value}`] === searchValue.value
    )
  })
  buildFilteredTable(studentsFiltered);
}

//Compara y filtra los datos ingresados segun el parámetro de busqueda elegido
searchButton.addEventListener("click", results);