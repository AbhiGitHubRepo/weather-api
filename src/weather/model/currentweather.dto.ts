import { ApiProperty } from '@nestjs/swagger';
import { Location } from './location1.dto';
import { Current } from './current.dto';

export class CurrentWeather {
  @ApiProperty({ type: Current })
  current: Current;
  @ApiProperty({ example: Location })
  location: Location;
}
