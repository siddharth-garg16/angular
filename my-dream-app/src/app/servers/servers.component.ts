import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer:boolean = false
  serverCreationStatus = "No server was created"
  serverName:string = "TestServer"; //input field will be pre populated with this text due to two way binding
  serverCreated = false;
  servers:string[] = []

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true
    }, 3000)
  }

  addServer(){
    this.serverCreationStatus = `${this.serverName} was created`
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event:any){
  //   this.serverName = (<HTMLInputElement>event.target).value
  // }
}
