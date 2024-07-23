
///                                 CLASE 1                                                ///


// API da una serie de reglas para la comunicacion del back y el front. el api es independiente

// FRONTEND

// BACKEND

/// HTTP es totalmente independiente. "cliente no es ´FRONTEND´ y servidor no es ´BACKEND´".
// es un protocolo http. siempre peticion y respuesta.
//  Se basa en peticiones, peticion(request) y response(respuesta). Siempre va a haber una respuesta!.
// Metodos HTTP. indican que le esta pidiendo el cliente al servidor, que tarea.
// GET : obtener informacion, para dsp devolverle,responderle, informacion
// POST : le damos informacion para que la almacene y la guarde, respondemos que se guardo o no se guardo 
// PUT: actualizar informacion que ya estaba guardada(ej:modificar algo de un usuario ya creado),response se guardo o no
// DELETE : una solicitud para eliminar una informacion. La respuesta es que se pudo eliminar o no.

///                                 CLASE 2                                              ///   

// SINCRONISMO: Javascript es sincronico por naturaleza. Son las tareas que lleva un dispositivo a la hora de
// ejecutar un programa se procesas de forma secuencial.

// ASINCRONISMO: es la capacidad que tiene un lenguaje de realizar otras operaciones mientras
// una operacion se ejecuta en segundo plano;
// INICIO DE LA TAREA: cuando se inicia una tarea asincronica, el programa no espera su finalizacion
// CONTINUACION INMEDIATA: el programa sigue ejecutando otras tareas  sin esperar que la "asincronica" se complete
// MANEJO DEL RESULTADO: cuando la tarea "asincronica" se completa, se maneja o el result o se ejecuta
// una funcion de retorno (CALLBACK) para procesar el resultado;



//Javascript es sincronico y single threaded,si no termina una tarea, no hace otra.
//ASINCRONISMO en js

// console.log("tarea 1");
// console.log("tarea 2");

// setTimeout(() =>{
//     console.log("tarea 3");
// },2000)
// console.log("tarea 4");
// console.log("tarea 5");

// AJAX (Asynchronous JavaScript and XML).
// XML(Extensible Markup Language) es un lenguaje de marcado para almacenar e intercambiar informacion como html

// AJAX se utiliza para darle funcionalidades y permitir interacción en una página web. 
// Permite realizar procesos asincrónicos. Es para informacion puntual de una página.

//  {
//     "Persona" : {
//         "Nombre": "Juan",
//         "Edad" : 30,
//     }
// }
// console.log(persona);





// const addUserButton = document.getElementById("addUserButton")

// let i = 1;

// class User{
//     constructor(id,name,username,email){
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//     }
// }

// class Repository{
//     constructor(){
//         this.users = [];
//     }

//     getUser(){
//         return this.users
//     }

//     createUser({id,name,username,email}){
//         const newUser = new User(id,name,username,email);
//         this.users.push(newUser)
//     }
// }

// const refresh = () =>{
//     const userContainer = document.getElementById("usersContainer")
//     userContainer.innerHTML = "";
//     const users = repository.getUser();

//     const htmlUsers = users.map((user) =>{
//         const name = document.createElement("h3");
//         const email = document.createElement("p");

//         name.innerHTML = user.name;
//         email.innerHTML = user.email;

//         const card = document.createElement("div");
//         card.appendChild(name);
//         card.appendChild(email);

//         return card;
//     });

//     htmlUsers.forEach((card) =>{
//         userContainer.appendChild(card);
//     });
// };

// const repository = new Repository()
// const addUser = () =>{
//     if( i > 10) return alert("No hay mas users")
//     $.get(`https://jsonplaceholder.typicode.com/users/${i}`,(data,status)=>{
//         i++;
//     repository.createUser(data);
//     refresh()
// });
// }

// addUserButton.addEventListener("click",addUser)




///                                 CLASE 4  NODE JS                   ///

// node es un entorno de ejecuccion de javascript, RUNTIME
//los archivos javascript es mejor llamarlos como MODULOS

// en "scripts" definimos comandos
//npm init (crea el package.json)
//npm init -y (crea la config por default sin que nos pregunte)


//los modulos sirven para repartir RESPONSABILIDADES

// const num1 = 5;
// const num2 = 10;

// console.log(num1 + num2);
// console.log("la suma fue un exito");

// let index = 0

// while(index < 3){
//     console.log(index);
//     index++
// }



// const Repository = require("./models/repository")


// const repository = new Repository()
// repository.createActivity("amo mundo","es lindo amar")
// repository.createActivity("amasdasdasd","aguante mesii")
// // repository.createActivity("basdamasdasdasd"," mesii2")

// console.log(repository.getAllActivities());

//nodemon



//                                 CLASE 5                                  //
 // TEST Jest
// TDD Test Driven Development, evalua el comportamiento de un codigo.

//Jest es un ramework de testing,tiene las funciones "mocks"
//Configuracion (simple y facil de usar)
// Rapidez(Veloz y asincronico(ejecuta pruebas de forma paralela))
//Mocks(permite simular comportamientos especificos durante las pruebas)
//Spanshots(Almacena las pruebas y verifica con futuros para detectar tests cambios inesperados)

//Mochs means "Imitacion"
// Los mocks son útiles cuando estamos probando código y queremos asegurarnos de que ciertas partes funcionen correctamente sin ejecutar todo código completo.



// kebab-case
//PascalCase
// snake-case
//camelCase


//                      CLASE 6        asincronismo             //

// HTTP es un protocolo de comunicación cliente / servidor.
//El cliente es quien solicita un recurso o una acción al servidor.
// El servidor es quien recibe dicha solicitud y actúa en consecuencia,
//  siempre enviando una respuesta al cliente.
//HTTP no esta sujeto a ningun lenguage o libreria en especifico


// Operaciones asicronas en JS son las que el script no espera que una tarea se complete para hacer otra,sino
// que continua ejecutando las demas

//PROMESAS nos permiten encadenar operaciones asincronas y manejar errores de forma mas estructurada
// una promesa va a reservar un lugar en mi código para una acción o 
//respuesta que aún no ocurre o de la cual aún no recibimos un resultado ,
//  pero que una vez ocurra, mi código sabrá que hacer con esa “respuesta”.

// Para generar promesas contamos con una estructura nativa llamada Promise
//  de la cual podemos instanciar promesas utilizando la palabra clave new.
//  Esta promesa recibe como argumento una función la cual a su vez toma dos funciones como parámetros...

//PENDING = estado inicial de la promesa. Se activa cuando se ejecuta una operacion asicrona
// FULFILLED = cuando se completa la operacion y se valua de forma exitosa, la promesa se resuelve a un valor y su estado cambia
// a fulfilled
// REJECTED : si falla la operacion pasa a "rejected"

// const promesaResuelta = new Promise((resolve, reject) => {
//  // ...
//     resolve("valor de resolucion")

//     then
// })
// const promesaRechazada = new Promise((resolve, reject) => {
//  // ...
//     reject("Razon del error")
// })
// console.log("hola");
// console.log(promesaResuelta);
// console.log(promesaRechazada);


// Para poder manejar el valor al que se resuelve o se rechaza una promesa, hacemos uso de dos métodos: THEN y CATCH.

//THEN : maneja logica en caso de la promesa resuelta. Se le da una funcion con un "valor" de la resolucion como argumento
// y se ejecuta cuando la promise se complete succesfuly


//CATCH: Maneja logica en caso de promesa rechazada. Se le da una funcion que recibe "razón" del rechazo como argumento
// y se ejecuta cuando la promesa se rechace,permitiendo manejar el rechazo o el error

//success handler
// promise.then((res) => {   // no espera a que se haga una funcion hasta seguir con otra
//  console.log(res.data);
// })
// .catch((err) =>{
//     console.log(err);
// })
// error handler

//   Asyncs/Await  (es una function asíncrona) ()
//Viene a "reemplazar" las promesas de y proporciona una forma resumida de procesar su resolución,
// evitando la encadenación de métodos como then() y catch().

//para hacer funcionar la funcion hay que anteponer "async" al declarar la funcion

// async function miFuncionAsync(){}
//Esto le indicará a JavaScript que la función va a trabajar con código asincrónico
// para evitar que la lectura del resto del código se detenga.

//"await" le indicara al interprete que debe esperar a que se resuelva la promesa antes de seguir

//Dentro de las funciones async, utilizamos un bloque llamado try/catch para el manejo de errores.
// Este bloque se utiliza para capturar y gestionar errores que podrían ocurrir.
//El bloque try contendrá el código que queremos ejecutar.
//Si hay un error, se ejecuta el bloque catch para manejar el error.

//await solo tiene sentido en una funcion async
// const fetchMovies = async() =>{  //espera a que se haga una funcion hasta seguir con otra
//     try {   //try, intenta que se haga la funcion exitosamente, sino pasa a catch
//         const data = {
//             datas :"Me encontraron"
//         }
//         const movies = await data.data;
//         console.log(movies);
//     } catch (err) {
//         console.log(err.message); //el metodo .message nos da el error "404 not found"
//         console.log("salio mal");
//     }   
// }
// fetchMovies()
/// el fetch hace una peticion HTTP y la respuesta la trae en formato HTTP que luego se transforma a JSON



// const { log } = require("console");
///           AXIOS    ///
//es utilizada para realizar solicitudes HTTP en JavaScript. Pero a diferencia de ésta, es más simple.
//automatiza la conversión de datos JSON a objetos de JavaScript.
// AXIOS nos permite trabajar con promesas, en cambio con Jquery era con callbacks
//es mas facil usarla con async/await y manejo de errores

// axios.get(url) o axios(url)
// Realiza una solicitud de tipo GET que permite obtener los datos de una API.
// axios.post(url)
// Ejecuta una solicitud de tipo POST permitiendo enviar datos en el cuerpo de la
// solicitud (por ejemplo, al enviar un formulario).


// axios.put(url)
// Efectúa una solicitud de tipo PUT para enviar datos al servidor y actualizar
// un recurso existente.


// axios.delete(url)

// Hace una solicitud de tipo DELETE la cual se utiliza
// para eliminar un recurso existente


//Operaciones asincronas:lectura,escritura,creacion de archivos,conexion a servicios y base de datos,
//crear directorios,etc.

//FILE SYSTEM
//El módulo “fs” es nativo de Node

// const fs = require("fs");
// fs.readFile("./hola.txt","utf-8",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data)
// });

// DEBUGGING
// tres tipos de erroress
// EXPLICITO, lo vemos reflejado en terminal

//Resultado inesperado,El intérprete no detecta errores, ya que el error en realidad está en la lógica.

//Sin resultados,Puede ocurrir que nos encontremos en una situación en la que no tengamos un error explícito,
// y tampoco tengamos un resultado inesperado.



//                  CLASE 7 EXPRESSSS        ///
//HTTP es el lenguaje que permite a los navegadores y servidores compartir información a través de internet
//  el “localhost” es un identificador de ubicación de un recurso en la red.
//  Puede ser una dirección IP numérica o un nombre de dominio, como "www.ejemplo.com".

//  El puerto es como una puerta específica en el servidor. 
//Se utiliza para distinguir diferentes servicios o aplicaciones que se ejecutan en el mismo host.
//Mientras que el host te dice dónde encontrar el servidor, el puerto te dice a qué "puerta" debes llamar para acceder a un servicio específico en ese servidor.

//  Los controladores se encargan de recibir una peticion o un pedido y devolver una respuesta.
//Por ejemplo, enviar información, eliminar un dato, o crear un nuevo registro.

//  Servicios
//cada servicio tiene su propia responsabilidad y se organiza para manejar un aspecto particular de la aplicación
//(solicitudes de usuario, autenticación, interacción con base de datos).
// Los servicios se utilizan para descomponer la lógica de la aplicación en partes más pequeñas y manejables, 
// lo que facilita la escalabilidad, el mantenimiento y la colaboración entre equipos de desarrollo.

//Middlewares : tienen la capacidad de mejorar o darle un toque a la respuesta que se le va a dar al cliente

//Scaffolding
//  Una de las características de express es su flexibilidad;

//En la carpeta rutas,van a estar los modulos que indican los endpoints que tiene
//Definido mi aplicacion


//El puerto 3000 es comúnmente utilizado durante el desarrollo local de servidores
//En resumen, al "abrir el puerto 3000", estamos permitiendo que nuestro servidor de express escuche las solicitudes entrantes en ese puerto específico.

// metodo.listen(puerto,callback)
//puerto: numero de puerto en el que el servidor escuchara las solicitudes
//cb: funcion opcional que se ejecuta cuando se inicia el server


// ENRUTADO

// es un componente de express que se encarga de gestionar las rutas de nuestra aplicación
//Su propósito principal es actuar como un canalizador de solicitudes





//                   CLASE 8( EXPRESS 2) //

//Los servicios representan segmentos especificos de la logica de negocio


///Los middlewares son funciones que tienen acceso a los objetos req y res,
//  y también a la siguiente función en el ciclo de solicitud-respuesta de la aplicación (objeto next). 
// Se utilizan para realizar acciones específicas entre el flujo de una solicitud y su respuesta.

//En general, los middlewares se utilizan cuando deseamos agregar funcionalidades específicas,
// manipular datos de solicitud o respuesta, 
// o realizar acciones antes o después de que la solicitud llegue a su destino

// Los middlewares "pre-built" mas utilizados son :
//Morgan: registro de solicitudes HTTP  app.use(morgan("dev"))
//EXPRESS.JSON(): convierte las solicitudes .json a objetos javascript
// CORS:Permite o restringe el acceso a nuestro servidor.

// Middlewares personalizados, funciones que uno mismo crea para adaptar a nuestras necesidades:
//Reutlizacion de codigo
//Adaptabilidad:
//Mejora la mantenibilidad:

//hay otro punto vital para lograr aplicaciones sólidas y efectivas: la seguridad.
//  Es aquí donde entran las "validaciones".

//Dentro de cualquier sistema (bases de datos, servidores, etc) existen las validaciones. 
// Estas son simplemente funciones que confirman que la información tenga el formato y estructura que debería.
 

///                 CLASE 9 DataBase        ///

// Base de Datos: almacena,gestiona y recupera datos de forma organizada

//Datos: Cualquier elemento que pueda ser almacenado y procesados,numeros,textos,etc

// Informacion: el resultado del procesamiento de ess datos. adquieren contexto y significado

//Nuestro objetivo es almacenar datos de manera estructurada para que, cuando sea necesario, podamos procesarlos y obtener información significativa.


// Entidad: representa un objeto o concepto que esta en una base de datos.
//Fundamentos:


// Normalizacion de datos: organiza informacion de manera eficiente y mejora la integridad de los datos
// y que no se repitan los datos

// ID (clave primaria)

//Persistencia de datos ,nos permite almanecar y recuperar informacion
//Puede ser de forma relacional(SQL) o no relacional(NoSQL)
// relacional usan tablas,columnas,etc. No relacional es lo mas nuevos

//Hay dos maneras:

//                  Sistemas de archivos:
// guarda los archivos y datos en un disco duro o memoria usb
//Ventajas: Simple de entender y usar. Cada aplicación tiene su propio archivo de datos
//Desventajas: Puede volverse desordenado y no es tan eficiente para buscar y organizar grandes cantidades de datos

//                  Almacenamiento Local(Local storage)

//En los navegadores se utiliza y se guarda en el navegador. guardando la informacion del lado del cliente
//Ventajas: 
//Requiere pocas lineas de codigo(Facil de utilizar),Mas capacidad de almacenamiento,Mejor para el usuario
// y son accesibles de manera sincronica

//Desventajas:
//Almacenamiento limitado,util para pequeños fragmentos de informacion,que sea sincronico(bloquea procesos),
//Datos complejos son dificiles de manejar y no es seguro para datos sensibles(passwords),no expira automaticamente

// localStorage.getItem("item")  // busca un item
// localStorage.setItem("hola","hola") // agregar un item


//                   CLASE 10 Mongo DB                       //

// Mongo Db es una base de datos noSQL

//SQL(Structure Query Lenguage), lenguaje que se utiliza para trabajar en base de datos.
// Cuando nos referimos a NoSQL, son bases de datos que no usan este lenguaje

//Ventajas de sistemas NoSQL:
    // Escalabilidad Horizontal, manejo de datos no estructurados(ej: img,videos etc) y
    //alto rendimiento en operaciones especificas.

// MongoDB almacena datos en forma de documentos. Usa un formato BSON (Binary JSON)

//Utiliza un esquema dinámico: Documentos y Colecciones
//BSON se creo por MongoDB especificamente para mejorar la eficiencia en la transferencia de datos.

// mongodb crea colecciones que van a ser un conjunto de documentos.

//Documento, unidad basica de almacenamiento, ahí guardamos datos
//Colecciones,conjunto de documentos almacenados que se encuentran relacionados entre sí.

// Las referencias son una "conexión" que hay entre dos documentos que dice que uno de ellos puede abarcar la información del otro

 //user: gaston
 //pw : qLyXBm9AMpBV4kDg

 //MongoDB Compass se usa para trabajar con la base de datos de la nube,utiliza menos recursos y es una aplicacion local.



 //DataBaseOFMovies:
 //user : GastonGonzalez
 //pw: StY5ygqRMzVDtceP


 //Kahoot
 //post se utiliza para crear informacion
 // put se utiliza para actualizar la informacion
//  XML para almacenar y transportar datos
 //Ajax envia y recibe datos
 // CRUD : Create Read Update Delete, en una api RestFul
 //         post   get  put   delete
// lo que permite las callbacks es que se facilite el codigo




///                     CLASE 11 MOGOOSE            // /

//Servidor y Base de Datos son "idiomas" diferentes

//ODM(Object Data Modeling), son librerias que nos permiten manipular y convertir datos que no son
//compatibles naturalmente entre dos sistemas
// nos permite interactuar con la base de datos desde el codigo

//Schemas & Models

//Schema es un objeto que podemos crear en nuestro codigo, el cual llevara la configuracion de una coleccion
//Cuando definimos cuáles serán los datos que queremos guardar en la colección, tendremos que tipar estos datos.
// Es decir, definir qué tipo de dato vamos a guardar en cada propiedad de un documento.


//Models 
// Un modelo es un objeto basado en un schema que nos permite interactuar con una coleccion específica en 
//MongoDB

//el modelo utilizara la planilla creada por el Schema

// el schema y el models depende una de la otra
//el models crea un objeto del schema, y con eso interactuamos en la base de datos

//los models la primera letra en MAYUSCULA y en singular +.js


///                  CLASE 12 Mongoose II                    //

//Query es una solicitud/peticion de informacion especifica a la base de datos.
//La query se utiliza para buscar,crear,actualizar o eliminar datos en la base de datos, es una INSTRUCCIOn

//el metodo ".create" del modelo recibe un objeto

//Los operadores de comparación son códigos que nos permiten
// realizar la comparación de los datos recibidos con una condición específica.

//Actualizar un dato como la edad

// app.put("/increment",async (req,res)=>{
//     try{
//         const {name} = req.query;
//         const author = await Author.findOneAndUpdate(
//             {name : name},{$inc: {age: 5},{new: true}}); //el operador para incrementar la edad del autor ($inc)
//         res.json(author)                                  //   y la indicación para devolver el documento actualizado.
//     } catch (err){
//         res.status(500.json({message: err.message}))
//     }
// })

//Acualizacion con validacion

// const aurhor = await Author.findOneAndUpdate(
//     {name : name,age: {$lt:100}},    // el $lt compara el parametro que le mandamos
//     {$inc: {age: 5}},
//     {new:true}; //el new retorna lo que se actualizo, sino no se actualiza
// )

// el "findAndUpdate()" nos permite forzar una actualizacion. Si no encuentra lo buscado, lo creara, 
//esto se llama "upsert"


//Las relaciones se generan por referencia. En vez de almacenar en un solo documento la informacion
//almacenamos una referencia al documento relacionado

//Población de documentos
//La populacion nos permite cambiar las referencias con los datos reales de los documentos que estamos
//referenciando

// User.find().populate("name") va a relacionar el campo vehicle para que en lugar de mostrar el id
//va a mostrar el documento;

//  truquitos y tips

//el metodo "lean", obtenemos documentos como objetos de js en vez de modelos de mongoose

//Metodos Estáticos:
// funciones que se aplican direcamente al modelo y no a instancias especifica
// documento.statics.(nombre de la funcion)// asi se crea

//Metodo Dinamicos:
// se aplican a instancias especificas del modelo
//documento.methods.(name de la function) //asi se crea
// podemos usar .this para acceder a los valores con los cuales estamos trabajando


///             CLASE 13 BACKEND ADVANCED           ///

//Mantener el código ordenado y legible:

// Diseño modular desde el principio.
// Separación de preocupaciones
// Principio de responsabilidad UNICA
// Jerarqía de archivos y carpetas
// Nombres descriptivos
// Acomplamiento mínimo

// Abstracción permite interactuar con um módulo sin necesidad de entender todos los detalles internos de su implementacion


//Manejo de errores
//debemos identificar aquellas tareas susceptibles de provocar errores en algún momento.

//Try / Catch
// Throw
// Middelwares

//Express no puede manejar los errores asincronos, por eso tenemos que evitar los posibles errores

// Express cuenta con un middleware de manejo de errores predeterminado
// app.use((err,req,res,next) =>{}) return go(f,seed,[]))

//La idea general es crear una función de orden superior
// que se encargue de procesar los errores de nuestros handlers de forma “genérica”,
// permitiendo planificar el manejo de errores 
//dentro de una sola función en lugar de hacerlo en cada handler. 


//Utlis & helpers, son funciones que proporcionan utilidades auxiliares. Realizan tareas comunes/repetitivas

//Helpers = Enfocados en almacenar funciones  auxiliares para una tarea especifica dentro de la aplicacion/mi proyecto
// Utils trabajan con implementaciones más genericas/funcionan en cualquier proyecto
//En general los utils y helpers pueden utilizarse para manipulación de strings, operaciones matemáticas, formateo de datos, manejo de fechas y en particular en el manejo de errores.

// const user = user.id === +id // Unary operator + para pasar un string a number

///                 CLASE 14 Javascript Advanced                ///

// runtime = tiempo de ejecución de los programas

//Memory Heap: espacio de memoria de la pc donde se crean las variables.
//Call Stack : Mecanismo que organiza la ejecución de las funciones en una aplicación.

// cuando se ejecuta una funcion, se crea un nuevo contexto de ejecución y se carga en el memory heap la info contenida
// dentro de las variables

//Contexto de ejecución global, el codigo esta libre, afuera de las funciones
//Contexto de ejecucion local, codigo esta dentro de una fincion o bloque delimitado por las llaves {}

//entorno lexico : una lista de variables que dependen del contexto de ejeccucion

//hoisting es un comportamiento de Javascipt que lleva las variables y funciones hacia arriba del ambito lexico para cuando
//se ejecuten no haya ningun error

//Closures, funiones que tienen acceso a variables definidas en su ambito lexico,incluso dsp de haber terminado su ejecuccion


//Checkpoint: "clave foranea" en el contexto de base de datos relacionales

//Consulta utilizando Expresión Regular: Para realizar una búsqueda que ignore mayúsculas y minúsculas en el campo nombre,
// se utiliza $regex junto con new RegExp(nombreBuscado, 'i').
// La opción 'i' indica a MongoDB que la búsqueda debe ser insensible a mayúsculas y minúsculas

//En un esquema de Mongoose, la opción timestamps habilita la creación automática de dos campos en los documentos:
// createdAt y updatedAt. Estos campos registran automáticamente la fecha y
// hora de la creación y la última actualización del documento, respectivamente.
//7 Esto es útil para llevar un registro de cuándo se crearon y modificaron los documentos en la base de datos.

var status ="global";
function check(){
    var status = "local";
    function inn(){
        return status;
    } return inn;
}
var ch = check()

console.log(ch())
