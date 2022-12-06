import { Injectable } from '@angular/core';
import { environment } from 'projects/mon-appli/src/environments/environment';

const isProd = environment.isProd;

export interface ToLog {
  log(message: string, ...params: any[]): void;
}

export class ApiLoggerService implements ToLog {
  log(message: string, ...params: any[]) {
    console.warn(message, params);
  }
}

const fabricLogger = () => isProd ? new ApiLoggerService() : new LoggerService();

@Injectable({
  providedIn: 'root',
  useFactory: fabricLogger
  // useClass: ApiLoggerService
})
export class LoggerService implements ToLog {

  constructor() { }

  log(message: string, ...params: any[]) {
    console.info(message, params);
  }
}
