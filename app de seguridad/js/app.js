// =====================================================
// ANALIZADOR DE CONTRASEÑAS
// =====================================================

const campoPassword = document.getElementById("password"); // Obtiene el campo de contraseña

const botonAnalizar = document.getElementById("btn-analizar"); // Obtiene el botón

const resultadoPassword = document.getElementById("resultado-password"); // Obtiene el espacio del resultado


botonAnalizar.addEventListener("click", function () { // Detecta cuando hacemos clic en el botón

    const password = campoPassword.value; // Guarda la contraseña escrita

    if (password.length === 0) { // Comprueba si el campo está vacío

        resultadoPassword.textContent = "⚠️ Escribe una contraseña."; // Muestra un aviso

        return; // Detiene la función

    }


    if (password.length < 8) { // Comprueba si tiene menos de 8 caracteres

        resultadoPassword.textContent = "🔴 Contraseña débil: tiene menos de 8 caracteres."; // Muestra el resultado

    } else if (password.length < 12) { // Comprueba si tiene entre 8 y 11 caracteres

        resultadoPassword.textContent = "🟡 Contraseña aceptable: puedes hacerla más fuerte."; // Muestra el resultado

    } else { // Si tiene 12 caracteres o más

        resultadoPassword.textContent = "🟢 Contraseña fuerte."; // Muestra el resultado

    }

});

// =====================================================
// MÓDULO DE CIFRADO
// =====================================================

const botonCifrar = document.getElementById("btn-cifrar"); // Obtiene el botón Cifrar texto

const campoTexto = document.getElementById("texto-cifrado"); // Obtiene el campo donde escribimos el texto

const campoClave = document.getElementById("clave-cifrado"); // Obtiene el campo donde escribimos la clave

const resultadoCifrado = document.getElementById("resultado-cifrado"); // Obtiene el espacio donde aparecerá el resultado


botonCifrar.addEventListener("click", function () { // Detecta cuando hacemos clic en Cifrar texto

    const texto = campoTexto.value; // Guarda el texto escrito por el usuario

    const clave = campoClave.value; // Guarda la clave escrita por el usuario


    if (texto === "") { // Comprueba si el texto está vacío

        resultadoCifrado.textContent = "⚠️ Escribe un texto para cifrar."; // Muestra un aviso

        return; // Detiene la función
    }


    if (clave === "") { // Comprueba si la clave está vacía

        resultadoCifrado.textContent = "⚠️ Escribe una clave."; // Muestra un aviso

        return; // Detiene la función
    }

let textoCifrado = ""; // Crea una variable para guardar el resultado

for (let i = 0; i < texto.length; i++) { // Recorre cada carácter del texto

    const codigoTexto = texto.charCodeAt(i); // Convierte el carácter del texto en un número

    const codigoClave = clave.charCodeAt(i % clave.length); // Obtiene un número de la clave

    const nuevoCodigo = (codigoTexto + codigoClave) % 256; // Suma y mantiene el resultado entre 0 y 255

    textoCifrado += nuevoCodigo.toString(16).padStart(2, "0"); // Convierte el resultado a hexadecimal
}
resultadoCifrado.textContent = "🔐 Texto cifrado: " + textoCifrado; // Muestra el texto cifrado


});
// =====================================================
// MÓDULO DE HASH SHA-256
// =====================================================

const botonHash = document.getElementById("btn-hash"); // Busca el botón Generar SHA-256

const campoHash = document.getElementById("texto-hash"); // Busca el campo donde escribimos el texto

const resultadoHash = document.getElementById("resultado-hash"); // Busca el lugar donde mostraremos el hash


botonHash.addEventListener("click", async function () { // Detecta cuando hacemos clic en Generar SHA-256

    const texto = campoHash.value; // Guarda el texto escrito por el usuario


    if (texto === "") { // Comprueba si el campo está vacío

        resultadoHash.textContent = "⚠️ Escribe un texto para generar el hash."; // Muestra un aviso

        return; // Detiene la función

    }


    const datos = new TextEncoder().encode(texto); // Convierte el texto en datos que SHA-256 puede procesar


    const hashBuffer = await crypto.subtle.digest("SHA-256", datos); // Genera el hash SHA-256


    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convierte el resultado en una lista de números


    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join(""); // Convierte los números a hexadecimal


    resultadoHash.textContent = "🔐 SHA-256: " + hashHex; // Muestra el hash generado en pantalla

});
// =====================================================
// MÓDULO DE RED
// =====================================================

const botonRed = document.getElementById("btn-red"); // Busca el botón Comprobar conexión

const resultadoRed = document.getElementById("resultado-red"); // Busca dónde mostraremos el resultado


botonRed.addEventListener("click", function () { // Detecta cuando hacemos clic en el botón

    resultadoRed.textContent = "🔄 Comprobando conexión..."; // Muestra que la prueba está iniciando

    
    if (navigator.onLine) { // Comprueba si el navegador tiene conexión a Internet

        resultadoRed.textContent = "🟢 Conexión disponible."; // Muestra que hay conexión

    } else { // Si no existe conexión

        resultadoRed.textContent = "🔴 No hay conexión a Internet."; // Muestra que no hay conexión

    }

});
// ==========================================
// MÓDULO DE EVALUACIÓN
// ==========================================

// ==========================================
// EVALUACIÓN DE SEGURIDAD
// ==========================================

const botonOpcion1 = document.getElementById("btn-opcion1");
const botonOpcion2 = document.getElementById("btn-opcion2");
const resultadoEvaluacion = document.getElementById("resultado-evaluacion");

let preguntaActual = 0;
let puntuacion = 0;

const preguntas = [
    {
        pregunta: "🔐 ¿Qué principio busca evitar que personas no autorizadas accedan a la información?",
        opcion1: "🔐 Confidencialidad",
        opcion2: "🌐 Disponibilidad",
        correcta: 1
    },
    {
        pregunta: "🔑 ¿Cuál ayuda a proteger una cuenta?",
        opcion1: "🔑 Una contraseña segura",
        opcion2: "📢 Compartir la contraseña",
        correcta: 1
    },
    {
        pregunta: "🛡️ ¿Qué proceso verifica quién es el usuario?",
        opcion1: "🛡️ Autenticación",
        opcion2: "📁 Autorización",
        correcta: 1
    },
    {
        pregunta: "🎣 ¿Qué es una característica del phishing?",
        opcion1: "🎣 Un mensaje falso para engañar al usuario",
        opcion2: "💾 Una copia de seguridad",
        correcta: 1
    },
    {
        pregunta: "🌐 ¿Qué ayuda a proteger una red?",
        opcion1: "🔥 Un firewall",
        opcion2: "📢 Compartir las contraseñas",
        correcta: 1
    },
    {
        pregunta: "🔒 ¿Para qué sirve la criptografía?",
        opcion1: "🔒 Proteger información mediante técnicas de cifrado",
        opcion2: "🗑️ Eliminar todos los archivos",
        correcta: 1
    },
    {
        pregunta: "🦠 ¿Qué es un malware?",
        opcion1: "🦠 Software diseñado para causar daño o realizar acciones no deseadas",
        opcion2: "🛡️ Un programa para proteger una cuenta",
        correcta: 1
    }
];

// Creamos el botón Siguiente
const botonSiguiente = document.createElement("button");
botonSiguiente.textContent = "➡️ Siguiente pregunta";
botonSiguiente.style.display = "none";
resultadoEvaluacion.after(botonSiguiente);

// Mostramos la pregunta actual
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    const textoPregunta = resultadoEvaluacion.parentElement.querySelector("p:nth-of-type(2)");

    if (textoPregunta) {
        textoPregunta.textContent = pregunta.pregunta;
    }

    botonOpcion1.textContent = pregunta.opcion1;
    botonOpcion2.textContent = pregunta.opcion2;

    resultadoEvaluacion.textContent = "";

    botonOpcion1.style.display = "inline-block";
    botonOpcion2.style.display = "inline-block";

    botonSiguiente.style.display = "none";
}

// Comprobar respuesta
function comprobarRespuesta(opcionSeleccionada) {
    const pregunta = preguntas[preguntaActual];

    if (opcionSeleccionada === pregunta.correcta) {
        puntuacion++;
        resultadoEvaluacion.textContent = "✅ ¡Correcto!";
    } else {
        resultadoEvaluacion.textContent = "❌ Incorrecto.";
    }

    botonOpcion1.style.display = "none";
    botonOpcion2.style.display = "none";
    botonSiguiente.style.display = "inline-block";
}

// Botón opción 1
botonOpcion1.addEventListener("click", function () {
    comprobarRespuesta(1);
});

// Botón opción 2
botonOpcion2.addEventListener("click", function () {
    comprobarRespuesta(2);
});

// Siguiente pregunta
botonSiguiente.addEventListener("click", function () {

    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {

        resultadoEvaluacion.textContent =
            "🏆 Evaluación terminada. Obtuviste " +
            puntuacion +
            " de " +
            preguntas.length +
            " puntos.";

        botonSiguiente.style.display = "none";
    }
});

// Iniciar evaluación
mostrarPregunta();
// ============================================
// ANALIZADOR DE PHISHING
// ============================================

const campoPhishing = document.getElementById("texto-phishing");
const botonPhishing = document.getElementById("btn-phishing");
const resultadoPhishing = document.getElementById("resultado-phishing");

botonPhishing.addEventListener("click", function () {

    const url = campoPhishing.value.trim();

    if (url === "") {
        resultadoPhishing.textContent = "⚠️ Escribe una URL para analizar.";
        return;
    }

    // Señales básicas de una URL sospechosa
    const señales = [];

    if (!url.startsWith("https://")) {
        señales.push("No utiliza HTTPS");
    }

    if (url.includes("@")) {
        señales.push("Contiene el símbolo @");
    }

    if (url.includes("login-") || url.includes("verificar") || url.includes("seguro")) {
        señales.push("Contiene palabras que pueden utilizarse para engañar");
    }

    if (url.includes("example.com")) {
        señales.push("Es una dirección de prueba");
    }

    // Mostrar resultado
    if (señales.length > 0) {

        resultadoPhishing.textContent =
            "⚠️ URL sospechosa. Señales detectadas: " +
            señales.join(", ") + ".";

    } else {

        resultadoPhishing.textContent =
            "✅ No se detectaron señales sospechosas básicas en esta URL.";
    }
});
// ==========================================
// PANEL AVANZADO DE SEGURIDAD
// ==========================================

const botonEvaluarSeguridad =
    document.getElementById("btn-evaluar-seguridad");

const resultadoSeguridad =
    document.getElementById("resultado-seguridad");


botonEvaluarSeguridad.addEventListener("click", function () {

    let puntos = 0;
    const total = 9;


    // MFA
    if (document.getElementById("seguridad-mfa").value === "1") {
        puntos++;
    }


    // CONTROL DE ACCESO
    if (document.getElementById("seguridad-acceso").value === "1") {
        puntos++;
    }


    // COPIAS DE SEGURIDAD
    if (document.getElementById("seguridad-backup").value === "1") {
        puntos++;
    }


    // ACTUALIZACIONES
    if (document.getElementById("seguridad-actualizaciones").value === "1") {
        puntos++;
    }


    // FIREWALL
    if (document.getElementById("seguridad-firewall").value === "1") {
        puntos++;
    }


    // WI-FI
    if (document.getElementById("seguridad-wifi").value === "1") {
        puntos++;
    }


    // CIFRADO
    if (document.getElementById("seguridad-cifrado").value === "1") {
        puntos++;
    }


    // TIEMPO DE SESIÓN
    if (document.getElementById("seguridad-sesion").value === "1") {
        puntos++;
    }


    // REGISTRO DE EVENTOS
    const registroLogs = document.getElementById("seguridad-logs");

if (registroLogs && registroLogs.value === "1") {
    puntos++;
}


    // CALCULAR PORCENTAJE
    const porcentaje =
        Math.round((puntos / total) * 100);


    // MOSTRAR RESULTADO
    if (porcentaje >= 75) {

        resultadoSeguridad.innerHTML =
            "🟢 <strong>NIVEL DE SEGURIDAD ALTO</strong><br>" +
            "Puntuación: " + puntos + " de " + total +
            " (" + porcentaje + "%)<br><br>" +
            "Los controles evaluados presentan un buen nivel de protección.";

    }

    else if (porcentaje >= 50) {

        resultadoSeguridad.innerHTML =
            "🟡 <strong>NIVEL DE SEGURIDAD MEDIO</strong><br>" +
            "Puntuación: " + puntos + " de " + total +
            " (" + porcentaje + "%)<br><br>" +
            "Existen controles activos, pero algunos parámetros necesitan atención.";

    }

    else {

        resultadoSeguridad.innerHTML =
            "🔴 <strong>NIVEL DE SEGURIDAD BAJO</strong><br>" +
            "Puntuación: " + puntos + " de " + total +
            " (" + porcentaje + "%)<br><br>" +
            "Se recomienda fortalecer los controles de seguridad.";

    }

});

// ============================================================
// ALGORITMOS ADICIONALES DE CRIPTOGRAFÍA
// ============================================================

const extraAlgoritmo = document.getElementById("extra-crypto-algoritmo");
const extraTexto = document.getElementById("extra-crypto-texto");
const extraClave = document.getElementById("extra-crypto-clave");
const extraResultado = document.getElementById("extra-crypto-resultado");
const extraExplicacion = document.getElementById("extra-crypto-explicacion");

const btnExtraCifrar = document.getElementById("btn-extra-cifrar");
const btnExtraDescifrar = document.getElementById("btn-extra-descifrar");
const btnExtraLimpiar = document.getElementById("btn-extra-limpiar");


// ------------------------------------------------------------
// FUNCIÓN: CIFRADO CÉSAR
// ------------------------------------------------------------

function cifradoCesar(texto, desplazamiento) {

    desplazamiento = Number(desplazamiento) || 0;

    return texto.split("").map(caracter => {

        const codigo = caracter.charCodeAt(0);

        // Mayúsculas
        if (codigo >= 65 && codigo <= 90) {
            return String.fromCharCode(
                ((codigo - 65 + desplazamiento) % 26 + 26) % 26 + 65
            );
        }

        // Minúsculas
        if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(
                ((codigo - 97 + desplazamiento) % 26 + 26) % 26 + 97
            );
        }

        return caracter;

    }).join("");
}


// ------------------------------------------------------------
// FUNCIÓN: ATBASH
// ------------------------------------------------------------

function cifradoAtbash(texto) {

    return texto.split("").map(caracter => {

        const codigo = caracter.charCodeAt(0);

        if (codigo >= 65 && codigo <= 90) {
            return String.fromCharCode(90 - (codigo - 65));
        }

        if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(122 - (codigo - 97));
        }

        return caracter;

    }).join("");
}


// ------------------------------------------------------------
// FUNCIÓN: VIGENÈRE
// ------------------------------------------------------------

function cifradoVigenere(texto, clave, descifrar = false) {

    if (!clave) {
        return texto;
    }

    clave = clave.toUpperCase().replace(/[^A-Z]/g, "");

    if (!clave) {
        return texto;
    }

    let resultado = "";
    let indiceClave = 0;

    for (let i = 0; i < texto.length; i++) {

        const caracter = texto[i];

        if (/[A-Za-z]/.test(caracter)) {

            const base = caracter === caracter.toUpperCase()
                ? 65
                : 97;

            let desplazamiento =
                clave.charCodeAt(indiceClave % clave.length) - 65;

            if (descifrar) {
                desplazamiento = -desplazamiento;
            }

            resultado += String.fromCharCode(
                ((caracter.charCodeAt(0) - base + desplazamiento + 26) % 26) + base
            );

            indiceClave++;

        } else {

            resultado += caracter;
        }
    }

    return resultado;
}


// ------------------------------------------------------------
// FUNCIÓN: XOR
// ------------------------------------------------------------

function cifradoXOR(texto, clave) {

    if (!clave) {
        return texto;
    }

    let resultado = "";

    for (let i = 0; i < texto.length; i++) {

        const codigo =
            texto.charCodeAt(i) ^
            clave.charCodeAt(i % clave.length);

        resultado += String.fromCharCode(codigo);
    }

    return resultado;
}


// ------------------------------------------------------------
// FUNCIÓN: BASE64
// ------------------------------------------------------------

function codificarBase64(texto) {

    try {

        return btoa(
            unescape(
                encodeURIComponent(texto)
            )
        );

    } catch (error) {

        return "Error al convertir a Base64.";
    }
}


function decodificarBase64(texto) {

    try {

        return decodeURIComponent(
            escape(
                atob(texto)
            )
        );

    } catch (error) {

        return "Error: el texto no es un Base64 válido.";
    }
}


// ------------------------------------------------------------
// FUNCIÓN: SHA-256
// ------------------------------------------------------------

async function generarSHA256(texto) {

    const datos = new TextEncoder().encode(texto);

    const hash = await crypto.subtle.digest(
        "SHA-256",
        datos
    );

    const bytes = new Uint8Array(hash);

    return Array.from(bytes)
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}


// ------------------------------------------------------------
// FUNCIÓN: AES-GCM
// ------------------------------------------------------------

async function cifrarAES(texto, claveTexto) {

    const encoder = new TextEncoder();

    const claveBytes = await crypto.subtle.digest(
        "SHA-256",
        encoder.encode(claveTexto)
    );

    const clave = await crypto.subtle.importKey(
        "raw",
        claveBytes,
        {
            name: "AES-GCM"
        },
        false,
        [
            "encrypt",
            "decrypt"
        ]
    );

    const iv = crypto.getRandomValues(
        new Uint8Array(12)
    );

    const datos = encoder.encode(texto);

    const cifrado = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        clave,
        datos
    );

    const resultado = new Uint8Array(
        iv.length + cifrado.byteLength
    );

    resultado.set(iv, 0);
    resultado.set(
        new Uint8Array(cifrado),
        iv.length
    );

    return btoa(
        String.fromCharCode(...resultado)
    );
}


async function descifrarAES(textoCifrado, claveTexto) {

    try {

        const datos = Uint8Array.from(
            atob(textoCifrado),
            caracter => caracter.charCodeAt(0)
        );

        const iv = datos.slice(0, 12);

        const cifrado = datos.slice(12);

        const encoder = new TextEncoder();

        const claveBytes = await crypto.subtle.digest(
            "SHA-256",
            encoder.encode(claveTexto)
        );

        const clave = await crypto.subtle.importKey(
            "raw",
            claveBytes,
            {
                name: "AES-GCM"
            },
            false,
            [
                "encrypt",
                "decrypt"
            ]
        );

        const descifrado = await crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: iv
            },
            clave,
            cifrado
        );

        return new TextDecoder().decode(descifrado);

    } catch (error) {

        return "❌ No se pudo descifrar. Verifica la clave y el texto.";
    }
}


// ============================================================
// BOTÓN CIFRAR / PROCESAR
// ============================================================

if (btnExtraCifrar) {

    btnExtraCifrar.addEventListener("click", async function () {

        const algoritmo = extraAlgoritmo.value;
        const texto = extraTexto.value;
        const clave = extraClave.value;

        if (!texto) {

            extraResultado.value =
                "⚠️ Escribe primero el texto que deseas procesar.";

            return;
        }


        // CÉSAR
        if (algoritmo === "cesar") {

            if (!clave) {

                extraResultado.value =
                    "⚠️ Para César debes introducir un número como clave.";

                return;
            }

            extraResultado.value =
                cifradoCesar(texto, clave);

            extraExplicacion.innerHTML =
                "<strong>🔐 Cifrado César</strong><br>" +
                "Desplaza cada letra del texto una cantidad determinada " +
                "de posiciones dentro del alfabeto.";

        }


        // ATBASH
        else if (algoritmo === "atbash") {

            extraResultado.value =
                cifradoAtbash(texto);

            extraExplicacion.innerHTML =
                "<strong>🔄 Atbash</strong><br>" +
                "Sustituye cada letra por su posición inversa " +
                "en el alfabeto.";

        }


        // VIGENÈRE
        else if (algoritmo === "vigenere") {

            if (!clave) {

                extraResultado.value =
                    "⚠️ Introduce una palabra como clave.";

                return;
            }

            extraResultado.value =
                cifradoVigenere(texto, clave, false);

            extraExplicacion.innerHTML =
                "<strong>🔑 Vigenère</strong><br>" +
                "Utiliza una palabra clave para aplicar diferentes " +
                "desplazamientos a las letras.";

        }


        // XOR
        else if (algoritmo === "xor") {

            if (!clave) {

                extraResultado.value =
                    "⚠️ Introduce una clave.";

                return;
            }

            extraResultado.value =
                btoa(cifradoXOR(texto, clave));

            extraExplicacion.innerHTML =
                "<strong>⚡ XOR</strong><br>" +
                "Combina los datos con una clave mediante la operación " +
                "lógica XOR.";

        }


        // BASE64
        else if (algoritmo === "base64") {

            extraResultado.value =
                codificarBase64(texto);

            extraExplicacion.innerHTML =
                "<strong>🧩 Base64</strong><br>" +
                "Codifica los datos en una representación de texto " +
                "compatible con diferentes sistemas.";

        }


        // AES
        else if (algoritmo === "aes") {

            if (!clave) {

                extraResultado.value =
                    "⚠️ Introduce una clave para AES.";

                return;
            }

            extraResultado.value =
                await cifrarAES(texto, clave);

            extraExplicacion.innerHTML =
                "<strong>🔐 AES-GCM</strong><br>" +
                "Algoritmo de cifrado simétrico moderno. " +
                "Utiliza la misma clave para cifrar y descifrar.";

        }


        // SHA-256
        else if (algoritmo === "sha256") {

            extraResultado.value =
                await generarSHA256(texto);

            extraExplicacion.innerHTML =
                "<strong>🔒 SHA-256</strong><br>" +
                "Función hash criptográfica de 256 bits. " +
                "Es unidireccional, por lo que no se puede descifrar.";

        }

    });

}



 