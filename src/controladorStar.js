import { pedirPlanetas } from "../services/servicesStar.js";

let tarjeta = document.getElementById("tarjeta");

pedirPlanetas()
    .then(function (info) {

        info.results.forEach(function (results) {

            tarjeta.innerHTML += results.name

            console.log(results);
            // let columna=document.createElement("div")
            // columna.classList.add("col")

            // let tarjeta=document.createElement("div")
            // tarjeta.classList.add("card","h-100","shadow")

            // let pista=document.createElement("audio")
            // pista.classList.add("w-100")
            // pista.setAttribute("controls","controls")
            // pista.src=cancion.preview_url

            // let foto = document.createElement("img")
            // foto.classList.add("img-fluid" ,"w-100")
            // foto.src=cancion.album.images[0].url

            // let nombre = document.createElement("h4")
            // nombre.classList.add("text-center","fw-bold")
            // nombre.textContent=cancion.name

            // tarjeta.appendChild(foto)
            // tarjeta.appendChild(nombre)
            // tarjeta.appendChild(pista)
            // columna.appendChild(tarjeta)
            // fila.appendChild(columna)

        })


    })