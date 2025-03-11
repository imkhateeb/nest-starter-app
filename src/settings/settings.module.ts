import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { Setting } from './setting.model';

@Module({
  imports: [SequelizeModule.forFeature([Setting])],
  providers: [SettingsService],
  controllers: [SettingsController],
})
export class SettingsModule {}
