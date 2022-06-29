import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arkMaster';
  screen:number=0;

  startNewGame():void{
    this.screen=1;
  }
  loadGame():void{
    this.screen=2;
  }
  openSettings():void{
    this.screen=1;
  }
}
