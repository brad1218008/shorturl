import { Entity, Column, PrimaryColumn} from "typeorm";

@Entity("short_url")
export class Short {
  @PrimaryColumn()
  id: string;

  @Column({
    name: "origin_url"
  })
  originUrl: string;

  @Column({
    name: "created_date"
  })
  createdDate: Date;
}