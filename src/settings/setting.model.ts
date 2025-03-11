import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Account } from '../accounts/account.model';

enum DataTypeEnum {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  JSON = 'json',
}

@Table({ timestamps: true, paranoid: true })
export class Setting extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({
    type: DataType.ENUM(...Object.values(DataTypeEnum)),
    allowNull: false,
  })
  data_type: DataTypeEnum;

  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @ForeignKey(() => Account)
  @Column({ type: DataType.INTEGER, allowNull: false })
  account_id: number;

  @BelongsTo(() => Account)
  account: Account;
}
