'use strict';

const string = new RegExp(/[A-Za-z]+/g);
const number = new RegExp(/^[0-9]$/);
const correo = new RegExp(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/);
const dni = new RegExp(/^\d{8}(?:[-\s]\d{4})?$/);

module.exports = {

    validateName: (name) => string.test(name),
    validateLegajo: (legajo) => number.test(legajo),
    validateEmail: (email) => correo.test(email),
    validateDni : (dni) => dni.test(dni)
}
