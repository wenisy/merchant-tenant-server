import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('property')
class PropertyEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  companyName: string;

  @Column()
  ruleLevel: string;

  @Column()
  area: string;

  @Column()
  address: string;

  @Column('bigint')
  establishTime: number;

  @Column()
  contact: string;

  @Column()
  creditCode: string;

  @Column()
  remark: string;

  @Column('bigint')
  createTime: number;

  @Column('bigint')
  updateTime: number;
}

export default PropertyEntity;
