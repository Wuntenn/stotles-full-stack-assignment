import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

@Table({ createdAt: false, updatedAt: false })
export class ProcurementRecord extends Model {
  @Column({ primaryKey: true })
  id!: string;

  @Column
  title!: string;

  @Column
  description!: string;

  @Column
  publish_date!: string;

  @Column
  buyer_id!: string;

  @Column
  stage!: "TENDER" | "CONTRACT";

  @AllowNull
  @Column(DataType.STRING)
  close_date!: string | null;

  @AllowNull
  @Column(DataType.STRING)
  award_date!: string | null;

  @AllowNull
  @Column(DataType.REAL)
  value!: number | null;

  @AllowNull
  @Column(DataType.STRING)
  currency!: string | null; // Would use enum of currency codes eg: GBP, JPY, NZD

  @Column
  created_at!: string;
}
