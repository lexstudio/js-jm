// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.


class Pelicula {
    constructor({id,titulo,director,anioEstreno, paisOrigen, generos, calificación}){
        id;
        titulo;
        director;
        anioEstreno;
        paisOrigen;
        generos;
        calificación;

        this.validarIMDB(id)
        this.validarTitulo(titulo)
        this.validarDirector(director)
        this.validarAnioEstreno(anioEstreno)
        this.validarPais(paisOrigen)
        this.validarGeneros(generos)
        this.validarCalificacion(calificación)
    }


    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
    }

    validarCadena(propiedad, valor){
        console.log(propiedad,valor)
        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacío`)

        if(typeof valor !=="string")return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`)

        return true 
    }

    validarLonguitudCadena(propiedad, valor, longuitud){
        if(valor.length > longuitud)return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos ${longuitud}`)

        return  true
    }


    validarNumero(propiedad, valor){
        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacio`)

        if(typeof valor!=="number") return console.error(`${propiedad} "${valor}" ingresado no es un numero`)

        return true
    }

    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" no es un arreglo`)

        if(valor.length===0) return console.error(`${propiedad} ${valor} no tiene datos`)

        for(let cadena of valor){
            if(typeof cadena!=="string") return console.error(`El valor "${cadena}" ingresado NO es una cadena de texto`)
        }

        return true
    }

    validarIMDB(id){
        if(this.validarCadena("IMBD id", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`IMDB id "${id}" no es valido debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`)
            }


        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("Titulo", titulo)){
            this.validarLonguitudCadena("Titulo", titulo, 100)
        }
    }

    validarDirector(director){
        if(this.validarCadena("Director", director))
            this.validarLonguitudCadena("Director", director, 50)
    }


    validarAnioEstreno(estreno){
        if(this.validarNumero("Año de Estreno", estreno)){
            if(!(/^([0-9]){4}$/.test(estreno)))
                return console.error(`Año de estreno "${estreno}" no es válido, debe ser un numero de 4 digitos`)
        }
    }

    validarPais(pais){
        this.validarArreglo("Pais", pais)
    }

    validarGeneros(generos){
        if(this.validarArreglo("Generos", generos)){
            for (let genero of generos){
                //console.log(Pelicula.listaGeneros.includes(genero))
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Genero(s) incorrectos "${generos.join(", ")}"`)
                    Pelicula.generosAceptados();
                }
                //console.log(genero)
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Calificación", calificacion))
            return (calificacion <0 || calificacion>10)
                ?console.error(`La calificación tiene que estar en un rango entre 0 y 10`)
                : this.calificacion = calificacion.toFixed(1)
    }

    fichaTecnica(){
        console.info(`Ficha Técnica:
                        Titulo: "${this.titulo}"
                        Director: "${this.director}"
                        Año: "${this.anioEstreno}"
                        País: "${this.paisOrigen}"
                        Generos: "${this.generos}"
                        Calificacion: "${this.calificacion}"
                        IMDB id: "${this.id}"
                    `)
    }
    
}
    
    





const miPelicula = {
    id:"aa1234567",
    titulo:"Nombre de pelicula",
    director:"0123456789",
    anioEstreno: 2020,
    paisOrigen:["Ecuador", "Mexico", "EEUU"],
    generos:["Comedy","Drama"],
    calificación:1
}

const pelicula = new Pelicula(
    {
        id:"aa1234567",
        titulo:"Nombre de pelicula",
        director:"0123456789",
        anioEstreno: 2020,
        paisOrigen:["Ecuador", "Mexico", "EEUU"],
        generos:["Comedy","Drama"],
        calificación:1
    }
)
pelicula.fichaTecnica()