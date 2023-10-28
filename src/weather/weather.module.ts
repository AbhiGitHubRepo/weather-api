import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from './config/app.config';
import { ErrorHelper } from './helper/error.helper';
import { ResponseHelper } from './helper/response.helper';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  controllers: [WeatherController],
  providers: [WeatherService, ErrorHelper,ResponseHelper],
})
export class WeatherModule {}
