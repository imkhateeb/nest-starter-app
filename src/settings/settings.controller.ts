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

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() data: any) {
    return this.settingsService.createSetting(data);
  }

  @Get()
  async getAllSettings() {
    return this.settingsService.getAllSettings();
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateSetting(@Param('id') id: number, @Body() data: any) {
    return this.settingsService.updateSetting(data, id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteSetting(@Param('id') id: number) {
    return this.settingsService.deleteSetting(id);
  }
}
