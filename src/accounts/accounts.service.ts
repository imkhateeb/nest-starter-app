import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from './account.model';

@Injectable()
export class AccountsService {
  constructor(@InjectModel(Account) private accountModel: typeof Account) {}

  async createAccount(name: string): Promise<Account> {
    if (await this.accountModel.findOne({ where: { name } })) {
      throw new BadRequestException('Account with this name already exists');
    }
    return this.accountModel.create({ name });
  }

  async getAllAccounts() {
    return await this.accountModel.findAll();
  }

  async getAccountById(id: number) {
    return await this.accountModel.findByPk(id);
  }
}
