//Convierte la marca de tiempo a la fecha en formato dd/mm/aaaa
const getOnlyDate = (timestamp) => {
    let date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

//Titulo que muestra exitosa o fallida la busqueda
let titleSearch = document.getElementById("titleSearch");

//Devuelve una fila de tabla en base a la informacion recibida del estudiante
const buildRow = (student) => {
    return `<tr>
        <th scope="row">${student.id}</th>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>${student.grade}</td>
        <td>${getOnlyDate(student.startDate)}</td>
        <td>${getOnlyDate(student.endDate)}</td>
        <td class="d-flex">
        <a class="mx-4" href="#"><img src="images/plus.png"/></a>
        </td>
    </tr>`
}

//Construye la tabla de busqueda juntando las filas de la funcion buildRow
const buildTable = (students) => {
    return students.map(student => buildRow(student)).join('')
}

// //Genera la tabla filtrada de los alumnos y su informacion desde la base de datos de firebase
export const buildFilteredTable = (data) => {

    //Variable que guarda la tabla de las busquedas
    let studentElements = '';
    let table = document.getElementById('databaseTable');
    let studentTable = document.getElementById('studentTable');

    studentElements = buildTable(data)

    //Muestra los resultados de la busqueda
    if(studentElements){
        table.innerHTML = studentElements;
        titleSearch.textContent = "Resultado de busqueda"
        studentTable.style.display = 'table';
    }
    else{
        titleSearch.textContent = "No se encontraron resultados"
        studentTable.style.display = 'none';
    }

}