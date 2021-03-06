// Adapta la funcion getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales
// Para 2 debería devolver 2.00 €

// si la función no recibe un número debería devolver devolver 'no es un formato correcto'

let getPrecioMostrar = (precio) => {
    // Aquí tu código.  Desde aquí:
    let precioMostrado = '';
    let temp1 = '';
    let temp2 = '';
    precioMostrado = precio.toString()
    if (typeof precio === 'number' && precioMostrado.includes('.')) {
        precioMostrado = precio.toFixed(2).toString() + ' €'
    } else if (typeof precio === 'number') {
        precioMostrado = precio.toFixed(2).toString() + ' €'
    } else
        return 'no es un formato correcto';
    return precioMostrado;
    // Hasta aquí
}


let test = require('../test.js');

test(getPrecioMostrar, [''], 'no es un formato correcto');
test(getPrecioMostrar, [2], '2.00 €');
test(getPrecioMostrar, [0], '0.00 €');
test(getPrecioMostrar, [2.382], '2.38 €');
test(getPrecioMostrar, [2.389], '2.39 €');
