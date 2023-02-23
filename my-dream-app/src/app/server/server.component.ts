import {Component} from "@angular/core";

@Component({
    selector: '<app-server>',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    status:string = "online" //used for string interpolation

    constructor(){
        this.status = Math.random() > 0.5 ? "online" : "offline"
    }

    getStatus(){
        return this.status
    }

    getColor(){
        return this.status==="online" ? "green" : "red"
    }
}