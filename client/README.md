# Trabajo Practico Final para Aplicaciones Interactivas

## REQUERIMIENTOS GENERALES
- Cada grupo estará integrado por dos alumnos como máximo.
- Cada grupo diseña y desarrolla una aplicación web.
- El target de las aplicaciones son profesores que ofrecen clases particulares y alumnos que necesitan clases particulares.
- La aplicación debe ser responsive.
- El 40% de la nota se obtiene por el cumplimiento de las funcionalidades y la utilización de buenas prácticasque permiten la reutilización y optimizan la performance del sistema.
- El 40% de la nota se obtiene de la usabilidad y experiencia de usuario de la aplicación desarrollada.
- El 20% restante se obtiene de la documentación correspondiente.
- La aplicación deberá desarrollarse utilizando los siguientes lenguajes y librerías obligatorias: HTML/CSS, React, JavaScript y NodeJS
- La base de datos autilizar es opción del grupo pudiendo escogerse entre SQL (MySql, SqlServer, Postgress) y NO SQL (MongoDB)

## DOCUMENTACION REQUERIDA
Historias de usuario : []{}

## REQUERIMIENTOS ESPECIFICOS

---
#DONE sitio institucional
### SITIO INSTITUCIONAL
La aplicación debe incluir un sitio institucional en donde los usuarios pueden consultar y buscar las clases particulares que necesitan.
Debe incluir como mínimo:
- Descripción de la aplicación: Explicación de las funcionalidades disponibles para los usuarios
- Registro de nuevos usuarios (alumnos o profesores)
- Ingreso a la aplicación
- Búsqueda de clases por filtros
    - Materia
    - Tipo de clase (individual, grupal)
    - Frecuencia (única, semanal, mensual) o Calificación
- De cada clase se debe poder ver la siguiente información:
    - Profesor: nombre y experiencia (breve descripción brindada por el profesor con sus
    títulos y trabajos anteriores que muestren su experiencia en la materia) o Descripción de la clase
    - Duración y frecuencia
    - Costo
    - Calificación de alumnos o Comentarios de alumnos

---
#TO-DO registros nuevos usuarios
### REGISTRO NUEVOS USUARIOS
Los usuarios podrán registrarse para utilizar la aplicación. Existen dos roles diferentes: alumnos y profesores. Para registrarse ambos deberán completar un formulario con la siguiente información: nombre y apellido, mail, número de teléfono.
No se permitirá registrar usuarios con el mismo mail.
Una vez registrados cada rol deberá completar su perfil especifico:
- Profesor:
    - Titulo
    - Experiencia
- Alumno:
    - Fecha de nacimiento
    - Estudios cursados: primaria, secundaria, terciario, universitario. Indicar cuales están
terminados y cuales en curso

---
#TO-DO ingreso usuarios
### INGRESO USUARIOS

Los usuarios podrán ingresar a la aplicación con su mail y contraseña. Tendrán la posibilidad de solicitar una nueva en caso de olvidarla mediante la opción OLVIDE CONTRASEÑA. Se recomienda utilizar algún criterio de validación para el reseteo de la misma.

---
#TO-DO registro de clases
### REGISTRO DE CLASES
Los usuarios con rol de profesor deben poder crear, modificar, publicar, despublicar y eliminar sus clases.
Un profesor puede tener publicadas varias clases. De cada clase se debe registrar la siguiente información:
- Nombre
- Materia
- Duración
- Frecuencia
- Costo

---
#TO-DO calificar clase
### CALIFICAR CLASE
Los usuarios con rol alumno podrán calificar las clases que hayan contratado. Para ello una vez contratada la clase y logueados en el sistema podrán visualizar todas las clases contratadas y calificarlas.
El sistema solo debe permitir calificar una vez cada clase. Se permite modificar la calificación.

---
#TO-DO comentar una clase
### COMENTAR UNA CLASE
Los usuarios con rol alumno podrán comentar una clase. Para ello una vez contratada y logueados en el sistema podrán visualizar sus clases contratadas e ingresar un comentario.
Solo pueden comentarse aquellas clases cuyo estado sea Aceptada o Finalizada.

---
#TO-DO bloquear comentarios
### BLOQUEAR COMENTARIOS
Los usuarios con rol profesor podrán ver los comentarios sobre sus clases previos a su publicación y bloquearlos en caso de corresponder. Al bloquear un comentario el profesor debe ingresar el motivo o descargo.
Si un profesor bloquea un comentario, el sistema debe notificar al alumno el descargo o motivo por el cual el profesor bloqueo el comentario.
Los comentarios aceptados se muestran en la página principal.

---
#TO-DO contratar clases
### CONTRATAR CLASES
Los usuarios con rol alumno podrán contratar clases. Logueados en el sistema tendrán acceso a la misma búsqueda de la pagina principal. Una vez seleccionada la clase la contratación requerirá que el alumno ingrese los siguientes datos:
- Teléfono y mail de contacto
- Horario de referencia para el contacto
- Mensaje al profesor sobre el motivo por el cual esta interesado en la clase
Los usuarios con rol profesor cuenta con una sección en su perfil en donde pueden visualizar las contrataciones de clases. Estas contrataciones pueden tener los siguientes estados: solicitada, aceptada, finalizada, cancelada.
Los profesores al recibir una contratación se ponen en contacto con el alumno y de llegar a un acuerdo modifica el estado de la clase a Aceptada.
Una vez que el alumno deja de tomar clases el profesor o el alumno pueden cambiar el estado de la clase a Finalizada.
Finalmente tanto si el profesor o el alumno no llegan a un acuerdo para la contratación de la clase cualquiera de los dos podrá cambiarle el estado a Cancelada.


---
--- 
--- 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
