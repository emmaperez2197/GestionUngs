const string = new RegExp(/[A-Za-z]+/g);
const number = new RegExp(/^[0-9]$/)
const correo = new RegExp(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/)
module.exports = {

    validateName: (name) => string.test(name),
    validateLegajo: (legajo) => number.test(legajo),
    validateEmail: (email) => correo.test(email)
}



