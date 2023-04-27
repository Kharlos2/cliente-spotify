export async function pedirTokenEnSpotify() {
    //RECETA PARA CONSIMIR APIS CON JS == PASOS PARA IR A UN RESTAURANTE
    //1. PA ONDE VAS (LA URL DEL SERVIDOR + ENDPOINT)
    const URL = 'https://accounts.spotify.com/api/token'

    let datoUno = 'grant_type=client_credentials'
    let datoDos = 'client_id=5938fd7d0e5f4d889ba4db749d5780ad'
    let datoTres = 'client_secret=63d8eca3cf88416ca881b4f92588b05b'
    //2. QUE VAS A HACER (configuramos la petición o request)
    const PETICION = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `${datoUno}&${datoDos}&${datoTres}`
    }

    //3. ARRANQUE PUES (Consuma el API)
    let respuesta = await fetch(URL, PETICION)
    let respuestaTOKEN = await respuesta.json()
    console.log('Clinte ya llegue...')
    console.log(respuestaTOKEN)

    //   const response = await fetch('https://accounts.spotify.com/api/token', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: 'grant_type=client_credentials'
    //   })

    let token = respuestaTOKEN.token_type+" "+respuestaTOKEN.access_token
    return(token)

}

