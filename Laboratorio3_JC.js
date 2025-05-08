// Simulación de datos
const usuario = {
    nombre: "usuario123",
    password: "cont1234",
    fechaNacimiento: new Date('2000-11-12'),
    celular: "0943235177",
    estadoCuenta: true,
    amigos: [
        { nombre: "Ana", cumpleaños: "2001-05-01" },
        { nombre: "Carlos", cumpleaños: "1999-08-14" },
        { nombre: "Marta", cumpleaños: "2002-03-10" }
    ],
    publicaciones: [
        { fecha: "2024-12-01", contenido: "Hola, mundo!" },
        { fecha: "2025-01-20", contenido: "Probando mi nueva cuenta" }
    ],
    mensajes: [
        { para: "Ana", mensaje: "¡Hola Ana! ¿Cómo estás?" },
        { para: "Carlos", mensaje: "¿Vamos al cine el viernes?" }
    ]
};

// Validación de contraseña usando operador ternario
usuario.password.length >= 8 
  ? console.log(`El usuario ${usuario.nombre} tiene la contraseña correcta`)
  : console.log(`El usuario ${usuario.nombre} tiene la contraseña incorrecta`);

// Manipulación del DOM
document.body.innerHTML += `<h2>Información de Usuario</h2>`;
document.body.innerHTML += `
    <p>Nombre: ${usuario.nombre}</p>
    <p>Fecha de nacimiento: ${usuario.fechaNacimiento.toLocaleDateString()}</p>
    <p>Celular: ${usuario.celular}</p>
    <p>Estado: ${usuario.estadoCuenta ? "Activo" : "Inactivo"}</p>
    <p>Amigos: ${usuario.amigos.map(a => a.nombre).join(", ")}</p>
`;

// Asincronismo: simulación de carga de publicaciones
function cargarPublicaciones() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usuario.publicaciones);
        }, 1500); // 1.5 segundos de espera simulada
    });
}

async function mostrarPublicacionesEnDOM() {
    const publicacionesTitulo = document.createElement("h2");
    publicacionesTitulo.textContent = "Publicaciones";
    document.body.appendChild(publicacionesTitulo);

    const contenedor = document.createElement("div");
    contenedor.innerHTML = "<p>Cargando publicaciones...</p>";
    document.body.appendChild(contenedor);

    const publicaciones = await cargarPublicaciones();
    contenedor.innerHTML = ""; // Limpiar después de la espera

    publicaciones.forEach((post, index) => {
        const p = document.createElement("p");
        p.textContent = `${index + 1}. ${post.fecha} - ${post.contenido}`;
        contenedor.appendChild(p);
    });
}

mostrarPublicacionesEnDOM();

// Mostrar mensajes enviados
console.log("\nMensajes enviados:");
usuario.mensajes.forEach(msg => {
    console.log(`Para ${msg.para}: "${msg.mensaje}"`);
});

// Mostrar cumpleaños
console.log("\nCumpleaños de amigos:");
usuario.amigos.forEach(a => {
    console.log(`${a.nombre}: ${new Date(a.cumpleaños).toLocaleDateString()}`);
});

// Función flecha para agregar un nuevo amigo al array
const agregarAmigo = (nuevoNombre, cumple) => {
    usuario.amigos.push({ nombre: nuevoNombre, cumpleaños: cumple });
    console.log(`Se agregó a ${nuevoNombre} como nuevo amigo.`);
};

// Llamada de prueba
agregarAmigo("Luis", "2000-09-30");