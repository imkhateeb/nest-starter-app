import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Setting } from '../settings/setting.model';

@Table({ tableName: 'accounts', timestamps: true, paranoid: true })
export class Account extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ allowNull: false, unique: true, type: DataType.STRING })
  name: string;

  @HasMany(() => Setting)
  settings: Setting[];
}
