import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {taskService} from '../../shared/exportServices';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public tasks :any = [];
  public loading = false;
  constructor(private router:Router,private taskservice:taskService) {
  }
  ngOnInit(){
    this.loading = true;
    this.taskservice.allTasks().subscribe((data)=>{
      this.tasks = data.json();
      setTimeout(()=>{
        this.loading = false;
      },1000)
      
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
