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
  styleUrls: ['./scene-selector.component.css'],
})
export class SceneSelectorComponent implements OnInit {
  /* Database, sort of */
  groupset: Group[] = GROUPS;
  sceneset: Scene[] = SCENES;
  emptyCard: Card = {id:0,sceneId:0,groupId:0}
  /* =====Current state====== */
  /* groups */
  sceneGroups?: Group[];
  sceneMyth?: Group;
  sceneNews?: Group;
  scenePanic?: Group;
  discard: Card[] = [];
  /* flags or some */
  selectedScene?: Scene;
  selectedGroup?: Group;
  selectedCard?: Card;
  /* ======================== */

  onSelectScene(sscn: Scene): void {
    this.selectedScene = sscn;
    /* form scene group collection*/
    this.sceneGroups = [];
    var g: Group;
    this.selectedScene.groups.forEach((a) => {
      /* find group */
      g = this.groupset.find((x) => x.id == a) || {
        id: 0,
        name: 'none',
        cards: [],
      };
      /* shuffle cards in group */
      this.shuffle(g.cards);
      /* add group in right place */
      if (g.id == 201) {
        this.sceneNews = g;
        this.sceneNews.cards = g.cards.slice(0, 12);
      } else if (g.id > G_LIMIT_MYT) {
        this.scenePanic = g;
      } else if (g.id > G_LIMIT_SCN) {
        this.sceneMyth = g;
      } else {
        this.sceneGroups?.push(g);
      }
    });
  }
  onSelectGroup(sgp: Group): void {
    this.selectedGroup = sgp;
    this.selectedCard = sgp.cards.shift();
  }
  onClue(): void {
    /* show first, then shuffle in top of right group */
    this.selectedCard = this.sceneMyth?.cards.shift();
    this.shuffleInTop(this.selectedCard||this.emptyCard);
  }
  onMyth(mode: boolean): void {
    /* for gate show first, for doom show last, then discard */
    if (mode) {
      this.selectedCard = this.sceneMyth?.cards.shift();
    } else {
      this.selectedCard = this.sceneMyth?.cards.pop();
    }
    if (this.selectedCard) this.discard.unshift(this.selectedCard);
    /* shuffle discard on end of myth */
    if (this.sceneMyth?.cards.length == 0) {
      var tdc: Card = this.discard.shift()||this.emptyCard;
      this.sceneMyth.cards = this.discard;
      this.shuffle(this.sceneMyth.cards);
      this.discard=[];
      this.discard.push(tdc);
    }
  }
  onPanic(): void {
    /* CHANGE LATER FOR OTHER MECHANIC */
    /* show first card, then push back */
    this.selectedCard = this.scenePanic?.cards.shift();
    if (this.selectedCard) this.scenePanic?.cards.push(this.selectedCard);
  }
  onNews(): void {
    /* show first card, then destroy */
    this.selectedCard = this.sceneNews?.cards.shift();
  }
  onDiscard(): void {
    /* show first card, then destroy */
    this.selectedCard = this.discard[0];
  }

  onRoll(roll: boolean): void {
    /* myth, panic,new,discard - do nothing */
    if (this.selectedGroup && this.selectedCard) {      
      if (this.selectedCard.sceneId > G_LIMIT_SCN) {
        /* clue from nbr + discard - shuffle in group */
        if (roll) {
          this.discard.push(this.selectedCard);
        } else {
          this.shuffleInTop(this.selectedCard);
        }
      } else {
          /* event from nbr + push - unshift */
        if (this.sceneGroups) {
          var a: number = this.getGroupIndex(this.selectedCard);
          if (roll) {
            this.sceneGroups[a].cards.push(this.selectedCard);
          } else {
            this.sceneGroups[a].cards.unshift(this.selectedCard);
          }
        }
      }
    }
    /* flag resets */
    this.selectedCard = undefined;
    this.selectedGroup = undefined;
  }

  getGroupIndex(c: Card): number{
    if(this.sceneGroups&&this.selectedGroup){
      var a: number = this.sceneGroups.indexOf(this.selectedGroup) || 0;
    }    
    return 0;
  }

  shuffleInTop(c: Card): void {
    /* THIS NEEDS REFACTOR */
    /* find group */
    var a: number = this.getGroupIndex(c);
    /* pick 2 from group */
    if(this.sceneGroups){
      var t: Card[]=[];
      t.push(c);
      t.push(this.sceneGroups[a].cards.shift()||this.emptyCard);
      t.push(this.sceneGroups[a].cards.shift()||this.emptyCard);
      /* shuffle subgroup */
      this.shuffle(t);
      /* unshift group */
      t.forEach(ae => {
        if(this.sceneGroups) this.sceneGroups[a].cards.unshift(ae);
      });
    }
  }

  /* shuffle array function (taken from SO, then made generic)*/
  shuffle<Type>(array: Type[]): Type[] {
    var currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  constructor() {}

  ngOnInit(): void {}
}
