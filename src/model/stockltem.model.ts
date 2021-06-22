import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table, Table } from "sequelize-typescript";
import Order from "./order.model";
import StockItemHistory from "./stockItemHistory.model";

@Table
export default class StockItem extends Models {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(80))
  name: string;

  @HasMany(() => StockItemHistory)
  histories: StockItemHistory[];

  @HasMany(() => Order)
  orders: Order[];
}
