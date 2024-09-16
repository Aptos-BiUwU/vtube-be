import { CommentStatus } from 'src/constants/comment.info';
import { BaseEntity } from 'src/utils/entity/base-entity';
import { Column } from 'typeorm';

export const COMMENT = 'comment';

export class Comment extends BaseEntity {
  @Column({ type: 'enum', enum: CommentStatus, default: CommentStatus.live })
  status: CommentStatus;

  @Column({ nullable: false })
  owner: string;

  @Column({ nullable: true })
  mention: number;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: false })
  pumpFunHash: string;
}
