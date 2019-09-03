# NodeJS Server with AUTH and Postgres DB

The scope of this project is to produce an Elemental server in sync with a **Postgres Database** and capable of performing autentication of the type **JWT**(JSON Web Token).

This is a project that is going to serve as a basis to the GoBarber web & app application. This is the [challenge #2](https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/README.md#desafio-02-iniciando-aplica%C3%A7%C3%A3o) presented to the students of RocketSeat **OMNI STACK**  bootcamp.

## Initial structure

The basic server structure will be imported from [this GitHub repository](https://github.com/Jeandcc/Elemental-NodeJS-Server).

 ## 1. Setting up Nodemon + Sucrase

 Nodemon will be responsible for realoading the server automatically once it detects a change made to the files of the app. Sucrase is here to allow the use of modern syntax, such as "import from".

 ### Intalling the dependencies.

The code below will install the dependencies locally to our project and make them as DevDependencies, not taking them to the production environment. 

 `yarn add nodemon sucrase -D`

 ### Adding scripts to the package.json

 We'll add two custom scripts into the package.json file. 

 At the end, it will look like this:

 ```
  "scripts": {
    "dev": "nodemon src/server.js",
    "build": "sucrase ./src -d ./dist --transforms imports"
  },
 ```

 ## 2. Setting up Prettier + ESLint + EditorConfig

 These softwares will be responsible for formatting the code according to a standard (Airbnb), check for typos and process new syntaxes as "import".
