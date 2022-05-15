import { queryData } from "./startDatabase"
import { buildFilteredTable } from "./searchResults"
import './css/index.css'

//Variable que captura los estudiantes y sus datos de la base de datos
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

    //Se crea una expresion regular en base a Searchbox
    let searchboxER = new RegExp (searchValue.value, 'i')

    return (
      //elem[`${optionValue.value}`] === searchValue.value
      //Por cada elemento de la base de datos, busca el dato segun la opcion de busqueda elegida
      //Si coincide con la expresion regular los agrega a la tabla filtrada
      searchboxER.test(elem[`${optionValue.value}`]) === true
    )
  })
  buildFilteredTable(studentsFiltered);
}

//Compara y filtra los datos ingresados segun el parámetro de busqueda elegido
searchButton.addEventListener("click", results);
searchMain.addEventListener("submit", (e) => {
  e.preventDefault();
  results();
});