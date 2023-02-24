import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string = "";
  buttonAvailability:boolean = true;

  resetUsername(): void{
    this.username = "";
    this.buttonAvailability = true;
  }

  changeButton(): void{
    if(this.username){
      this.buttonAvailability = false;
    }else{
      this.buttonAvailability = true;
    }
  }
}
