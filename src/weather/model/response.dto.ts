import { CurrentWeather } from "./currentweather.dto";

export class ResponseDTO{
    status:string;
    code:string;
    data:CurrentWeather;
}