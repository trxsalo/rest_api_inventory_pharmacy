import dotenv from "dotenv";

dotenv.config();

import express, { Application } from "express";

export class App {

    private app: Application;
    constructor(){
        this.app = express();

    }
    
    async liste(){
        this.app.set("port", process.env.PORT || 3000);
        await this.app.listen(this.app.get("port"));
        console.log("Servidor en el puerto ", this.app.get("port"));
    }


}