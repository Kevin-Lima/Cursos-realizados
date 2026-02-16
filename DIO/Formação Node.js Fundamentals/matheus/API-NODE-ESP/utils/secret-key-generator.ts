import { CronJob } from "cron";
import crypto from "crypto"
import dotenv from "dotenv";
import fs from "fs";

export const startGenKey = () => {return new CronJob("* * * 1 * *", ()=>{

        process.env.PREV_REFRESH_TOKEN_SECRET = ""+process.env.REFRESH_TOKEN_SECRET;
        process.env.PREV_ACCESS_TOKEN_SECRET = ""+process.env.ACCESS_TOKEN_SECRET;
        process.env.REFRESH_TOKEN_SECRET = crypto.randomBytes(64).toString("hex");
        process.env.ACCESS_TOKEN_SECRET = crypto.randomBytes(64).toString("hex");
        setEnv("PREV_REFRESH_TOKEN_SECRET", ""+process.env.PREV_REFRESH_TOKEN_SECRET);
        setEnv("PREV_ACCESS_TOKEN_SECRET", ""+process.env.PREV_ACCESS_TOKEN_SECRET);
        setEnv("REFRESH_TOKEN_SECRET", ""+process.env.REFRESH_TOKEN_SECRET);
        setEnv("ACCESS_TOKEN_SECRET", ""+process.env.ACCESS_TOKEN_SECRET);


}, null, true, "America/Sao_Paulo");
}

function setEnv(key : string, value : string) {
    const path = ".env";
    let content = fs.existsSync(path) ? fs.readFileSync(path, "utf8") : "";
    const regex = new RegExp(`^${key} = .*$`, "m");
    if(regex.test(content)) {
        content = content.replace(regex, (value === "")?  "" :`${key} = ${value}`)
    }else{
        content+= `\n${key} = ${value}`
    }
    fs.writeFileSync(path, content.trim() + "\n")
}