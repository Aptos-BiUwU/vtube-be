import { BaseEntity } from 'src/utils/entity/base-entity';
import { Column, Entity } from 'typeorm';

export enum RecordStatus {
  live = 'live',
  end = 'end',
  hided = 'hided',
}

@Entity()
export class StreamRecord extends BaseEntity {
  @Column({
    nullable: false,
    type: 'enum',
    enum: RecordStatus,
    default: RecordStatus.end,
  })
  status: RecordStatus;

  @Column({ nullable: false })
  streamerId: number;

  @Column({ nullable: true })
  timeEnd?: number;

  @Column({ nullable: false, default: 0 })
  totalView: number;

  @Column({ nullable: true })
  image?: string;

  @Column({ nullable: true })
  background?: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description?: string;
}
