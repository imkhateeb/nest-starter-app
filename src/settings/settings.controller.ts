import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() data: CreateSettingDto) {
    return this.settingsService.createSetting(data);
  }

  @Get()
  async getAllSettings() {
    return this.settingsService.getAllSettings();
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateSetting(@Param('id') id: number, @Body() data: UpdateSettingDto) {
    return this.settingsService.updateSetting(data, id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteSetting(@Param('id') id: number) {
    return this.settingsService.deleteSetting(id);
  }
}
