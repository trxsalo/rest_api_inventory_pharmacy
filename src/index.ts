
import {App} from "./app"

async function main (){

    const app = new App(); //Instaciamo la clase

    await app.liste();
}


main(); //Ejecutamos la funcion