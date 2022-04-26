import { Controller, Get, Post, HttpCode } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This create a cat record';
  }

  @Get()
  findAll(): string {
    return 'This action return all cats';
  }
}
