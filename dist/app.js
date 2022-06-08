"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const index_routes_1 = __importDefault(require("./routers/index.routes"));
const get_routes_1 = __importDefault(require("./routers/get.routes"));
const post_routes_1 = __importDefault(require("./routers/post.routes"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.configuracion();
        this.middleware();
        this.routes();
    }
    ;
    configuracion() {
        this.app.set("port", this.port || process.env.PORT || 3000);
    }
    ;
    middleware() {
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json());
    }
    ;
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use("/get", get_routes_1.default);
        this.app.use("/post", post_routes_1.default);
    }
    liste() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get("port"));
            console.log("Servidor en el puerto ", this.app.get("port"));
        });
    }
}
exports.App = App;
