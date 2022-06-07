
import dotenv from "dotenv";
import Indexrouter  from "./routers/index.routes";
import Getrouter from "./routers/get.routes";
import Postrouter from "./routers/post.routes";
import express, { Application } from "express";
import morgan from "morgan";


dotenv.config();
export class App {

    private app: Application;

    constructor(private port?: number | string){ //dEFINO QUE ESTA PROPIEDAD PUEDE O NO TENER PROPIEDAD RECIVIDA 
        this.app = express(); 
        this.configuracion();
        this.middleware();
        this.routes();

    };

     configuracion(){
        this.app.set("port", this.port || process.env.PORT || 3000 );
     };

     middleware(){
        this.app.use(morgan("dev"));
     };
    
    routes(){
        this.app.use(Indexrouter);
        this.app.use("/get", Getrouter);
        this.app.use("/pot", Postrouter);
    }

    async liste(){
        await this.app.listen(this.app.get("port"));
        console.log("Servidor en el puerto " , this.app.get("port"));
    }


}
