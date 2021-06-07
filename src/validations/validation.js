'use strict';

// const string = new RegExp(/[A-Za-z]+/g);
// const number = new RegExp(/^[0-9]$/g);
// const correo = new RegExp(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/g);
// const dni = new RegExp(/^\d{8}(?:[-\s]\d{4})?$/g);

// module.exports = {

//     validateString: (name) => string.test(name),
//     validateNumber: (legajo) => number.test(legajo),
//     validateEmail: (email) => correo.test(email),
//     validateDni : (d) => dni.test(d),

//     validationKeys : (body, key, res, message) => {
//         if(!Object.keys(body).includes(key)) {
    
//             return res.status(400).json(`se necesitan los datos : ${message}`)
//         }
//     }
// }
