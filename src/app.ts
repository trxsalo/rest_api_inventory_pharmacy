import dotenv from "dotenv";

dotenv.config();

import express, { Application } from "express";
import morgan from "morgan";

export class App {

    private app: Application;

    constructor(private port?: number | string){ //dEFINO QUE ESTA PROPIEDAD PUEDE O NO TENER PROPIEDAD RECIVIDA 
        this.app = express(); 
        this.configuracion();
        this.middleware();

    }
     configuracion(){
        this.app.set("port", this.port || process.env.PORT || 3000 );
     }
     middleware(){
        this.app.use(morgan("dev"));
     }

    async liste(){
        await this.app.listen(this.app.get("port"));
        console.log("Servidor en el puerto " , this.app.get("port"));
    }


}