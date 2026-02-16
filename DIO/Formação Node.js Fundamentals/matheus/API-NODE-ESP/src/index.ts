import createApp from "./app"
import { sequelize } from "./repositories/repo-config"
import { User } from "./models/user-model";
import { Device } from "./models/device-model";
import { Reading } from "./models/reading-model";
import { CronJob } from "cron";
import { startGenKey } from "../utils/secret-key-generator";
import dotenv from "dotenv";
import { PersistentSession } from "./models/persistent-session-model";
dotenv.config();
const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`🐱‍🐉 server running at por http://localhost:${port}`);
})

sequelize.authenticate()
  .then(() => console.log("✅ Conectado ao MySQL"))
  .catch((err) => console.error("❌ Erro ao conectar no MySQL:", err));

// Sincronize na ORDEM CORRETA
async function syncDatabase() {
  try {
    await User.sync({ alter: true, force: false });
    console.log("✅ Tabela users sincronizada");
    
    await Device.sync({ alter: true, force: false });
    console.log("✅ Tabela devices sincronizada");
    
    await Reading.sync({ alter: true, force:false });
    console.log("✅ Tabela readings sincronizada");

    await PersistentSession.sync({alter: true, force: false})
    console.log("📦 Todas as tabelas sincronizadas com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao sincronizar tabelas:", error);
    
  }
  startGenKey();

}


syncDatabase();