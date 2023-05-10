import { pedirPlanetas } from "../services/servicesStar.js";
import { pedirEspecies } from "../services/servicesStar.js";

let fila = document.getElementById("fila");

pedirPlanetas()
    .then(function (info) {

        info.results.forEach(function (results) {

            let columna = document.createElement("section")
            columna.classList.add("columna")

            let tarjeta = document.createElement("seccion")
            tarjeta.classList.add("tarjeta")

            let nombre = document.createElement("h1")
            nombre.textContent = results.name

            let gravedad = document.createElement("h4")
            gravedad.textContent = 'GRAVEDAD: ' + results.gravity

            let imagen = document.createElement("img")
            imagen.classList.add("planeta")
            imagen.src = "../assets/img/planeta.png"

            let diametro = document.createElement("h4")
            diametro.textContent = "DIAMETRO: " + results.diameter + "km"

            let clima = document.createElement("h4")
            clima.textContent = "CLIMA: " + results.climate

            let periodo = document.createElement("h4")
            periodo.textContent = "PERIODO ORBITAL: " + results.orbital_period + " dias"

            tarjeta.appendChild(imagen)
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(gravedad)
            tarjeta.appendChild(diametro)
            tarjeta.appendChild(clima)
            tarjeta.appendChild(periodo)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)

        })
    })

let fila2 = document.getElementById("fila2");

pedirEspecies()
    .then(function (info2) {

        info2.results.forEach(function (results) {

            let columna = document.createElement("section")
            columna.classList.add("columna")

            let tarjeta = document.createElement("seccion")
            tarjeta.classList.add("tarjeta")

            let nombre = document.createElement("h1")
            nombre.textContent = results.name

            let lengueje = document.createElement("h4")
            lengueje.textContent = 'LENGUAJE: ' + results.language

            let imagen = document.createElement("img")
            imagen.classList.add("toad")
            imagen.src = "../assets/img/toad.png"

            let color = document.createElement("h4")
            color.textContent = "COLOR DE PIEL: " + results.skin_colors

            let clasificacion = document.createElement("h4")
            clasificacion.textContent = "CLASIFICACIÓN: " + results.classification

            let estatura = document.createElement("h4")
            estatura.textContent = "ESTATURA PROMEDIO: " + results.average_height + " cm"

            tarjeta.appendChild(imagen)
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(lengueje)
            tarjeta.appendChild(color)
            tarjeta.appendChild(clasificacion)
            tarjeta.appendChild(estatura)
            columna.appendChild(tarjeta)
            fila2.appendChild(columna)

        })
    })