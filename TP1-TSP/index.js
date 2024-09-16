"use strict";
//Ejercicio 2
console.log("Ejercicio 2: Corriendo desde TypeScript");
//Ejercicio 3. Crea variables de diferentes tipos de datos (string, number, boolean, Date). Muestra sus valores en el HTML. Utiliza los siguientes tipos: string, number, boolean, Date
const cadena = "Hola, TypeScript!";
const numero = 27;
const booleano = true;
const fechas = new Date('2024-09-15');
document.getElementById("string").innerHTML += " " + cadena;
document.getElementById("number").innerHTML += " " + numero.toString();
document.getElementById("boolean").innerHTML += " " + (booleano ? "Verdadero" : "Falso");
document.getElementById("date").innerHTML += " " + fechas.toDateString();
//Ejercicio 4 Crea una función que convierta un número a una cadena de texto. Muestra el resultado en el HTML. La función debe recibir un número y devolver su representación en cadena.
const convertirNumero = (numeroo) => {
    return numeroo.toString(); // Convertimos el número a cadena
};
document.getElementById("numeroConvertido").innerHTML += " " + convertirNumero(27);
//Ejercicio 5. Crea un array de números y una función que sume todos los elementos del array. Muestra la suma en el HTML. La función debe recibir un array de números y devolver la suma de todos sus elementos.
const arrayNumeros = [1, 2, 3];
for (let i = 0; i < arrayNumeros.length; i++) {
    arrayNumeros[i];
}
const sumarArray = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
};
const sumaTotal = sumarArray(arrayNumeros);
document.getElementById("suma").innerHTML = "Suma total: " + sumaTotal;
//Ejercicio 6. Crea un objeto que representa a un estudiante con nombre, edad y curso. Muestra al estudiante y sus propiedades en el HTML.  El objeto debe tener propiedades para el nombre, edad y curso del estudiante.
class Persona {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    mostrarInfo() {
        return `
            <div>Nombre: ${this.nombre}</div>
            <div>Edad: ${this.edad} años</div>
            <div>Curso: ${this.curso}</div>
        `;
    }
}
const Estudiante1 = new Persona("Lucas", 29, "Programacion 3");
document.getElementById("mostrarInfo").innerHTML = Estudiante1.mostrarInfo();
const domicilio = {
    calle: "Nasif",
    ciudad: "Mendoza",
    CP: 1542
};
const mostrarDireccion = (direccion) => {
    return `
        <div>Calle: ${direccion.calle}</div>
        <div>Ciudad: ${direccion.ciudad}</div>
        <div>Código Postal: ${direccion.CP}</div>
    `;
};
document.getElementById("mostrarDireccion").innerHTML = mostrarDireccion(domicilio);
const User1 = {
    nombre: "Lucas",
    correo: "lucas@gmail.com",
    saludar: () => {
        return `Hola, mi nombre es ${User1.nombre} y mi correo es ${User1.correo}.`;
    }
};
document.getElementById("saludo").innerHTML = User1.saludar();
//Ejercicio 9.  Crea una clase `Persona` con propiedades para nombre y edad. Implementa un método para presentarse y muestra el resultado en el HTML.
//La clase debe tener un constructor para inicializar nombre y edad, y un método que devuelva una cadena con la presentación.
class Persona2 {
    constructor(nombre, edad) {
        this.nombre = nombre,
            this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
}
const Lucas = new Persona2("Lucas", 29);
document.getElementById("presentacion").innerHTML = Lucas.presentarse();
//Ejercicio 10. Crea una clase genérica `Caja` que almacena un valor de tipo genérico. Implementa un método para obtener el valor y muestra los resultados en el HTML.
//La clase debe permitir almacenar y obtener un valor de cualquier tipo.
//  –  Requisitos:
//  ●	llamar la función pasándole el type string
//  ●	llamar la función pasándole el type number 
//  ●	verificar que el tipo de dato pasado y el parámetro se muestran correctamente
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
const cajaString = new Caja("String");
document.getElementById("valorTipoString").innerHTML = `El valor es: ${cajaString.obtenerValor()}`;
const cajaNumber = new Caja(29);
document.getElementById("valorTipoNumber").innerHTML = `El valor es: ${cajaNumber.obtenerValor()}`;
//Ejercicio 11. Crea una función genérica `identidad` que devuelva el mismo valor que recibe. Usa esta función para diferentes tipos y muestra los resultados en el HTML.
//La función debe aceptar un valor de cualquier tipo y devolverlo sin modificarlo.
function identidad(valor) {
    return valor;
}
const tipoIdentidad = identidad("String");
document.getElementById("identidadString").innerHTML = `Identidad del texto: ${tipoIdentidad}`;
const tipoIdentidad2 = identidad(29);
document.getElementById("identidadNumero").innerHTML = `Identidad del numero: ${tipoIdentidad2}`;
//Ejercicio 12. Define una enumeración `Color` con valores para diferentes colores. Usa esta enumeración para asignar un color favorito a una variable y muéstralo en el HTML.
//La enumeración debe incluir al menos tres colores diferentes.
// Requisitos:
// ●	Genera un enum con tre colores
// ●	Asigna a una variable el enum
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
const colorFavorito = Color.Verde;
document.getElementById("colorFavorito").innerHTML = `Color favorito: ${colorFavorito}`;
