import express from "express";
import router from "./routes";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';
import cors from "cors";
import cookieparser from "cookie-parser";
function createApp() {
    const app = express();
    app.use(cors({
        origin : "http://localhost:5173",
        credentials : true
    }))
    app.use(cookieparser())
    app.use(express.json())
    app.use("/api", router);
    
    //rota documentaçao
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    return app;
}

export default createApp;