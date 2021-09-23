//  Bienvenidos equipo !!

const checkCorreo = (valor) => {
    // Espresion regular para testear la condicion del parametro valor
    // Recuerden que debe retornar true or false
    const expReg =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (expReg.test(valor)) {
        return true;
    } else {
        return false;
    }
};

// Ejecutar node form.js para verificar en la consola true or false
console.log(checkCorreo('Diego@diego.com')); // Retorna True
// Esta es la manera de exportar las funciones que estemos realizando
module.exports = { checkCorreo };
