//Validar password
const checkContrasena = (valor) => {
    
    //Exprecion para verificar contraseña
    const exprecion_password = 
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8}/i;
        
    if (exprecion_password.test(valor)) {
	    return true;
    } else {
        return false;
    }
};

//Validación en true para password
console.log(checkContrasena('123456aA'));

//Exportar
module.exports = { checkContrasena };
