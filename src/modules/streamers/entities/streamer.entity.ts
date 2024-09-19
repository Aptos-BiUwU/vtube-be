import { BaseEntity } from 'src/utils/entity/base-entity';
import { Column, Entity } from 'typeorm';

export enum StreamerStatus {
  active = 'active',
  hided = 'hided',
}

@Entity()
export class Streamer extends BaseEntity {
  @Column({
    type: 'enum',
    enum: StreamerStatus,
    default: StreamerStatus.active,
    nullable: false,
  })
  status: StreamerStatus;

  @Column({
    nullable: false,
    default: 1,
  })
  level: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: true, unique: false })
  avt?: string;

  @Column({ nullable: true, unique: false })
  background?: string;

  @Column({ nullable: false, default: 0 })
  totalFollower: number;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  youtube?: string;

  @Column({ nullable: true })
  twitter?: string;

  @Column({ nullable: true })
  telegram?: string;

  @Column({ nullable: true })
  discord?: string;
}
