## Proyecto hecho para postular a Reign
 

 
#### Que es?
 
El proyecto consta de 2 partes. 
- Client
- Server
 

 
##### Client
 
- Una aplicación hecha en **ReactJS** basada en un wireframe provisto
- Los estilos fueron entregados y fueron aplicados usando la librería **Material-UI**
- El Client muestra los datos entregados por el Server
- La aplicación se encuentra **Dockerizada** y utiliza **ESLint**
 
 
 
##### Server
 
- Una aplicación hecha en **Node.js**, **Express**, **MongoDB** y **Mongoose**
- Usando **node cron** el servidor cada hora se conecta a la dirección:
    *https://hn.algolia.com/api/v1/search_by_date?query=nodejs*
  para obtener los artículos de Hacker News
- La aplicación consume los datos y con ellos presenta un rest API disponible para el Client.
- El Server esta **Dockerizado** y utilizando **ESLint**
- El Server fue testeado usando Jest tiene un 73% de *test coverage* de acuerdo a `jest --coverage`
 
 
 
##### Cómo Utilizarlo.
 
- Modo Producción
    1. En una máquina con Docker funcionando
    2. Git clone https://gitlab.com/Francisco-Novoa/reigntest
    3. `cd reigntest`
    4. `docker-compose build` desde la carpeta Raiz
    5. `docker-compose up`
    6. Abre en el navegador http://localhost:8080/
       La primera carga obligará al server a hacer fetch para poblar la base de datos.
       Así que si se recarga la página, el Client debiera estar funcional.
    7. El Server no filtra entradas con nombres repetidos así que si hay muy pocos es por que la API 
    externa ha enviado muchos artículos repetidos y el Server los ha ignorado
    8. En Modo Producción el Server entrega el bundle producido por npm run build de Create React App,
    es posible ver el server de desarrollo usando modo Desarrollo
 


- Modo Desarrollo
    1. Asumamos que el proyecto está clonado de ahora en adelante
    2. Anda a ./dockerfiles y copia los contenidos de docker-compose.dev.yml en elarchivo
    docker-compose.yml que esta en la carpeta raíz del proyecto, los datos que estas sobre escribiendo estan en docker-compose.prod.yml
    3. `docker-compose build` desde la carpeta raíz
    4. `docker-compose up`
    5. Ahora la aplicación de React estará en http://localhost:3000/, la aplicación de Node.js en http://localhost:8080/
    6. Si se quisiese seguir desarrollando la aplicación se debería volver a correr los pasos 2 y 3 después de cada cambio, 
    modo Solo Backend permite usar docker para crear el Server y usar el *hot loading* que ofrece Create React App.
 


- Modo Solo Backend
    1. Asumiremos que la maquina tiene Node.js instalado
    2. Abrir la carpeta Client en su editor de código favorito, yo uso VSCode.
    3. Ejecute `npm run start` para iniciar el servidor de desarrollo de Create React App
    4. `docker-compose build` desde la carpeta raiz esto creara la imagen solo del Server y de MongoDB
    5. `docker-compose up`
 

 
##### Consideraciones Extra
 
 - El proyecto usa una pipeline de GitLab que construye el proyecto, realiza tests y linting
 - Si el Client no muestra más que el Header, una recarga debería bastar para poblar la base de datos.
 - La fuente de los textos no es exactamente la misma que la de el wireframe, use la que recomienda Material-UI, Roboto.
 - Para ver el *Test Coverage* ejecute `npm run coverage` desde la carpeta ./server

