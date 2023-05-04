export async function pedirPlanetas(){
    const URL ='https://swapi.dev/api/planets/'

    // const PETICION={
    //     method:'GET'
    // }

    let response = await fetch (URL);
    let info = await response.json();

    return info;

    
}
