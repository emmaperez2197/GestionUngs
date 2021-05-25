
const string = new RegExp(/[A-Za-z]+/g);
const number = new RegExp(/^\d{8}(?:[-\s]\d{4})?$/);


module.exports = {
    validateNombre : (nombre) => string.test(nombre),
    validateDni : (dni) => number.test(dni)
}