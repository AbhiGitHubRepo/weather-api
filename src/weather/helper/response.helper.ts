import { ResponseDTO } from '../model/response.dto';

export class ResponseHelper {

  response : ResponseDTO = new ResponseDTO();

  messageMapper(data):ResponseDTO {

    if(data){
      this.response.code = "200";
      this.response.status = "OK";
      this.response.data = data;
    }
    else{
      this.response.code = "500";
      this.response.status = "Internal Error";
      this.response.data = null;
    }


    return this.response;
  }
}
