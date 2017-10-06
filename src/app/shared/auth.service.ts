import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http:Http,private router:Router) { }
  
  addUser(data){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('crossDomain','true');
    let options = new RequestOptions({ headers: headers });
    console.log(data);
    this.http.post("http://10.20.8.70:8091/TODOApplication/person/addUser",data,options).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/login']);
    });
  }

  loginUser(data){
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Access-Control-Allow-Origin', '*');
    //headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('crossDomain','true');
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://10.20.8.70:8091/TODOApplication/person/login",data,options)
  }

}
