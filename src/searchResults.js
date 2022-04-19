//Convierte la marca de tiempo a la fecha en formato dd/mm/aaaa
const getOnlyDate = (timestamp) => {
    let date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

let titleSearch = document.getElementById("titleSearch");

// //Genera la tabla filtrada de los alumnos y su informacion desde la base de datos de firebase
// ARREGLAR Barra de Busquedas
export const buildFilteredTable = (data) => {

    //Variable que guarda la tabla de las busquedas
    let studentElements = '';
    let table = document.getElementById('databaseTable');
    let studentTable = document.getElementById('studentTable');

    data.forEach(elem => {

        studentElements = `
  ${!!studentElements ? studentElements : ''}
  <tr>
    <th scope="row">${elem.id}</th>
    <td>${elem.name}</td>
    <td>${elem.course}</td>
    <td>${elem.grade}</td>
    <td>${getOnlyDate(elem.startDate)}</td>
    <td>${getOnlyDate(elem.endDate)}</td>
    <td class="d-flex">
      <a class="mx-4" href="#"><img src="images/plus.png"/></a>
    </td>
  </tr>
  `

        table.innerHTML = studentElements;
        titleSearch.style.display = "block";
        studentTable.style.display = 'table';
    })
}