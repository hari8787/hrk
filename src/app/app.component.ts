import { Component } from '@angular/core';
import { SdService } from './sd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  h:any;
  hrk:any

  constructor(private s:SdService){}
  ngOnInit(){
    //get method in batch details
    this.s.getdata().subscribe(obj=>{
      this.h=obj['message']
    })
  }
  
  studentdata(object){
    //console.log(object);
    this.s.fulldata(object).subscribe(result=>{
     // console.log(result,"12357");
      
      //alert(result["message"])
      this.hrk=result["message"]
     // console.log(this.hrk);
      
      //this.studet.push(result["message"])
      //console.log(this.studet);
      
    })
    
   }
  

}
