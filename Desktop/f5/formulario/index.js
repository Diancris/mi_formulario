function p(y) {
    return document.getElementById(y);
}

function agregar(){
    var nombre = p("inputNombre").value;
    var apellidos = p("inputApellidos").value;
    var edad = p("inputEdad").value;
    var clase = p("inputClase").value;

    if (nombre==""){
		p("inputNombre").focus();
		return; // no devuelve nada si el nombre está vacío
	} 
    
    if (apellidos==""){
		p("inputApellidos").focus();
		return; // no devuelve nada si los apellidos está vacío
	}
    if (edad==""){
		p("inputEdad").focus();
		return; // no devuelve nada si el equipo está vacío
	} 
    if (clase==""){
		p("inputClase").focus();
		return; // no devuelve nada si el color está vacío
	}

    // document.getElementById("result").innerText+="Hola, soy "+nombre+" "+apellidos+". edad+" y clase "+clase+". ";

    //creamos un objeto tr que anexaremos a nuestra tabla llamada tableProductos
    let fila=document.createElement("tr");
 
    //creamos 4 elementos td en donde iran los tres valores y el botón para eliminar
    let celda1=document.createElement("td");
    let celda2=document.createElement("td");
    let celda3=document.createElement("td");
    let celda4= document.createElement("td");
    let celda5= document.createElement("td");

    //asignamos los valores a nuestros td por medio del atributo innerHTML
    celda1.innerHTML=nombre;
    celda2.innerHTML=apellidos;
    celda3.innerHTML=edad;
    celda4.innerHTML=clase;
    celda5.innerHTML="<input type='button' id='eliminar' value='Eliminar' onclick='eliminar(this)'>"

    //Ahora añadimos los hijos TD al Padre TR
    //Esta es otra manera de crear elementos HTML: usando el método appendChild
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);

    //Por último asignamos nuestro TR a la tabla con id tablaProductos
    p("tablaDatos").appendChild(fila)
 // hasta aquí la parte de añadir


    //Paralimpiar  inputs para poder agregar mas datos, y ponemos el foco nuevamente en el 
    // input de codigo

    p("inputNombre").value=""
    p("inputApellidos").value="";
    p("inputEdad").value="";
    p("inputClase").value="";
    p("inputNombre").focus();

}

function eliminar(nodoBoton){
 
    /*recibimos el botón como parámetro, obtendremos el tr */
    let filaABorrar= nodoBoton.parentNode.parentNode;
 
    //ahora que ya tenemos el padre TR, podemos eliminarlo de la siguiente manera junto a todos sus hijos
 
    p("tablaDatos").removeChild(filaABorrar);
	p("inputNombre").focus();
}