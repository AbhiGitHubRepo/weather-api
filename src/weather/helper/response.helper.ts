import { ResponseDTO } from '../model/response.dto';

export class ResponseHelper {

  response : ResponseDTO = new ResponseDTO();

  messageMapper(data):ResponseDTO {
    this.response.code = "200";
    this.response.status = "OK";
    this.response.data = data;
    return this.response;
  }
}
