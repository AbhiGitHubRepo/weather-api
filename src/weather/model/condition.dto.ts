import { ApiProperty } from "@nestjs/swagger";

export class Condition {
    @ApiProperty({ example: "Overcast" })
    text: string;
    @ApiProperty({ example: "//cdn.weatherapi.com/weather/64x64/day/122.png" })
    icon: string;
    @ApiProperty({ example: 1009 })
    code: number;
}