//  Bienvenidos equipo !!
// Objeto con las expresiones regulares
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Letras y espacios, pueden llevar acentos.
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7}$/, // 7 numeros.
};
// Funcion checkCorreo
const checkCorreo = (valor) => {
  // Espresion regular para testear la condicion del parametro valor
  // Recuerden que debe retornar true or false
  const expReg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return expReg.test(valor) ? true : false;
};
// Funcion Check Nombre
const checkNombre = function (valor) {
  const expReg = new RegExp(/^[a-zA-ZÀ-ÿ\s]{4,30}$/);

  return expReg.test(valor) ? true : false;
};
// Funcion checkApellido
const checkApellido = function (valor) {
  const expReg = new RegExp(/^[a-zA-ZÀ-ÿ\s]{4,30}$/);

  return expReg.test(valor) ? true : false;
};
// Funcion checkTelefono
const checkTelefono = function (valor) {
  if (Number.isInteger(valor)) {
    const newValor = valor.toString().split('');
    if (newValor.length === 7) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
// Funcion checkContraseña
const checkContrasena = (valor) => (expresiones.password.test(valor) ? true : false);
// Exportar modulos
module.exports = { checkCorreo, checkApellido, checkNombre, checkTelefono, checkContrasena };
