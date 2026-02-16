import { User } from "../models/user-model";

import { Device } from "../models/device-model";
import * as crypto from "../../utils/hash-helper";

export const findAllUsers = async () => {
  return await User.findAll();
};

export const findUserByID = async (id: number) => {
  return await User.findByPk(id);
};


export const findUserByEmail = async (email : string) => {
  return await User.findOne({where: {email}})
};

export const createUser = async (data: any) => {
  return await User.create({
    "name": data["name"],
    "passwordHash" : await crypto.hashArgon2(data["password"]),
    "email" : data["email"],
    "phoneNumber" : data["phoneNumber"]
  });
};

export const deleteUser = async (id: number) => {
  const deleted = await User.destroy({ where: { id } });
  return deleted > 0;
};
