import { DataType, DataTypes, Model } from "sequelize";
import { sequelize } from "../repositories/repoConfig";

export class Users extends Model{
    public id!: number  
    public cpf!: number
    public rg!: string
    public chaveUnitaria!: number
    public senhaHash!: string
    public nome!: string
    public telefone!: number
    public email!: string
    public readonly createdAt!: Date 
    public readonly updatedAt!: Date 
}

Users.init(

    {  id: {type:DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
       cpf: {type:DataTypes.INTEGER},
       rg: {type:DataTypes.STRING},
       chaveUnitaria: {type:DataTypes.INTEGER },
       senhaHash: {type:DataTypes.STRING, allowNull:false },
       nome: {type:DataTypes.STRING, allowNull:false },
       telefone: {type:DataTypes.INTEGER, allowNull:false },
       email: {type:DataTypes.STRING, allowNull:false }
    }, 

    {sequelize, 
    "tableName":"users",
    "timestamps": true
    })