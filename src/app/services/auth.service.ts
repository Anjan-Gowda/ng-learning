import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
status:boolean=false;
  constructor() { }
  getAuthStatus(){
    return this.status;
  }
}