# Documentación del proyecto Login (Sistema Autenticación y Autorización)
![Vue](https://img.shields.io/npm/v/vue?label=Vue&color=green)
![TypeScript](https://img.shields.io/npm/v/typescript?style=flat&label=TypeScript) ![Tailwind](https://img.shields.io/npm/v/tailwindcss?style=flat&label=Tailwind%20CSS&color=06B6D4) ![Vite](https://img.shields.io/npm/v/vite?style=flat&label=Vite&color=646CFF) ![Clerk](https://img.shields.io/npm/v/clerk?label=Clerk) ![Axios](https://img.shields.io/npm/v/axios?label=Axios) ![Vue Router](https://img.shields.io/npm/v/vue-router?label=Vue%20Router)






### 🌀 Proyecto Login y CRUD My Hero Academia 🌀

> En este proyecto se implementa un sistema de autenticación y autorización, donde el usuario puede registrarse, iniciar sesión y acceder a una base de datos de My Hero Academia. 
> El proyecto utiliza Vue.js con TypeScript y Tailwind CSS para el frontend. Dentro del backend realizado en el semana 1 se realizó varios cambios entre ellos, el cambio de la
> base de datos, en vez de usar la base de datos **MongoDB** se implementó DynamoDB, la razón se debe a que mi backend se empaquetó en AWS lambda y deployado en la nube y por ello es 
> mejor usar la base de datos propia de AWS que es DynamoDB. Adicionalmente use el servicio de **API Gateway** porque me facilitó la creación de las rutas y el manejo de los métodos HTTP.
> Ahora en este proyecto se enfoca en el FrontEnd donde se implementa el sistema de autenticación y autorización, con el uso del framework o libreria **Clerk**. Al implementar el sistema de 
> autenticación y autorización, se puede acceder a la base de datos de My Hero Academia, donde se pueden realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) 
> sobre los personajes de la serie.

## Lista de elementos aplicados y aprendidos en este proyecto

| #  | Tema               | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Complejidad |
|----|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| 00 | **Vue Components** | Una de las mejores maneras de trabajar en el FrontEnd es la separacion de componentes, para este caso para componente principal lo sub dividi en componentes para tener un mejor orden al codigo y que sea agradable a la vista. Para el caso de Vue use el moderno Composition API junto con el Script Setup                                                                                                                                                                                                                         |![Static Badge](https://img.shields.io/badge/100-green?style=flat&label=Baja)
| 01 | **Vue Router**     | Uno de las librerias mas importantes de VueJs son las rutas, Vue Route es creado por Vue con el objetivo de crear paginas en una sola aplicacion web. Existe la documentacion bien definida donde muestra paso a paso como implementar las rutas. Desde el manejo correcto de los directorios hasta la implementacion de las paginas.                                                                                                                                                                                                 |![Static Badge](https://img.shields.io/badge/100-green?style=flat&label=Baja)
| 02 | **Tailwind CSS**   | Para realizar los estilos con efectividad sin necesidad de una caratula llena de estilos mezclados y confusos en CSS. Tailwind es un framework que facilita poner estilos mientras se va diseñando y renderizando cada componente dentro de HTML.                                                                                                                                                                                                                                                                                     |![Static Badge](https://img.shields.io/badge/60-yellow?style=flat&label=Medio)
| 03 | **Axios**          | Algo que se me olvidaba de explicar es la libreria de Axios donde me ayuda a consumir mi API desde el backend de la forma mas sencilla. Esta libreria es compatible con los frameworks mas importantes como React Angular y Vue.                                                                                                                                                                                                                                                                                                      |![Static Badge](https://img.shields.io/badge/90-green?style=flat&label=Baja)
| 04 | **Clerk**          | Despues de haber investigado cuales eran los mejores frameworkd o librerias en 2025 para implementar la autenticacion de la manera mas sencilla posible, entre la lista de los mejores Clerk es una de ellas. Esta libreria me ha ayudado a implementar el sistema de autenticacion desde el Login, el registro hasta la redireccion cuando el usuario se autentica.                                                                                                                                                                  |![Static Badge](https://img.shields.io/badge/90-green?style=flat&label=Baja)
| 05 | **Guards**         | Uno de las estrategias mas importantes para poder proteger las rutas de Vue Route es la implementacion de los Guards, donde me ayuda a bloquear las rutas si el usuario no esta autenticado por mas que uno trataba de acceder con la url hacia una ruta especifica no lo permite gracias a la implementacion de los Guards.                                                                                                                                                                                                          |![Static Badge](https://img.shields.io/badge/90-green?style=flat&label=Baja)
| 06 | **MVC**            | **MVC** es considerado el patron mas antiguo lo cual en su tiempo era el mas efectivo al momento de desarrollar una aplicación. Este patron cosiste en la separacion de resposabilidades, el modelo, la vista y el controlador. Existen varias maneras de implementar el patron MVC, en mi caso aplique el MC para el backend y el V para la vista que es el FrontEnd y lo unifique en un solo proyecto. Este patron sirve mucho para nivel educativo pero para proyectos mas grandes se hae el uso de patrones modernos como el MVVM. |![Static Badge](https://img.shields.io/badge/90-green?style=flat&label=Baja)
| 07 | **AWS Lambda**     | Ahora hablando desde el Backend, yo quize probar la implementación y empaquetación del API usando uno de los servicios mas demandados de AWS, antes de empaquetar mi API, realice ciertas modificaciones desde .NET para poder enviar hacia la nube. Tuve exito al migrar hacia la nube de AWS ya que me resulto mas facil ejecutar desde mi FrontEnd.                                                                                                                                                                                |![Static Badge](https://img.shields.io/badge/60-yellow?style=flat&label=Medio)
| 08 | **AWS DynamoDB**   | Al implementar en Lambda mi backend yo use una base de datos diferente en este caso DynamoDB ya que es parte de AWS y me ayudaba de la forma mas facil a almacenar datos y no desde terceros como MongoDB. Ahora mi Backend esta con el sistema completo ligado a los servicios de AWS lo cual me da ciertas ventajas a la hora de consumir mi APIRest                                                                                                                                                                                |![Static Badge](https://img.shields.io/badge/100-green?style=flat&label=Baja)

## Tecnologías usadas

![Vue](https://img.shields.io/badge/VueJs--TS-%234FC08D?style=for-the-badge&logo=vue.js&label=FRAMEWORK&labelColor=black)
![TypeScript](https://img.shields.io/badge/typescript-blue?style=for-the-badge&logo=typescript&label=language&labelColor=black) ![Tailwind](https://img.shields.io/badge/tailwind--css-06B6D4?style=for-the-badge&logo=tailwindcss&label=framework&labelColor=black) ![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=Vite&label=Tool&labelColor=black)
![Clerk](https://img.shields.io/badge/Clerk-%236C47FF?style=for-the-badge&logo=clerk&label=Library&labelColor=black)





## Instrucciones

**Si desea revisar el proyecto, puede clonar con git clone o descargar Zip.**

1. Una vez clonado o descargado el proyecto, proceda a instalar las dependencias necesarias para el proyecto. Para ello, abra la Terminal (Mac/Linux)/ CMD (Windows) y navegue hasta la carpeta del proyecto y ejecute el siguiente comando:

``` bash
npm install
```
2. Una vez instalado las dependencias proceda a ejecutar el proyecto mediante el comando:

``` bash
npm run dev
```

---

## <img src="https://github.com/AngelDavidStudios/calculadora-propinas/blob/main/src/resources/ads-emote.JPG" width="55" height="55"> Hola, mi nombre es David Angel.
### Multimedia Desginer & Software Architect

Soy diseñador Multimedia cursando una segunda carrera en Ingeniería de Software, me estoy especializando en el desarrollo Backend como arquitecto de software, en este recorrido dia tras dia aprendo tecnologias nuevas.

David Angel Studios es mi marca personal donde mi misión es desarrollar diversos proyectos basado en mi apredizaje de nuevas tecnologias y almacenarlas en mi portafolio personal:

[![Linkedin](https://img.shields.io/badge/Linkedin-4479A1?style=for-the-badge&logo=9gag&label=Angel%20David%20Studios&labelColor=black)](https://www.linkedin.com/in/angeldavidstudios/)
[![Instagram](https://img.shields.io/badge/Instagram-FF0069?style=for-the-badge&logo=instagram&label=Angel%20David%20Studios&labelColor=black)](https://www.instagram.com/angeldavidstudios/) [![Youtube](https://img.shields.io/badge/Angel--David--Studios-FF0000?style=for-the-badge&logo=youtube&label=Youtube.com%2F&labelColor=black)](https://www.youtube.com/channel/UC2VYRq169QluoLeagCYrjVg)