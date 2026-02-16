import {User} from "../models/user-model";
import * as crypto from "../../utils/hash-helper";
export const createSession = async (user : User, token : string, ip : string, agent : string) =>{
    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 7)
    return await user.createSession({
        ip,
        refreshTokenHash: await crypto.sha256Hash(token),
        agent,
        expiresAt: expiresDate
    });



}