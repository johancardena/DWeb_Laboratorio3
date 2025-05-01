// Uso de la pagina web facebook
//variables como

const fecha_Nacimiento = 12/11/2000;
let usuario = "usuario123"
let password = "cont1234"
var nroAmigos = 5;
let celular ="0943235177"
let estadoCuenta = true



//CONDICIONALES
//-VALIDACION DE CONTRASEÑA
password.length >=8 ? console.log(`El usuario ${usuario} tiene la contraseña correcta `): console.log(`El usuario ${usuario} tiene la contraseña incorrecta `)

//Impresion de INFORMACION DEL USUARIO
console.log(`INFORMACION DE USUARIO \n Usuario: ${usuario} \n Contraseña: ${password}\n Amigos: ${nroAmigos}`)

//Diseño de funcion para validar estado activo del usuario
    //ES6 Funcion flecha
    const validarUsuario = (dato) =>{
        var estado
        estadoCuenta===true? estado="Activo" :estado = "Inactivo"
        return estado
    }

    console.log("El usuario "+usuario+" esta "+validarUsuario(estadoCuenta))
