import { BaseEntity } from 'src/utils/entity/base-entity';
import { Column, Entity } from 'typeorm';

export enum UserStatus {
  baned = 'baned',
  active = 'active',
  vip = 'vip',
}

@Entity()
export class User extends BaseEntity {
  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.active,
    nullable: false,
  })
  status: UserStatus;

  @Column({ nullable: false, unique: true })
  walletAddress: string;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: true })
  avt?: string;

  @Column({ nullable: true })
  background?: string;

  @Column({ nullable: true })
  bio?: string;
}
