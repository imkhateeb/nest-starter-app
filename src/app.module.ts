import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Account } from './accounts/account.model';
import { Setting } from './settings/setting.model';
import { AccountsModule } from './accounts/accounts.module';
import { SettingsModule } from './settings/settings.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'nestdb',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Account, Setting]),
    AccountsModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
