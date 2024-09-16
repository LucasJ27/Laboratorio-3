//Ejercicio 2
console.log("Ejercicio 2: Corriendo desde TypeScript");

//Ejercicio 3. Crea variables de diferentes tipos de datos (string, number, boolean, Date). Muestra sus valores en el HTML. Utiliza los siguientes tipos: string, number, boolean, Date
const cadena = "Hola, TypeScript!";
const numero = 27;
const booleano = true;
const fechas = new Date('2024-09-15');

document.getElementById("string")!.innerHTML += " " + cadena;
document.getElementById("number")!.innerHTML += " " + numero.toString();
document.getElementById("boolean")!.innerHTML += " " + (booleano ? "Verdadero" : "Falso");
document.getElementById("date")!.innerHTML += " " + fechas.toDateString();

//Ejercicio 4 Crea una función que convierta un número a una cadena de texto. Muestra el resultado en el HTML. La función debe recibir un número y devolver su representación en cadena.

const convertirNumero = (numeroo: number): string => {
    return numeroo.toString(); // Convertimos el número a cadena
};
document.getElementById("numeroConvertido")!.innerHTML += " " + convertirNumero(27); 

//Ejercicio 5. Crea un array de números y una función que sume todos los elementos del array. Muestra la suma en el HTML. La función debe recibir un array de números y devolver la suma de todos sus elementos.

const arrayNumeros: number[] = [1, 2, 3];


for (let i = 0; i < arrayNumeros.length; i++) {
    arrayNumeros[i]
}

const sumarArray = (numeros: number[]): number => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
};
const sumaTotal = sumarArray(arrayNumeros);
document.getElementById("suma")!.innerHTML = "Suma total: " + sumaTotal;

//Ejercicio 6. Crea un objeto que representa a un estudiante con nombre, edad y curso. Muestra al estudiante y sus propiedades en el HTML.  El objeto debe tener propiedades para el nombre, edad y curso del estudiante.
class Persona {
    nombre: string;
    edad: number;
    curso: string; // Propiedad opcional

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    mostrarInfo(): string {
        return `
            <div>Nombre: ${this.nombre}</div>
            <div>Edad: ${this.edad} años</div>
            <div>Curso: ${this.curso}</div>
        `;
    }
}
const Estudiante1 = new Persona("Lucas", 29, "Programacion 3")
document.getElementById("mostrarInfo")!.innerHTML = Estudiante1.mostrarInfo();


// Ejercicio 7. Define un “type” personalizado para representar una dirección con calle, ciudad y código postal. Usa este tipo para crear una dirección y muéstrala en el HTML. 
//El tipo debe tener propiedades para calle, ciudad y código postal.
type Direccion = {
    calle : string,
    ciudad : string,
    CP : number
}
const domicilio : Direccion = {
    calle : "Nasif",
    ciudad : "Mendoza",
    CP : 1542
};

const mostrarDireccion = (direccion: Direccion): string => {
    return `
        <div>Calle: ${direccion.calle}</div>
        <div>Ciudad: ${direccion.ciudad}</div>
        <div>Código Postal: ${direccion.CP}</div>
    `;
};

document.getElementById("mostrarDireccion")!.innerHTML = mostrarDireccion(domicilio);

//Ejercicio 8. Define una interfaz para un usuario que tenga nombre, correo y un método para saludar. Implementa esta interfaz en un objeto y muestra el saludo en el HTML.
// La interfaz debe definir propiedades para nombre, correo y un método que devuelva un saludo.

interface Usuario {
    nombre : string,
    correo : string,
    saludar: () => string; 
}

const User1: Usuario = {
    nombre: "Lucas",
    correo: "lucas@gmail.com",
    saludar: () => {
        return `Hola, mi nombre es ${User1.nombre} y mi correo es ${User1.correo}.`;
    }
};

document.getElementById("saludo")!.innerHTML = User1.saludar();

//Ejercicio 9.  Crea una clase `Persona` con propiedades para nombre y edad. Implementa un método para presentarse y muestra el resultado en el HTML.
//La clase debe tener un constructor para inicializar nombre y edad, y un método que devuelva una cadena con la presentación.
class Persona2 {
    nombre : string;
    edad : number;
    
    constructor(nombre:string, edad: number){
        this.nombre = nombre,
        this.edad = edad
    }

    presentarse() : string{
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
}
const Lucas = new Persona2("Lucas", 29)

document.getElementById("presentacion")!.innerHTML = Lucas.presentarse();

//Ejercicio 10. Crea una clase genérica `Caja` que almacena un valor de tipo genérico. Implementa un método para obtener el valor y muestra los resultados en el HTML.
//La clase debe permitir almacenar y obtener un valor de cualquier tipo.
    //  –  Requisitos:
    //  ●	llamar la función pasándole el type string
    //  ●	llamar la función pasándole el type number 
    //  ●	verificar que el tipo de dato pasado y el parámetro se muestran correctamente

class Caja <T>{
    valor : T;
    constructor(valor : T){
        this.valor = valor
    }
    obtenerValor(): T{
        return this.valor
    }
}

const cajaString = new Caja<string>("String")
document.getElementById("valorTipoString")!.innerHTML = `El valor es: ${cajaString.obtenerValor()}`;

const cajaNumber = new Caja<number>(29)
document.getElementById("valorTipoNumber")!.innerHTML = `El valor es: ${cajaNumber.obtenerValor()}`;

//Ejercicio 11. Crea una función genérica `identidad` que devuelva el mismo valor que recibe. Usa esta función para diferentes tipos y muestra los resultados en el HTML.
//La función debe aceptar un valor de cualquier tipo y devolverlo sin modificarlo.

function identidad<T>(valor: T) {
    return valor;
}

const tipoIdentidad = identidad("String");
document.getElementById("identidadString")!.innerHTML = `Identidad del texto: ${tipoIdentidad}`
const tipoIdentidad2 = identidad(29);
document.getElementById("identidadNumero")!.innerHTML = `Identidad del numero: ${tipoIdentidad2}`

//Ejercicio 12. Define una enumeración `Color` con valores para diferentes colores. Usa esta enumeración para asignar un color favorito a una variable y muéstralo en el HTML.
//La enumeración debe incluir al menos tres colores diferentes.
// Requisitos:
// ●	Genera un enum con tre colores
// ●	Asigna a una variable el enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

const colorFavorito: Color = Color.Verde;

document.getElementById("colorFavorito")!.innerHTML = `Color favorito: ${colorFavorito}`;



