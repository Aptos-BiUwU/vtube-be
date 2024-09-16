import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { mappingClass } from 'src/utils/helpers';

@Injectable()
export class UsersService {
  private readonly logger: Logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async save(createUserDto: CreateUserDto) {
    return await this.repo.save(createUserDto);
  }

  async findDetail(walletAddress: string) {
    return await this.repo.findOneBy({ walletAddress });
  }

  async update(params: UpdateUserDto) {
    const record = await this.findDetail(params.walletAddress);
    if (!record)
      throw new NotFoundException(
        `User with wallet address ${params.walletAddress} not found`,
      );
    mappingClass(record, params);
    return await this.save(record);
  }
}
