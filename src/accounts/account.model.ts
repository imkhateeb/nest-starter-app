import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Setting } from '../settings/setting.model';

@Table({ timestamps: true, paranoid: true })
export class Account extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @HasMany(() => Setting)
  settings: Setting[];
}
