import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {taskService} from '../../shared/exportServices'
import {Router} from '@angular/router'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private taskService:taskService,private router:Router) { }

  ngOnInit() {
  }
  addTask(form:NgForm){
    form.value.status = "false";
    //console.log(form.value);
     this.taskService.addTask(form.value).subscribe((data)=>{
        this.router.navigate(['/dashboard']);
     });
     
  }
  back(){
    this.router.navigate(['/dashboard']);
  }
}
