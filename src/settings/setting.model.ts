import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Account } from '../accounts/account.model';

@Table({ tableName: 'settings', timestamps: true, paranoid: true })
export class Setting extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ allowNull: false, type: DataType.STRING })
  name: string;

  @Column({
    allowNull: false,
    type: DataType.ENUM('string', 'number', 'boolean', 'json'),
  })
  data_type: string;

  @ForeignKey(() => Account)
  @Column({ allowNull: false, type: DataType.INTEGER })
  account_id: number;

  @Column({ allowNull: false, type: DataType.STRING })
  value: string;
}
