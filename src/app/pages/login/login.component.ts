import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../shared/exportServices';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public loading = false;
  constructor(private router:Router,private auth:AuthService) { }

  loginUser(form:NgForm){
    //console.log(form.value)
    this.loading = true;
    this.auth.loginUser(JSON.stringify(form.value)).subscribe((data)=>{
      console.log(data);
      if(data.json().success == "true"){
        console.log('login success');
        localStorage.setItem('token',data.json().token);
        localStorage.setItem('userName',data.json().username);
        setTimeout(()=>{
          this.loading = false;
          this.router.navigate(['/dashboard']);  
        },2000)
        
      }
      else{
         console.log('something f\'ed');
          setTimeout(()=>{
          this.loading = false;
        },500)
       }
    },(err)=>{
      console.log('fail');
      this.loading = false;
    });

  }
}


// .subscribe((data)=>{
//       console.log(data);
//       if(data.json().success == "true"){
//         console.log('login success');
//         localStorage.setItem('token',data.json().token);
//         localStorage.setItem('userName',data.json().username);
//         this.router.navigate(['/dashboard']);
//       }
//       else{
//         console.log('something f\'ed')
//       }
//     },
//       (err)=>{
//         console.log('fail');
//       });