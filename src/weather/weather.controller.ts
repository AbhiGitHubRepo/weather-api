import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ResponseHelper } from './helper/response.helper';
import { ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentWeather } from './model/currentweather.dto';


@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(
    private readonly weatherService: WeatherService,
    private responseHelper: ResponseHelper,
  ) {}

  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 401, description: 'UnAuthorised, Invalid secret key.'})
  @ApiResponse({ status: 400, description: "Bad Request. Pass US Zipcode, UK Postcode"+
   +"Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name "})
  @ApiOkResponse({type:CurrentWeather})

  @Get('current')
  @ApiParam({
    description: 'Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name ',
    name: 'q',
    required : true
  })

  @ApiParam({
    description: 'choose language you prefer to see the output',
    name: 'lang',
    required : true
  })
  async getCurrentWeather(@Query('q') q: any, @Query('lang') lang:string ) {
    if(q == null){
      throw new BadRequestException("params cannot be empty");
    }
    const response = await this.weatherService.findAll(q , lang);
    if(response.data){
      return this.responseHelper.messageMapper(response.data);
    }
  }
}
