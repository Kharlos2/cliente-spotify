export async function pedirPlanetas(){
    const URL ='https://swapi.dev/api/planets/'

    let response = await fetch (URL);
    let info = await response.json();

    return info;

}
export async function pedirEspecies(){
    const URL ='https://swapi.dev/api/species/'

    let response = await fetch (URL);
    let info2 = await response.json();

    return info2;

}
