// //EJERCICIO 1.2
 let a = 5
 let b = 10
 let c = a+b
 console.log(`La suma de a y b es ${c}`)
// //EJERCICIO 1.3
 let userInput = prompt("¿Cual es tu nombre?");
 console.log(`Hola, ${userInput}!`);

// //EJERCICIO 2.1
// //Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y determina cual es el mayor. Imprime el resultado en la consola.
 let a2 = 10
 let b2 = 20
 let c2 = 30
 if (a2>b2 && a2>c2){
   console.log(`El mayor de los tres numeros es: ${a2}`)
 }else if(b2>a2 && b2>c2){
   console.log(`El mayor de los tres numeros es: ${b2}`)
 }else{
   console.log(`El mayor de los tres numeros es: ${c2}`)
 }

// //EJERCICIO 2.2
// //Crea un programa que pida al usuario un número y determine si es par o impar.
 let userInput2 = Number(prompt(`Ingresa un número y te diré si es par o impar`));

 if (isNaN(userInput2)) {
   console.log(`Por favor, ingresa un número válido.`);
 } else if (userInput2 % 2 === 0) {
   console.log(`El número ${userInput2}, es par.`);
 } else {
   console.log(`El número ${userInput2}, es impar.`);
 }

// //EJERCICIO 3.1
// //Crea un script que inicialice una variable en 10 y luego use un bucle while para restarle 1 en cada iteración hasta que la variable sea igual a 0. Imprime el valor de la variable en cada iteración.
 let inicializa = 10;
 while (inicializa > 0) {
   console.log(inicializa);
   inicializa--;
 }

// //EJERCICIO 3.2
// //Escribe un programa que utilice un bucle do...while para pedirle al usuario que ingrese un número mayor a 100. El bucle debe repetirse hasta que el usuario ingrese un número mayor a 100.
// //Requisitos: Debe utilizarse la instrucción prompt y luego mostrar por consola el numero ingresado de la manera que se muestra abajo

 let numMayor;
 do {
   numMayor = prompt(`Ingresa un numero mayor a 100:`)
 } while (numMayor <= 100);
 console.log(`Ingresaste un numero mayor a 100: ${numMayor}`)

// //EJERCICIO 4.1
// //Escribe una función llamada esPar que reciba un número como parámetro y retorne true si el número es par y false si es impar. Prueba la función con diferentes números.
 function esPar(numero){
   if(numero%2 === 0){
     return true
   }else{
     return false
   }
 }
 console.log(esPar(1))

//EJERCICIO 4.2
//Crea una función llamada convertirCelsiusAFahrenheit que reciba un valor en grados Celsius y lo convierta a Fahrenheit. La fórmula es F = C × 1.8 + 32. Muestra el resultado en la consola.

 let grados = Number(prompt(`Ingresa los grados a convertir:`))
 function convertirCelsiusAFahrenheit(C){
   let Fahren = ((C * 1.8) + 32);
   return Fahren
 }
 console.log(`${grados}°C son equivalentes a ${convertirCelsiusAFahrenheit(grados)}°F`)

// //EJERCICIO 5.1
// //Define un objeto persona con las propiedades nombre, edad, y ciudad. Luego, agrega un método que permita cambiar la ciudad de la persona. 
// //Usa el método para actualizar la ciudad y muestra las propiedades actualizadas en la consola.

 let persona = {
   nombre: `Lucas`,
   edad: `29`,
   ciudad: `Mendoza`,
   cambiarCiudad: function(nuevaCiudad) {
     this.ciudad = nuevaCiudad;
   }
 }
 console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
 persona.cambiarCiudad("Buenos Aires");
 console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);

// //EJERCICIO 5.2
// //Crea un objeto libro con propiedades titulo, autor, y año. Luego, escribe un método que determine si el libro tiene más de 10 años desde su publicación.
// //Muestra un mensaje en la consola indicando si el libro es antiguo o reciente.

 let libro = {
   titulo:`Cien años de soledad`,
   autor:`Gabriel García Márquez`,
   año: 1967,
   esAntiguo: function() {
     let añoActual = new Date().getFullYear();
     let añosDesdePublicacion = añoActual - this.año;
     let esAntiguo = añosDesdePublicacion > 10

     return `El libro "${this.titulo}" es antiguo? : ${esAntiguo}`
   }
 };

 console.log(libro.esAntiguo());

//EJERCICIO 6.1
//Declara un array llamado numeros con los números del 1 al 10. Escribe un bucle que multiplique cada número por 2 y almacene los resultados en un nuevo array.
//Muestra el array original y el nuevo array en la consola.

 let numeros = [1,2,3,4,5,6,7,8,9,10]
 let numeros2 =[];
 for (let i = 0; i < numeros.length; i++) {
   let doble = numeros[i]*2
   numeros2.push(doble)  
 }
 console.log(numeros)
 console.log(numeros2)

// //EJERCICIO 6.2
// //Crea un array vacío llamado pares. Escribe un bucle for que itere hasta 20 y que agregue los primeros 10 números pares al array. Al final, imprime el array pares en la consola.

 let pares=[]
 for (let i=0; i<21; i++) {
   if(i !==0 && i%2 === 0 && pares.length < 10){
     pares.push(i)
   }  
 }
 console.log(`Primeros 10 numeros pares: ${pares}`)

//EJERCICIO 7.1
//En el html muestra tres elementos de tipo <p> y haz un botón que dispara una función y nos permita cambiar todos nuestros elementos de tipo p en nuestra pagina de color azul

 const button = document.getElementById("cambiarColor");

 button.addEventListener("click", () => {
     colorParrafo();
 });

 const colorParrafo = () => {
     const ps = document.querySelectorAll("p");

     ps.forEach(parrafo => {
         parrafo.style.color = "blue";
     });
 };

//EJERCICIO 7.2
//Crea un formulario simple con un campo de texto y un botón. Escribe un script en JavaScript que muestre una alerta con el valor ingresado en el campo de texto cuando el usuario
//haga clic en el botón.

 const mostrarAlerta = document.getElementById("mostrarAlerta")

 const showMessage = ()=>{
     const message = document.getElementById("message").value;
     alert(`Has ingresado: ${message}`)
 }

 mostrarAlerta.addEventListener('click',()=>{
     showMessage()
 })

//EJERCICIO 8.1
//Crea una lista (<ul>) con varios elementos (<li>). Escribe un script que agregue un evento click a cada elemento de la lista para que, cuando se haga clic en un li,
//se muestre su texto en la consola.

 const elementos = document.querySelectorAll(".elementos");
 const showElement = (event) => {
   console.log(event.target.textContent);
 }
 elementos.forEach((elemento) => {
   elemento.addEventListener('click', showElement);
 });

//EJERCICIO 8.2
//Crea un campo de texto y un botón en una página HTML. Escribe un script que haga que el botón deshabilite el campo de texto cuando se haga clic en él. Luego, añade otro botón que vuelva a habilitar el campo de texto.
//Requisitos: al estar deshabilitado nuestro input no puede apretarse, no tiene hover y al habilitarse si

const texto1 = document.getElementById("texto1");
const Deshabilitar = document.getElementById("Deshabilitar");
const Habilitar = document.getElementById("Habilitar");

Deshabilitar.addEventListener("click", () => {
    texto1.disabled = true;
});

Habilitar.addEventListener("click", () => {
    texto1.disabled = false;
});

//EJERCICIO 9.1
//Crea un formulario con un campo para el correo electrónico. Escribe un script que guarde el correo en localStorage cuando el usuario envíe el formulario.
//si este existe muestralo en el dom debajo del input y tambien haz un botón de eliminar este elemento, al recargar la pagina este debe mostrarse si 


// Función para guardar el correo en localStorage

const saveEmail = () => {
    const emailInput = document.getElementById("reciboEmail");
    const email = emailInput.value;
    if (email) {
      localStorage.setItem("email", email);
      displayEmail();
    }
  };
  
  // Función para mostrar el correo desde localStorage
  const displayEmail = () => {
    const emailDisplay = document.getElementById("emailDisplay");
    const email = localStorage.getItem("email");
    if (email) {
      emailDisplay.textContent = `Correo electrónico guardado: ${email}`;
    } else {
      emailDisplay.textContent = '';
    }
  };
  
  // Función para eliminar el correo de localStorage
  const deleteEmail = () => {
    localStorage.removeItem("email");
    displayEmail();
  };
  
  // Añadir eventos a los botones
  document.getElementById("btnEmail").addEventListener('click', saveEmail);
  document.getElementById("btnEliminar").addEventListener('click', deleteEmail);
  
  // Mostrar el correo guardado al cargar la página
  window.addEventListener('load', displayEmail);