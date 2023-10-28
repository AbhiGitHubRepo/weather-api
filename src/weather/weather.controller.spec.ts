import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { ErrorHelper } from './helper/error.helper';
import { ResponseHelper } from './helper/response.helper';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from './config/app.config';
import { ConfigModule } from '@nestjs/config';
import { HttpExceptionFilter } from './app.globalhandler';

describe('AppController', () => {
  let appController: WeatherController;

  const q = 75116;

  const empty = null;

  const lang = "en-us"

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        HttpModule.registerAsync({
          useClass: HttpConfigService,
        }),
      ],
      controllers: [WeatherController],
      providers: [
        WeatherService,
        ErrorHelper,
        ResponseHelper,
        HttpExceptionFilter,
      ],
    }).compile();
    appController = app.get<WeatherController>(WeatherController);
  });

  describe('root', () => {
    it('should return a code of 200', async () => {
      expect(await appController.getCurrentWeather(q,lang)).toHaveProperty(
        'code',
        expect.stringMatching('200'),
      );
    });

    const action = async () => {
      await appController.getCurrentWeather(empty , lang);
    };

    it('should throw error 400', async () => {
      await expect(action()).rejects.toThrow('params cannot be empty');
    });

    
  });
});
