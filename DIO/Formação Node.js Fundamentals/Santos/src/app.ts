import express, {Request, Response} from "express";
import router from "./routes";

function crateApp() {
    const app = express();
    app.use(express.json())
    app.use("/api", router)
    return app
}

export default crateApp