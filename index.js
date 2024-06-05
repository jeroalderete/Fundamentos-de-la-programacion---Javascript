/*  VAMOS A TESTEAR EN NODE para eso ejecutamos  npm init -y  para que se genere nuestro package.json luego ejecutamos el comando    --------> node index.js


--------------------------------------------------------------------------

 Variables y Tipos de Datos:

    Variables: Contenedores para almacenar datos.
    Tipos de Datos: Define el tipo de información que puede contener una variable, como números, cadenas de texto, booleanos, etc.

    Variables:
    var: Antes de ES6 (ECMAScript 2015), la forma más común de declarar variables.
    let: Introducido en ES6, permite declarar variables con alcance de bloque.
    const: También introducido en ES6, declara variables de solo lectura con alcance de bloque.

-----------------------------------------------------------------------------------

Tipos de datos:

    Number: Representa tanto números enteros como de punto flotante .//   Number
    String: Secuencias de caracteres, como en otros lenguajes. // "" string
    Boolean: Representa un valor de verdad: verdadero o falso. 
    Null: Representa un valor nulo o vacío.
    Undefined: Indica que una variable no está definida o no tiene valor.
    Object: Colección de pares clave-valor. // {} objeto
    Array: Una estructura de datos que almacena una colección de elementos, puede contener diferentes tipos de datos. // [ ] array
    Function: Bloque de código reutilizable que se puede ejecutar cuando se llama.


----------------------------------------------------------------

OPERADORES


Operadores aritméticos:

    Suma: +
    Resta: -
    Multiplicación: *
    División: /
    Módulo (resto de la división): %
    Incremento: ++
    Decremento: --

Operadores de comparación:

    Igualdad: ==
    Desigualdad: !=
    Estrictamente igual: ===
    Estrictamente desigual: !==
    Mayor que: >
    Menor que: <
    Mayor o igual que: >=
    Menor o igual que: <=

Operadores lógicos:

    AND lógico: &&
    OR lógico: ||
    NOT lógico: !

Operadores de asignación:

let numero = 10

let numero2 = 12

let numeroresultado = numero + numero2

numero += numero2

    Asignación: =
    Asignación con suma: +=
    Asignación con resta: -=
    Asignación con multiplicación: *=
    Asignación con división: /=
    Asignación con módulo: %=

Operador ternario (condicional):

    condición ? expresión1 : expresión2 // NO SE RECOMIENDA ANIDAR TERNARIOS, SOLO PARA EVALUAR 1 CONDICION

Operadores de tipo:

    typeof: Devuelve una cadena que indica el tipo de un operando.

Operadores de concatenación:

    Para concatenar cadenas de caracteres: +

Estructuras de Control:

    1 - Condicionales (if-else): Ejecutan cierto bloque de código si se cumple una condición.

    2 - Bucles (loops):
        For: Itera sobre una secuencia de elementos un número específico de veces.
        switch:
        forEach:
        for in:
                While: Itera hasta que una condición se vuelva falsa.
        Do-While: Similar al while, pero garantiza que el bloque de código se ejecute al menos una vez.

Funciones:

    Bloques de código reutilizables que realizan una tarea específica.
    Pueden aceptar parámetros y devolver resultados.

   
Arreglos y Listas:

    Colecciones de elementos ordenados.
    Se pueden acceder y manipular mediante índices.



Estructuras de Datos:

    Objetos: Colecciones de propiedades que representan una entidad.
    Arrays (Arreglos): Colecciones ordenadas de elementos.

Algoritmos:

    Conjuntos de instrucciones paso a paso para realizar una tarea específica.
    Se basan en estructuras de control y operaciones sobre datos.


Modularidad:

    ividir el código en partes más pequeñas y manejables (módulos o funciones).
    Promueve la reutilización y la facilidad de mantenimiento.

Paradigmas de Programación:

    Programación Imperativa: Se centra en cómo lograr un resultado paso a paso.
    Programación Declarativa: Se centra en describir qué resultado se desea obtener, sin preocuparse por los pasos para lograrlo.

    
Buenas Prácticas y Patrones de Diseño:

    DRY (Don't Repeat Yourself): Evita la repetición de código.
    KISS (Keep It Simple, Stupid): Mantén las soluciones simples y fáciles de entender.
    Patrones de Diseño: Soluciones probadas y comunes para problemas de diseño de software.

*/

// Tip adicional : Ver nuestra app de backend como un cliente y alguien que provee un servicio



/* ---------------------------------------------------------------------------------------- */ 


/* Arquitectura de Carpeta o Directorio - ESTA ES LA ESTRUCTURA CLASICA DE UN PROYECTO BACKEND

/project-root
├── controllers
│   ├── productManager.js        # Controlador para manejar la lógica de productos
│   └── cartManager.js           # Controlador para manejar la lógica del carrito
├── config
│   └── database.js              # Configuración de la conexión a la base de datos
├── routes
│   ├── index.js                 # Archivo principal de rutas
│   ├── productRoutes.js         # Rutas relacionadas con productos
│   └── cartRoutes.js            # Rutas relacionadas con el carrito
├── services
│   ├── cloudinaryService.js     # Servicio para manejar operaciones con Cloudinary
│   └── encryptionService.js     # Servicio para manejar operaciones de encriptación
├── views
│   ├── layouts
│   │   └── main.handlebars      # Layout principal para Handlebars
│   ├── partials
│   │   └── header.handlebars    # Parcial para el header
│   └── pages
│       ├── home.handlebars      # Vista para la página principal
│       └── product.handlebars   # Vista para la página de producto
├── auth
│   ├── middleware
│   │   ├── isAdmin.js           # Middleware para verificar si el usuario es administrador
│   │   └── isAuthenticated.js   # Middleware para verificar si el usuario está autenticado
│   ├── login.js                 # Ruta y lógica para el inicio de sesión
│   └── register.js              # Ruta y lógica para el registro
├── api
│   └── apiRoutes.js             # Rutas para la API
├── middlewares
│   ├── errorHandler.js          # Middleware para manejo de errores
│   └── logger.js                # Middleware para logging
├── utils
│   ├── config.js                # Configuración global del proyecto
│   ├── constants.js             # Constantes utilizadas en todo el proyecto
│   ├── helpers.js               # Funciones de ayuda
│   └── validator.js             # Funciones para validación de datos
├── package.json                 # Dependencias y scripts del proyecto
└── README.md                    # Documentación del proyecto


----------------------------------------------------------------------------------------------

EJEMPLOS DE ARQUITECTURA MAS POPULARES


1. Arquitectura Monolítica:

En una arquitectura monolítica, toda la lógica de la aplicación se encuentra en un solo código base. 
Esto incluye la lógica de negocio, la capa de acceso a datos, las rutas HTTP, la autenticación, etc. 
Aunque es más simple de desarrollar e implementar, puede volverse complejo y difícil de mantener a medida que la aplicación crece.

2. Arquitectura de Microservicios: (La usan las grandes empresas por ej Netflix - tiene aprox 700 microservicios en su plataforma)

En una arquitectura de microservicios, la aplicación se divide en varios servicios independientes y autosuficientes, cada uno implementado y desplegado de forma independiente. 
Cada microservicio se enfoca en una única función de negocio y se comunica con otros microservicios a través de API.
Esto permite una mayor escalabilidad, flexibilidad y mantenibilidad, pero también introduce complejidad adicional en la gestión de múltiples servicios.

3. Arquitectura MVC (Modelo-Vista-Controlador):

La arquitectura MVC es un patrón de diseño que separa la lógica de la aplicación en tres componentes principales: Modelo, Vista y Controlador. 
En una aplicación Express, el modelo representa los datos de la aplicación y la lógica de negocio, la vista es la representación visual de los datos 
(generalmente HTML generado dinámicamente), 
y el controlador maneja las solicitudes HTTP y coordina la interacción entre el modelo y la vista.


4. Arquitectura MVVM (Modelo-Vista-Vista-Modelo):

La arquitectura MVVM es similar a MVC, pero con una capa de abstracción adicional llamada "Vista-Modelo". 
En esta arquitectura, la vista se comunica con el "Vista-Modelo", que a su vez se comunica con el modelo de la aplicación. 
El "Vista-Modelo" actúa como una interfaz entre la vista y el modelo, facilitando la reutilización y la modularidad del código.

5. Arquitectura de Capas:

En una arquitectura de capas, la aplicación se divide en capas lógicas distintas, cada una responsable de una parte específica de la funcionalidad de la aplicación. 
Por ejemplo, puede haber capas para la presentación, la lógica de negocio y el acceso a datos. Cada capa se comunica con las capas adyacentes a través de interfaces bien definidas.

6. Arquitectura Serverless:

En una arquitectura serverless, la infraestructura subyacente necesaria para ejecutar y escalar la aplicación se gestiona completamente por el proveedor de servicios en la nube. 
Esto permite a los desarrolladores centrarse únicamente en la lógica de la aplicación sin preocuparse por la gestión de servidores. Las funciones son ejecutadas de forma efímera,
 lo que puede ofrecer un modelo de costos más flexible y escalable.

-------------------------------------------------------------------------------------------

Cada una de estas arquitecturas tiene sus propias ventajas y desventajas, y la elección de una arquitectura particular dependerá de factores como los requisitos del proyecto, 
la escala de la aplicación, la experiencia del equipo y las preferencias personales.

-----------------------------------------------------------------------------------------------

/* EJEMPLOS EN JAVASCRIPT */

// Variables y tipos de datos básicos:

// Variables de diferentes tipos de datos
let entero = 10; // letiable entera
let flotante = 3.14; // letiable flotante
let cadena = "Hola Mundo"; // letiable cadena de caracteres
let booleano = true; // letiable booleana

/* Mostrar letiables en la consola
console.log(entero); // Imprime: 10
console.log(flotante); // Imprime: 3.14
console.log(cadena); // Imprime: Hola Mundo
console.log(booleano); // Imprime: true*/

// Operaciones aritméticas:

let num1 = 10;
let num2 = 5;

// Suma
let suma = num1 + num2; // 10 + 5 = 15
// console.log(suma); // Imprime: 15

// Resta
let resta = num1 - num2; // 10 - 5 = 5
// console.log(resta); // Imprime: 5

// Multiplicación
let multiplicacion = num1 * num2; // 10 * 5 = 50
// console.log(multiplicacion); // Imprime: 50

// División
let division = num1 / num2; // 10 / 5 = 2
// console.log(division); // Imprime: 2

// Módulo (resto de la división)
let modulo = num1 % num2; // 10 % 5 = 0
// console.log(modulo); // Imprime: 0

// Operadores de comparación:

let x = 5;
let y = 10;

console.log(x == y); // false
console.log(x < y); // true
console.log(x > y); // false
console.log(x != y); // true

/* --------------- EJEMPLO DE ESTRUCTURAS DE CONTROL EN JAVASCRIPT PARA EVALUAR DATOS -------------- */

// Estructura de control if-else:

let edad = 18;

if (edad >= 18) {
   console.log("Eres mayor de edad.");
} else {
   console.log("Eres menor de edad.");
}

// Estructura de control if-else if-else:

let hora = 14;

if (hora < 12) {
   console.log("Buenos días.");
} else if (hora >= 12 && hora < 18) {
   console.log("Buenas tardes.");
} else {
   console.log("Buenas noches.");
}

// Estructura de control switch:

let dia = "Lunes";

switch (dia) {
   case "Lunes":
      console.log("Hoy es lunes.");
      break;
   case "Martes":
      console.log("Hoy es martes.");
      break;
   case "Miércoles":
      console.log("Hoy es miércoles.");
      break;
   default:
      console.log("Hoy no es un día de la semana.");
}

// estructura de control bucle while

let contador = 0;

while (contador < 5) {
   console.log("El contador es: " + contador);
   contador++;
}



/* Sentencia try...catch - Se utiliza para manejar excepciones en el código. */

try {
    let result = someUndefinedFunction();
    console.log(result);
 } catch (error) {
    console.log("An error occurred: " + error.message);
 }


/* --------------- EJEMPLO DE ITERADORES EN JAVASCRIPT PARA RECORRER COLECCIONES DE DATOS  -------------- */

/* 

0. Iterador For
// estructura de control bucle for

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
 }
 
 Tabla de multiplicación del 1 al 10 utilizando un bucle for anidados -  Algoritmo de alto consumo
 
 for (let i = 1; i <= 10; i++) {
    console.log("Tabla de multiplicar del " + i + ":");
 
    // Bucle for anidado para cada número de la tabla de multiplicar
    for (let j = 1; j <= 10; j++) {
       let resultado = i * j;
       console.log(i + " x " + j + " = " + resultado);
    }
 
    console.log("\n"); // Añade una línea en blanco después de cada tabla de multiplicar
 }


-------------------------------------------------------

1. for...of:

El bucle for...of permite recorrer cualquier objeto iterable, como matrices, cadenas, conjuntos, mapas, etc., obteniendo los valores en cada iteración.

const array = [1, 2, 3];
for (const value of array) {
  console.log(value); // Imprime 1, 2, 3
}

-------------------------------------------------------

2. forEach():

El método forEach() se utiliza para ejecutar una función para cada elemento en un array.

const array = [1, 2, 3];
array.forEach(value => {
  console.log(value); // Imprime 1, 2, 3
});

-------------------------------------------------------

3. map():

El método map() crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array original.

const array = [1, 2, 3];
const newArray = array.map(value => value * 2);
console.log(newArray); // Imprime [2, 4, 6]


-------------------------------------------------------

4. filter():

El método filter() crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.

const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter(value => value % 2 === 0);
console.log(filteredArray); // Imprime [2, 4]

-------------------------------------------------------

5. reduce():

El método reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Imprime 15

-------------------------------------------------------

const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Imprime 15

-------------------------------------------------------

6. entries():

El método entries() devuelve un nuevo objeto Iterador de Array que contiene pares clave/valor para cada índice en el array.

const array = ['a', 'b', 'c'];
const iterator = array.entries();
console.log(iterator.next().value); // Imprime [0, 'a']
console.log(iterator.next().value); // Imprime [1, 'b']
console.log(iterator.next().value); // Imprime [2, 'c']

----------------------------------------------------------------

7. keys():

El método keys() devuelve un nuevo objeto Iterador de Array que contiene las claves de índice de cada elemento del array.

const array = ['a', 'b', 'c'];
const iterator = array.keys();
console.log(iterator.next().value); // Imprime 0
console.log(iterator.next().value); // Imprime 1
console.log(iterator.next().value); // Imprime 2


--------------------------------------------------------------

8. values():

El método values() devuelve un nuevo objeto Iterador de Array que contiene los valores de cada elemento del array.

const array = ['a', 'b', 'c'];
const iterator = array.values();
console.log(iterator.next().value); // Imprime 'a'
console.log(iterator.next().value); // Imprime 'b'
console.log(iterator.next().value); // Imprime 'c'



Estos son algunos de los iteradores más comunes en JavaScript. Cada uno tiene su propio propósito y puede ser útil en diferentes situaciones.


*/ 



/* --------------- EJEMPLO DE FUNCIONES EN JAVASCRIPT -------------- */

// Definición de una función clásica para sumar dos números

function sumar(x, a) {
   return x + a;
}

// Uso de la función
console.log(sumar(3, 5)); // Imprime: 8

// Definición de una función de flecha para multiplicar dos números
const multiplicar = (a, b) => {
   return a * b;
};

// Uso de la función
console.log(multiplicar(4, 6)); // Imprime: 24

// Definición de una función de flecha con retorno implícito para elelet un número al cuadrado

const cuadrado = (num) => num * num;

// Uso de la función
console.log(cuadrado(3)); // Imprime: 9

/* --------------- ARREGLOS Y LISTAS -------------- */

// Creación de un arreglo de números
let numeros = [1, 2, 3, 4, 5, "hola", false];

// Creación de un arreglo de cadenas de caracteres
let frutas = ["manzana", "banana", "naranja"];

// Creación de un arreglo vacío
// aca es donde pusheabamos nuestros productos al json
let vacio = [];

// Accediendo al primer elemento del arreglo

console.log(numeros[0]); // Imprime: 1

// Accediendo al segundo elemento del arreglo de frutas
console.log(frutas[1]); // Imprime: banana

// Obtener la longitud de un arreglo:
console.log(numeros.length); // Imprime: 5

let arrayExample = ["assd", "asdas"];

console.log(arrayExample.length);

// Agregando un nuevo elemento al final del arreglo de frutas
frutas.push("uva");
console.log(frutas); // Imprime: ["manzana", "banana", "pera", "uva"]

// Eliminar el último elemento de un arreglo:

frutas.pop();
console.log(frutas); // Imprime: ["manzana", "banana", "pera"]

// Recorrer un arreglo con un bucle for:

for (let i = 0; i < frutas.length; i++) {
   console.log(frutas[i]); // esto lo hace dinamico
}

// Métodos de arreglo útiles:

// Encontrar el índice de un elemento en el arreglo
console.log(frutas.indexOf("banana")); // Imprime: 1

// Convertir un arreglo a una cadena de caracteres separados por comas

console.log(frutas.join(", ")); // Imprime: manzana, banana, pera

// Arreglo de objetos representando productos en una tienda en línea

let productos = [
   { id: 1, nombre: "Camisa", precio: 25.99, categoria: "Ropa" },
   { id: 2, nombre: "Pantalón", precio: 39.99, categoria: "Ropa" },
   { id: 3, nombre: "Zapatillas", precio: 49.99, categoria: "Calzado" },
   { id: 4, nombre: "Bolso", precio: 29.99, categoria: "Accesorios" },
];

// Función para filtrar productos por categoría

// se utiliza en el front para borrar productos en nuestro carrito

function filtrarPorCategoria(productos, categoria) {
   return productos.filter((producto) => producto.categoria === categoria);
}

// Filtrar productos de la categoría "Ropa"

let productosRopa = filtrarPorCategoria(productos, "Ropa");
console.log(productosRopa);

// Función para calcular el precio total de una compra
function calcularPrecioTotal(carrito) {
   return carrito.reduce((total, producto) => total + producto.precio, 0); // se agrega 0 , desde donde se inicia la iteracion por default
}

// Ejemplo de un carrito de compras

let carrito = [
   // id harcodeado es decir lo escribimos en el codigo no es dinamico
   { id: 1, nombre: "Camisa", precio: 25.99 },
   { id: 3, nombre: "Zapatillas", precio: 49.99 },
];

// Calcular el precio total del carrito
let precioTotal = calcularPrecioTotal(carrito);
console.log("Precio total del carrito:", precioTotal);

// Función para ordenar productos por precio de menor a mayor

function ordenarPorPrecio(productos) {
   return productos.sort((a, b) => a.precio - b.precio); // el a - b determina el menor a mayor
}

// Ordenar productos por precio
let productosOrdenados = ordenarPorPrecio(productos);
console.log(productosOrdenados);

/* ---------------  objetos en JavaScript  -------------- */

// Definición de un objeto representando un usuario

let usuario = {
   nombre: "Juan",
   edad: 30,
   correo: "juan@example.com",
};

// Acceder a la propiedad nombre
console.log(usuario.nombre); // Imprime: Juan

// Acceder a la propiedad edad
console.log(usuario.edad); // Imprime: 30

// Acceder a la propiedad correo
console.log(usuario.correo); // Imprime: juan@example.com

// Modificar la propiedad edad
usuario.edad = 35;
console.log(usuario.edad); // Imprime: 35

// Agregar una nueva propiedad al objeto
usuario.telefono = "123456789";
console.log(usuario.telefono); // Imprime: 123456789

// Eliminar la propiedad correo
delete usuario.correo;
console.log(usuario.correo); // Imprime: undefined

// Iterar sobre las propiedades del objeto usuario

// el for in es el iterador para objetos

let usuario1 = {
   nombre: "Juan",
   edad: 30,
   correo: "juan@example.com",
};

for (let propiedad in usuario1) {
   console.log(propiedad + ": " + usuario1[propiedad]);
}

// Comprobar si el objeto tiene la propiedad edad

if ("edad" in usuario) {
   console.log("El usuario tiene una edad.");
} else {
   console.log("El usuario no tiene una edad.");
}

/* ---------------  JAVASCRIPT MAS UTILIZADO EN REACT / EXPRESS / ECOMMERCE PROJECTS  -------------- */

/* Operador de propagación (Spread operator):

El operador de propagación (...) se utiliza para descomponer 

lementos de arreglos o propiedades de objetos en lugares donde se esperan cero o más argumentos o elementos.*/

//Sintaxis para arreglos:

// Es una manera de concatenar arreglos, sumas 1000000000000000 puntos

const numeros2 = [1, 2, 3];
const numeros21 = [...numeros2, 4, 5, 6];
console.log(numeros21); // Imprimirá: [1, 2, 3, 4, 5, 6]

// Operador de propagación (Spread operator):

// El operador de propagación (...) se utiliza para descomponer elementos de arreglos o propiedades de objetos en lugares donde se esperan cero o más argumentos o elementos.

// Sintaxis para arreglos:

// Spread Operator:

const numeros1 = [1, 2, 3];
const numeros22 = [...numeros1, 4, 5, 6];
console.log(numeros22); // Imprimirá: [1, 2, 3, 4, 5, 6]

// Sintaxis para objetos:

const persona = { nombre: "Juan", edad: 30 };
const personaNueva = { ...persona, telefono: "123456789" };
console.log(personaNueva); // Imprimirá: { nombre: 'Juan', edad: 30, telefono: '123456789' }

// Desestructuración de Objetos y Arrays:

// Desestructuración (Destructuring):
// La desestructuración es una forma de extraer valores de arreglos u objetos y asignarlos a letiables.

// Desestructuración de arreglos:

// filter, reduce, findIndex, slice,

const numerosa = [1, 2, 3];

// en la desestructuracion nosotros asignamos el nombre
const [pepito1, pepito2] = numerosa;

console.log(pepito1, pepito2); // Imprimirá: 1 2

// Desestructuración de Objetos

const { name, age } = persona;

// Arrow Functions:

// 4. Template Literals:

let names = "pepito";

console.log(`hola como estas ${names}`);

/* ----------------------------------------------------------------------------------------------- */

// Promesas y Async/Await: // Promesa // algo que no sabemos si se va a cumplir

// fetch funcion nativa de js para traer datos


/* fetch('https://api.example.com/data') // esta consumiendo una api desde una url
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


/* LA DIFERENIA DE HACER UN FETCH CON PROMISE O ASYNC AWAIT CAMBIA  la forma en que manejas la respuesta y trabajas con los datos, la funcionalidad subyacente del fetch no cambia  */ 


/* ---------------------- */

/* HACER UN FETCH CON ASYNC AWAIT - esto hace más legible el código asíncrono en JavaScript, especialmente cuando se trabaja con promesas.  */ 

/* 

const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}; */


/* ---------------------- */

/* HACER UN FETCH CON PROMESA */ 

/* const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch('https://api.example.com/data')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  
  // Uso de la función fetchData
  fetchData()
    .then(data => {
      console.log(data); // Mostrar los datos obtenidos
    })
    .catch(error => {
      console.error(error); // Manejar errores
    });

*/


/* ----------------------------------------------------------------------------------------------- */


//  Módulos , Importaciones y Exportaciones:

/* el tipo de exportación que elijas depende de cómo quieres estructurar y organizar tu código. Las exportaciones nombradas son útiles cuando necesitas 
exportar múltiples elementos de un módulo, mientras que las exportaciones por defecto son útiles cuando un módulo exporta una única funcionalidad principal.*/

/* ---------------------- */

// TODAS LAS MANERAS DE IMPORTAR

// const express = require('express'); ---------->  esta es la forma tradicional de importar módulos en Node.js sin el "type": "module"
// import { productRouter } from './router.js'; ---------> se importa asi cuando se exporta asi:  export {productRouter} ----> exportacion nombrada
// import productRouter  from './router.js'; ---------> se importa asi cuando se exporta asi:  export default productRouter -----> exportacion por defecto


/* ---------------------- */


// TODAS LAS MANERAS DE EXPORTAR

// exportar classic function

export function restar() {
   return null;
}

// Exportar funcion implicita

export const sumar2 = (a, b) => a + b;

// exportar arrow function

export const pepito = () => {
   return null;
};


// Exportar variable declarada

export const variableExportable = "soy una variable que se exporta"


/* ---------------------- */

