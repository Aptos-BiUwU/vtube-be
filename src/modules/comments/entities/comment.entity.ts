import { CommentStatus } from 'src/constants/comment.info';
import { BaseEntity } from 'src/utils/entity/base-entity';
import { Column, Entity } from 'typeorm';

export const COMMENT = 'comment';

@Entity()
export class Comment extends BaseEntity {
  @Column({ type: 'enum', enum: CommentStatus, default: CommentStatus.live })
  status: CommentStatus;

  @Column({ nullable: false })
  owner: string;

  @Column({ nullable: false })
  group: string;

  @Column({ nullable: true })
  mention?: string;

  @Column({ nullable: true })
  reply?: number;

  @Column({ nullable: true })
  content?: string;

  @Column({ nullable: true })
  image?: string;
}
