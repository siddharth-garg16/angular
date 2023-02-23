import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickCount:number = 0;
  secretText:string = "Your PIN is 192837";
  isVisible:boolean = false;
  clickArr:number[] = [];

  changeVisibility(){
    this.isVisible = !this.isVisible
    this.clickCount+=1
    this.clickArr.push(this.clickCount)
  }
}
