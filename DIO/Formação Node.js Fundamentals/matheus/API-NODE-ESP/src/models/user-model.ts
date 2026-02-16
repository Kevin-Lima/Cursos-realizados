import { DataTypes, HasManyAddAssociationMixin, HasManyCreateAssociationMixin, Model } from "sequelize";
import { sequelize } from "../repositories/repo-config";
import { PersistentSession } from "./persistent-session-model";

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public passwordHash!: string;
  public phoneNumber! : number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public createSession!: HasManyCreateAssociationMixin<PersistentSession>
  public getSessions! : Promise<PersistentSession[]>
  public addSession! : HasManyAddAssociationMixin<PersistentSession, number>
}

User.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.INTEGER, allowNull: false}
  },
  {
    sequelize,
    tableName: "users"
  }
);

