import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http :HttpClient) { }
   
   baseURL = "http://localhost:14191/api/";
    registerUser(user : Array<string>)
    {
      return this.http.post(this.baseURL+"User/createUser",
      {
        firstName:user[0],
        lastName :user[1],
        email : user[2],
        mobile : user[3],
        gender : user[4],
        pwd : user[5]
      },
      {
        responseType:'text',
      });
    }

}
