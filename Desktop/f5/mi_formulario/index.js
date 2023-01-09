function p(y) {
    return document.getElementById(y);
}

function agregar(){
    var nombre = p("inputNombre").value;
    var apellidos = p("inputApellidos").value;
    var edad = p("inputEdad").value;
    var clase = p("inputClase").value;


    // no devolvera el nombre si el campo está vacío
    if (nombre==""){
		p("inputNombre").focus();
		return; 
	} 
    
    // no devolvera el nombre si el campo está vacío
    if (apellidos==""){
		p("inputApellidos").focus();
		return; 
	}
    // no devolvera el nombre si el campo está vacío
    if (edad==""){
		p("inputEdad").focus();
		return; 
	} 
    // no devolvera el nombre si el campo está vacío
    if (clase==""){
		p("inputClase").focus();
		return; 
	}

    // document.getElementById("result").innerText+="Hola, soy "+nombre+" "+apellidos+". edad+" y clase "+clase+". ";

    //creamos un objeto tr que anexaremos a nuestra tabla llamada tableProductos
    let fila=document.createElement("tr");
 
    //Se crea 4 elementos td en donde iran los tres valores y el botón para eliminar
    let celda1=document.createElement("td");
    let celda2=document.createElement("td");
    let celda3=document.createElement("td");
    let celda4= document.createElement("td");
    let celda5= document.createElement("td");

    //Se le asigna los valores a nuestros td por medio del atributo innerHTML
    celda1.innerHTML=nombre;
    celda2.innerHTML=apellidos;
    celda3.innerHTML=edad;
    celda4.innerHTML=clase;
    celda5.innerHTML="<input type='button' id='eliminar' value='Eliminar' onclick='eliminar(this)'>"

    //Se añada los hijos TD al Padre TR
    //Esta es otra manera de crear elementos HTML: usando el método appendChild
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);

    //Por último asignamos nuestro TR a la tabla con id tablaProductos
    p("tablaDatos").appendChild(fila)
    // hasta aquí la parte de añadir


    //Se limpia con  inputs para así poder agregar más datos, y nos basamos nuevamente en el input de codigo// 
    p("inputNombre").value=""
    p("inputApellidos").value="";
    p("inputEdad").value="";
    p("inputClase").value="";
    p("inputNombre").focus();

}

function eliminar(nodoBoton){
 
    // Aquí usmos el botón como parámetro, obtendremos el tr 
    let filaABorrar= nodoBoton.parentNode.parentNode;
 
    //ahora que ya se tiene el padre TR, se puede eliminar de la siguiente manera junto a todos sus hijos
    p("tablaDatos").removeChild(filaABorrar);
	p("inputNombre").focus();
}