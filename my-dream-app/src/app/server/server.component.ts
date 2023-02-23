import {Component} from "@angular/core";

@Component({
    selector: '<app-server>',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    status:string = "online" //used for string interpolation

    getStatus(){
        return this.status
    }
}