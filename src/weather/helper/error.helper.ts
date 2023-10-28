import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ErrorHelper {

  erroCodeMap = new Map();
  constructor() {
    this.erroCodeMap.set(1003, 400);
    this.erroCodeMap.set(1005, 400);
    this.erroCodeMap.set(1006, 400);
    this.erroCodeMap.set(9000, 400);
    this.erroCodeMap.set(9001, 400);
    this.erroCodeMap.set(9999, 400);
    this.erroCodeMap.set(1002, 401);
    this.erroCodeMap.set(2006, 401);
    this.erroCodeMap.set(2007, 403);
    this.erroCodeMap.set(2008, 403);
    this.erroCodeMap.set(2009, 403);
  }

  messageResolver(errorResponse) {
    const httpCode = this.erroCodeMap.get(errorResponse.error.code);
    console.log('httpCode', httpCode);
    if (httpCode === 400) {
      throw new BadRequestException(errorResponse);
    }
    if (httpCode === 401) {
      throw new UnauthorizedException(errorResponse);
    }
    if (httpCode === 403) {
      throw new ForbiddenException(errorResponse);
    }
  }
}
