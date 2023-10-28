import { ApiProperty } from '@nestjs/swagger';

export class Location {
  @ApiProperty({ example: 'Duncanville' })
  name: string;
  @ApiProperty({ example: 'Texas' })
  region: string;
  @ApiProperty({ example: 'USA' })
  country: string;
  @ApiProperty({ example: 32.66 })
  lat: number;
  @ApiProperty({ example: -96.92 })
  lon: number;
  @ApiProperty({ example: 'America/Chicago' })
  tz_id: string;
  @ApiProperty({ example: 1698445104 })
  location_epoch: number;
  @ApiProperty({ example: '2023-10-27 17:18' })
  location_time: string;
}
