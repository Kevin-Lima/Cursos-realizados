import { Request, Response } from "express"

import * as service from "../services/user-service"
import * as authService from "../services/auth-service"
import * as httpHelper from "../../utils/http-helper"
import { User } from "../models/user-model"

export const getUser = async (req: Request, res: Response) => {
    const httpResponse = await service.getUserService()
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.deleteUserService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postUser = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const httpResponse = await service.createUserService(bodyValue)

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
        const response = await httpHelper.badRequest() 
        res.status(response.statusCode).json(response.body)
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    console.log(id);
    const httpResponse = await service.getUserByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const login = async (req:Request, res:Response) => {
    let httpResponse = null;
    let body = {}
    try{
        const {email, password} = req.body;
        httpResponse = await authService.loginService(email, password, ""+req.ip, ""+req.get("User-Agent"));
        res.cookie("refresh-token", httpResponse.body["refresh-token"], {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        body = {"access-token" : httpResponse.body["access-token"]}
    }catch(e){
        httpResponse = await httpHelper.badRequest();
    }

    res.status(httpResponse.statusCode).json(body)

}

export const getName = async (req:Request, res:Response) => {
    try{
    let httpResponse = null;
    const access = await authService.auth(req, res);
    
    if(access){
        const user = await User.findByPk(access["userId"])
        httpResponse = await httpHelper.ok(user);
    }else{
        httpResponse = await httpHelper.unauthorized("");
    }
    res.status(httpResponse.statusCode).json(httpResponse.body);
    }catch(e){
        console.log("e")
    }
}

export const isAuthed = async (req : Request, res : Response) => {
    let httpResponse = null;
    const access = await authService.auth(req, res);
    if(access){
        const bodyResponse = {} as {"access-token" : string}
        if(access["changed"]) bodyResponse["access-token"] = access["access-token"]
        httpResponse = await httpHelper.ok(bodyResponse)
    }else{
        httpResponse = await httpHelper.unauthorized("");
    }
    res.status(httpResponse.statusCode).json(httpResponse.body);
}