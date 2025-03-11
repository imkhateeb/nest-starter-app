import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Setting } from './setting.model';

@Injectable()
export class SettingsService {
  constructor(@InjectModel(Setting) private settingModel: typeof Setting) {}

  async createSetting(data: any) {
    const { name, data_type, value, account_id } = data;

    if (!['string', 'number', 'boolean', 'json'].includes(data_type)) {
      throw new BadRequestException('Invalid data_type');
    }

    const strValue = String(value);

    if (
      (data_type === 'number' && isNaN(value)) ||
      (data_type === 'boolean' && !['true', 'false'].includes(strValue))
    ) {
      throw new BadRequestException('Value does not match data_type');
    }

    return this.settingModel.create({
      name,
      data_type,
      value: strValue,
      account_id,
    });
  }

  async getAllSettings() {
    const result = await this.settingModel.findAll();
    return result;
  }

  async updateSetting(data: any, id: number) {
    const updatedResult = await this.settingModel.update(data, {
      where: {
        id: id,
      },
    });

    return updatedResult;
  }

  async deleteSetting(id: number) {
    const deleteResult = await this.settingModel.destroy({
      where: {
        id,
      },
    });

    return deleteResult;
  }
}
