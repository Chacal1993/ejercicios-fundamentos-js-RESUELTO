// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
// y muéstralo por consola.

let gentes = [{
    nombre: 'Jamiro',
    edad: 45
},
{
    nombre: 'Juan',
    edad: 35
},
{
    nombre: 'Paco',
    edad: 34
},
{
    nombre: 'Pepe',
    edad: 14
},
{
    nombre: 'Pilar',
    edad: 24
},
{
    nombre: 'Laura',
    edad: 24
},
{
    nombre: 'Jenny',
    edad: 10
},
]

for (let gente of gentes) {
    if (gente.nombre.startsWith("J"))
        console.log(gente.nombre + " su nombre empieza con la letra J")

}