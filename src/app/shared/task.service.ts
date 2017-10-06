import {Injectable} from '@angular/core';
import {Http} from '@angular/http' 

@Injectable()
export class taskService{
    private tasks=[];
    constructor(private http:Http){
        
    }

    addTask(data){
        return this.http.post('http://10.20.8.70:8091/TODOApplication/addTask/'+'piyush14/'+localStorage.getItem('token'),data);
    }

    allTasks():any{
        return this.http.post('http://10.20.8.70:8091/TODOApplication/getAll/piyush14',null);
    }

}