
import { createPool } from "mysql2/promise";

export async function connect (){
    const conn = await createPool({
        host: "localhost",
        user: "root",
        password: "010819",
        database: "sql_inventario",
        connectionLimit: 10
    });

    return conn;
}