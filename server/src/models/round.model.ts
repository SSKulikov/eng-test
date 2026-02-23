import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Score } from './score.model';

export interface RoundCreationAttributes {
  uuid: string;
  start_datetime: Date;
  end_datetime: Date;
  status: string;
}

@Table({
  tableName: 'rounds',
  timestamps: false,
})
export class Round extends Model<Round, RoundCreationAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  uuid!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_datetime!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  end_datetime!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string;

  @HasMany(() => Score)
  scores!: Score[];
}

export default Round;
