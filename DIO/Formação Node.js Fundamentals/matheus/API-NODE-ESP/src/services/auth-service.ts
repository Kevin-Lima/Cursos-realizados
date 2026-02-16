import * as httpResponse from "../../utils/http-helper";
import { findUserByEmail } from "../repositories/user-repo";
import { createSession } from "../repositories/persistent-session-repo"
import * as crypto from "../../utils/hash-helper";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { PersistentSession } from "../models/persistent-session-model";
import { where } from "sequelize";
import { now } from "sequelize/types/utils";

export const loginService = async (email : string, password : string, ip : string, agent : string) => {
  const user = await findUserByEmail(email);
  let response = null;
  if(user && await crypto.verifyArgon2(password, user["passwordHash"])) {
      const token = genRefreshToken(user["id"]);
      await createSession(user, token, ip, agent)
      response = await httpResponse.created({
        "refresh-token" : token
      });
      
  }else{
    response = await httpResponse.unauthorized();

  }
  return response;

}

export const auth = async (req : Request, res : Response) => {
        const authorizationHeader = req.headers["authorization"] || "";
        const accessToken = authorizationHeader.split(" ").length == 2 && authorizationHeader.split(" ")[1] || ""
        let result = (handleJWTVerify(accessToken , ""+process.env.ACCESS_TOKEN_SECRET) || handleJWTVerify(accessToken , ""+process.env.PREV_ACCESS_TOKEN_SECRET)) as {id : number};
        if(result){
            return {"access-token" : accessToken, userId : result["id"], changed: false};
        }
        const refreshToken = req.cookies["refresh-token"];
        if(!refreshToken) return null;
        const refreshTokenRow = await PersistentSession.findOne({where : {refreshTokenHash : await crypto.sha256Hash(refreshToken)}}) as PersistentSession;
        if (!refreshTokenRow || refreshTokenRow && (!refreshTokenRow["valid"] || ((new Date()) > (new Date(refreshTokenRow["expiresAt"]))))) return null;
        result = (handleJWTVerify(refreshToken , ""+process.env.REFRESH_TOKEN_SECRET) || handleJWTVerify(refreshToken , ""+process.env.PREV_REFRESH_TOKEN_SECRET)) as {id : number};
        if(result){
            const newRefreshToken = genRefreshToken(result["id"]);
            const response =  {"access-token" : genAccessToken(result["id"]), "userId" : result["id"], "changed" : true };
            await PersistentSession.update({valid: false, expiredAt: new Date()}, {where: {id:refreshTokenRow["id"]}})
            await createSession(await refreshTokenRow.getUser(), newRefreshToken, ""+req.ip, ""+req.get("User-Agent"))
            res.cookie("refresh-token", newRefreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
            req.headers["authorization"] = "Bearer " + response["access-token"]

            return response;
            
        }

        return null
        
}       

function genRefreshToken(userId : number) {
          return jwt.sign({"id": userId},""+ process.env.REFRESH_TOKEN_SECRET, {expiresIn:"7d"} );
}

function genAccessToken(userId: number){
              return jwt.sign({"id": userId},""+ process.env.ACCESS_TOKEN_SECRET, {expiresIn:"15m"} );

}
function handleJWTVerify(token : string, secret : string){
    try{
        return jwt.verify(token, secret);
    }
    catch{
        return null;
    }

}