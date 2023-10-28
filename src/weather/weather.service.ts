import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CurrentWeather } from './model/currentweather.dto';
import { AxiosResponse } from 'axios';
import { ErrorHelper } from './helper/error.helper';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    private errorHelper: ErrorHelper
  ) {}

  async findAll(q: any, lang: string): Promise<AxiosResponse<CurrentWeather>> {
    try {
      let response = await this.httpService.axiosRef.get(
        process.env.WEATHER_API + '/current.json',
        {
          params: {
            q: q,
            key: process.env.SECRET,
            lang: lang
          },
        },
      );
      return response; 
    } catch (error) {
      this.errorHelper.messageResolver(error.response.data);
    }
  }
}
