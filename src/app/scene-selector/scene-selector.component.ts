import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { Scene } from '../scene';
import { GROUPS, G_LIMIT_MYT, G_LIMIT_SCN } from '../groups';
import { SCENES } from '../scenes';
import { Card } from '../card';
import { GroupedObservable } from 'rxjs';

@Component({
  selector: 'app-scene-selector',
  templateUrl: './scene-selector.component.html',
  styleUrls: ['./scene-selector.component.css']
})
export class SceneSelectorComponent implements OnInit {

  /* Database, sort of */
  groupset: Group[]=GROUPS;
  sceneset: Scene[]=SCENES;
  /* Current state */
  selectedScene?: Scene;
  sceneGroups?: Group[];
  sceneMyth?: Group;
  sceneNews?: Group;
  scenePanic?: Group;
  selectedCard?: Card;

  onSelectScene(sscn: Scene): void{
    this.selectedScene=sscn;
    /* console.log(this.selectedScene); */
    /* form scene group collection*/
    this.sceneGroups=[];
    var g: Group;
    this.selectedScene.groups.forEach(a => {
      g=this.groupset.find(x=>x.id==a)||{id:0,name:'none',cards:[]};
      /* console.log(g); */
      if(g.id==201){
        this.sceneNews=g;
      } else if(g.id>G_LIMIT_MYT) {
        this.scenePanic=g;
      } else if(g.id>G_LIMIT_SCN) {
        this.sceneMyth=g;
      } else {
        this.sceneGroups?.push(g);
      }      
    });
    
  }
  onSelectGroup(sgp: Group): void{
    this.selectedCard=sgp.cards.shift();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
