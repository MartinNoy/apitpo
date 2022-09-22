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

## REQUERIMIENTOS ESPECIFICOS

---
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
### INGRESO USUARIOS

Los usuarios podrán ingresar a la aplicación con su mail y contraseña. Tendrán la posibilidad de solicitar una nueva en caso de olvidarla mediante la opción OLVIDE CONTRASEÑA. Se recomienda utilizar algún criterio de validación para el reseteo de la misma.

---
### REGISTRO DE CLASES
Los usuarios con rol de profesor deben poder crear, modificar, publicar, despublicar y eliminar sus clases.
Un profesor puede tener publicadas varias clases. De cada clase se debe registrar la siguiente información:
- Nombre
- Materia
- Duración
- Frecuencia
- Costo

---
### CALIFICAR CLASE
Los usuarios con rol alumno podrán calificar las clases que hayan contratado. Para ello una vez contratada la clase y logueados en el sistema podrán visualizar todas las clases contratadas y calificarlas.
El sistema solo debe permitir calificar una vez cada clase. Se permite modificar la calificación.

---
### COMENTAR UNA CLASE
Los usuarios con rol alumno podrán comentar una clase. Para ello una vez contratada y logueados en el sistema podrán visualizar sus clases contratadas e ingresar un comentario.
Solo pueden comentarse aquellas clases cuyo estado sea Aceptada o Finalizada.

---
### BLOQUEAR COMENTARIOS
Los usuarios con rol profesor podrán ver los comentarios sobre sus clases previos a su publicación y bloquearlos en caso de corresponder. Al bloquear un comentario el profesor debe ingresar el motivo o descargo.
Si un profesor bloquea un comentario, el sistema debe notificar al alumno el descargo o motivo por el cual el profesor bloqueo el comentario.
Los comentarios aceptados se muestran en la página principal.

---
### CONTRATAR CLASES
Los usuarios con rol alumno podrán contratar clases. Logueados en el sistema tendrán acceso a la misma búsqueda de la pagina principal. Una vez seleccionada la clase la contratación requerirá que el alumno ingrese los siguientes datos:
- Teléfono y mail de contacto
- Horario de referencia para el contacto
- Mensaje al profesor sobre el motivo por el cual esta interesado en la clase
Los usuarios con rol profesor cuenta con una sección en su perfil en donde pueden visualizar las contrataciones de clases. Estas contrataciones pueden tener los siguientes estados: solicitada, aceptada, finalizada, cancelada.
Los profesores al recibir una contratación se ponen en contacto con el alumno y de llegar a un acuerdo modifica el estado de la clase a Aceptada.
Una vez que el alumno deja de tomar clases el profesor o el alumno pueden cambiar el estado de la clase a Finalizada.
Finalmente tanto si el profesor o el alumno no llegan a un acuerdo para la contratación de la clase cualquiera de los dos podrá cambiarle el estado a Cancelada.
