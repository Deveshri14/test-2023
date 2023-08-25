import { Component } from '@angular/core';
import { UserdataService } from './userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
items: any[]=[];

 
  constructor(private UserdataService:UserdataService){
    
  }
  ngOnInit() {
    
    this.UserdataService.getUserData().subscribe(data=>{
   this.items=data;
  

   
     
      
     });

    
  }
}
