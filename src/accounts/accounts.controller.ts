import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async create(@Body('name') name: string) {
    return this.accountsService.createAccount(name);
  }

  @Get()
  async getAllAccounts() {
    return this.accountsService.getAllAccounts();
  }

  @Get(':id')
  async getAccountById(@Param('id') id: number) {
    return this.accountsService.getAccountById(id);
  }
}
