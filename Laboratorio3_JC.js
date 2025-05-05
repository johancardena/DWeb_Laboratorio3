// Simulación de datos  en www.facebook.com

// contiene toda la información del usuario
const usuario = {
    nombre: "usuario123",
    password: "cont1234",
    fechaNacimiento: new Date('2000-11-12'), // Objeto para manejar fechas
    celular: "0943235177",
    estadoCuenta: true,

    // ARRAY de OBJETOS: lista de amigos con nombre y cumpleaños
    amigos: [
        { nombre: "Ana", cumpleaños: "2001-05-01" },
        { nombre: "Carlos", cumpleaños: "1999-08-14" },
        { nombre: "Marta", cumpleaños: "2002-03-10" }
    ],

    // ARRAY de OBJETOS: publicaciones realizadas por el usuario
    publicaciones: [
        { fecha: "2024-12-01", contenido: "Hola, mundo!" },
        { fecha: "2025-01-20", contenido: "Probando mi nueva cuenta" }
    ],

    // ARRAY de OBJETOS: mensajes enviados a otros usuarios
    mensajes: [
        { para: "Ana", mensaje: "¡Hola Ana! ¿Cómo estás?" },
        { para: "Carlos", mensaje: "¿Vamos al cine el viernes?" }
    ]
};

// Validación de contraseña usando operador ternario
usuario.password.length >= 8 
  ? console.log(`El usuario ${usuario.nombre} tiene la contraseña correcta`)
  : console.log(`El usuario ${usuario.nombre} tiene la contraseña incorrecta`);

// Impresión de la información básica del usuario
console.log(`INFORMACION DE USUARIO
Nombre: ${usuario.nombre}
Contraseña: ${usuario.password}
Fecha de nacimiento: ${usuario.fechaNacimiento.toLocaleDateString()}  // Formato de fecha
Celular: ${usuario.celular}
Número de amigos: ${usuario.amigos.length}  // Contar elementos del array
Amigos: ${usuario.amigos.map(a => a.nombre).join(", ")}`);  // .map() para mostrar solo los nombres

// Función flecha para validar si el usuario está activo o no
const validarUsuario = (estado) => estado ? "Activo" : "Inactivo";
console.log(`El usuario ${usuario.nombre} está ${validarUsuario(usuario.estadoCuenta)}`);

// Mostrar publicaciones usando forEach
console.log("\n Publicaciones recientes:");
usuario.publicaciones.forEach((post, index) => {
    console.log(`${index + 1}. ${post.fecha} - ${post.contenido}`);
});

//  Mostrar mensajes enviados
console.log("\n Mensajes enviados:");
usuario.mensajes.forEach(msg => {
    console.log(`Para ${msg.para}: "${msg.mensaje}"`);
});

// Mostrar cumpleaños de los amigos
console.log("\nCumpleaños de amigos:");
usuario.amigos.forEach(a => {
    console.log(`${a.nombre}: ${new Date(a.cumpleaños).toLocaleDateString()}`);
});

// Función flecha para agregar un nuevo amigo al array
const agregarAmigo = (nuevoNombre, cumple) => {
    usuario.amigos.push({ nombre: nuevoNombre, cumpleaños: cumple });  // push para agregar al array
    console.log(`Se agregó a ${nuevoNombre} como nuevo amigo.`);
};

// Llamada a la función para agregar un amigo de prueba
agregarAmigo("Luis", "2000-09-30");
