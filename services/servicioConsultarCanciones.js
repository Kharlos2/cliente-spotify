export async function buscarCanciones(token){

    const URL = 'https://api.spotify.com/v1/artists/5eAWCfyUhZtHHtBdNk56l1/top-tracks?market=US'

    const PETICION ={
        method: "GET",
        headers: {
            "Authorization": token
        }
    }

    let respuesta = await fetch(URL,PETICION)
    let cancionesEntregadas= await respuesta.json()
    return cancionesEntregadas
}