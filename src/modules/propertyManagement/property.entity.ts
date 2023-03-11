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

  @Column({ type: 'timestamp' })
  establishTime: Date;

  @Column()
  contact: string;

  @Column()
  creditCode: string;

  @Column()
  remark: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTime: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updateTime: Date;
}

export default PropertyEntity;
