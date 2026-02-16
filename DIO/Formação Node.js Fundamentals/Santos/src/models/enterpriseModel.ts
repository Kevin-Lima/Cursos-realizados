import { Model, DataTypes } from "sequelize";
import { sequelize } from "../repositories/repoConfig";

export class Enterprise extends Model {
  public id!: number;
  public nome!: string;
  public email!: string;
  public telefone!: number;
  public cnpj!: number;
  public senhaHash!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Enterprise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // ✅ NOVO (STRING):
cnpj: {
  type: DataTypes.STRING,  // ✅ MUDAR PARA STRING
  allowNull: false,
  unique: true,
  validate: {              // ✅ ADICIONAR VALIDAÇÃO (OPCIONAL)
    len: [14, 18] // CNPJ tem 14 números, mas pode ter formatação
  }
},
    senhaHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "enterprise",
    timestamps: true,
  }
);