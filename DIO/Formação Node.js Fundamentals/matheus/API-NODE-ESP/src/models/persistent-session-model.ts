import { DataTypes, Model } from "sequelize";
import { sequelize } from "../repositories/repo-config";
import { timeStamp } from "console";
import { User } from "./user-model";

export class PersistentSession extends Model {
    public id! : number
    public ip! : string
    public refreshTokenHash! : string
    public agent! : string
    public userId! : number
    public valid! : boolean
    public expiresAt! : Date
    public expiredAt! : Date
    public readonly createdAt! : Date
    public readonly updatedAt! : Date

      public getUser! : Promise<User>
}

PersistentSession.init({
    id : {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey : true
    },
    ip : {
        type: DataTypes.STRING,
        allowNull : false
    },
    refreshTokenHash : {
        type: DataTypes.STRING,
        allowNull : false,
        unique:true
    },
    agent : {
        type: DataTypes.STRING,
        allowNull : false,
    },
    userId : {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull : false,
        references : {
            model: User,
            key : "id"
        },
        onUpdate : "CASCADE"
    },
    valid : {
        type: DataTypes.BOOLEAN,
        defaultValue : true
    },
    expiresAt : {
        type: DataTypes.DATE,
        allowNull:false
    },
    expiredAt : {
        type: DataTypes.DATE,
        defaultValue: null

    }

},{
    sequelize,
    tableName: "persistent_session",
    timestamps: true})

PersistentSession.belongsTo(User, {foreignKey: "userId", as: "user"});
User.hasMany(PersistentSession, {foreignKey: "userId", as: "sessions"})
