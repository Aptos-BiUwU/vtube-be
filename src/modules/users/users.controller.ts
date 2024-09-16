import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('User')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.save(createUserDto);
  }

  @Get(':walletAddress')
  findDetail(@Param('walletAddress') walletAddress: string) {
    return this.usersService.findDetail(walletAddress);
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }
}
