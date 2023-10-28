import { ApiProperty } from "@nestjs/swagger";
import { Condition } from "./condition.dto";

export class Current {
  @ApiProperty({ example: 1698444900})
    last_updated_epoch: number;
    @ApiProperty({ example:  "2023-10-27 17:15"})
    last_updated: string;
    @ApiProperty({ example:  26.1})
    temp_c: number;
    @ApiProperty({ example:  79})
    temp_f: number;
    @ApiProperty({ example:  1})
    is_day: number;
    @ApiProperty({ type: Condition })
    condition: Condition;
    @ApiProperty({ example:  11.9})
    wind_mph: number;
    @ApiProperty({ example:  19.1})
    wind_kph: number;
    @ApiProperty({ example:  340})
    wind_degree: number;   
    @ApiProperty({ example:   "NNW"})
    wind_dir: string;
    @ApiProperty({ example:   1016})
    pressure_mb: number;
    @ApiProperty({ example:   30})
    pressure_in: number;
    @ApiProperty({ example:   0})
    precip_mm: number;
    @ApiProperty({ example:   0})
    precip_in: number;
    @ApiProperty({ example:   74})
    humidity: number;    
    @ApiProperty({ example:   100})
    cloud: number;
    @ApiProperty({ example:   29.6})
    feelslike_c: number;
    @ApiProperty({ example:   85.2})
    feelslike_f: number;
    @ApiProperty({ example:   16})
    vis_km: number;    
    @ApiProperty({ example:   9})
    vis_miles: number;
    @ApiProperty({ example:   6})
    uv: number;
    @ApiProperty({ example:   16})
    gust_mph: number;
    @ApiProperty({ example:   25.7})
    gust_kph: number;
  }