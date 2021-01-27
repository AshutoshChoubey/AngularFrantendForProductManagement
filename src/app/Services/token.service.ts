import { Injectable } from '@angular/core';
import { SetUrlService } from './set-url.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private setUrl:SetUrlService) { }
  private baseurl=this.setUrl.url;
  // private iss={
  //   login :"http://phoenixhub.co.in/bcm/backend/public/api/login",
  //   signup :"http://phoenixhub.co.in/bcm/backend/public/api/signup"
  // }
  private iss={
    login :this.baseurl+"/login",
    signup :this.baseurl+"/signup"
  }
  handle(token)
  {
    this.set(token);
    //  console.log(this.payload(token));
  }
  set(token)
  {
    localStorage.setItem('token',token);
  }
  get()
  {
   return localStorage.getItem('token');
  }
  remove()
  {
    localStorage.removeItem('token');
  }
  isvalid()
  {
    const token=this.get();
    if(token){
      const payload=this.payload(token);
      if(payload)
      {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;


  }
  payload(token)
  {
   const payload= token.split('.')[1];
    return this.decodePayload(payload);
  }
  decodePayload(payload)
  {
    return JSON.parse(atob(payload));
  }
  logedIn()
  {
    return this.isvalid();
  }
}
