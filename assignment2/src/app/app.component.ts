import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string = "";
  buttonAvailability:boolean = true;

  resetUsername(){
    this.username = ""
    this.buttonAvailability = true;
  }

  changeButton(){
    if(this.username){
      this.buttonAvailability = false;
    }else{
      this.buttonAvailability = true;
    }
  }
}
