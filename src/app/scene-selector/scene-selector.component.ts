import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { Scene } from '../scene';
import { GROUPS, G_LIMIT_MYT, G_LIMIT_SCN } from '../groups';
import { SCENES } from '../scenes';
import { Card } from '../card';
import { GroupedObservable } from 'rxjs';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-scene-selector',
  templateUrl: './scene-selector.component.html',
  styleUrls: ['./scene-selector.component.css'],
})
export class SceneSelectorComponent implements OnInit {
  /* Database, sort of */
  groupset: Group[] = GROUPS;
  sceneset: Scene[] = SCENES;
  emptyCard: Card = {id:0,sceneId:0,groupId:0};
  emptyGroup: Group = {id:0,name:'',cards:[],color:''};
  /* =====Current state====== */
  /* groups */
  sceneGroups?: Group[];
  sceneMyth: Group = this.emptyGroup;
  sceneNews: Group = this.emptyGroup;
  scenePanic?: Group;
  discard: Card[] = [];
  clueCounter: number[] = [];
  sceneArchive: Card[] = [];
  /* flags or some */
  selectedScene?: Scene;
  selectedGroup?: Group;
  selectedCard?: Card;
  unstableRegion?: Card;
  selectedCardGroup?: Group;
  archiveShow: boolean = false;
  mythShow: boolean = false;
  cardNum: number = 0;
  discardCount: number = 0;
  eventCount: number = 0;
  /* ======================== */
  numlist: number[]= [1,2,3,4,5];
  showArchPool: boolean = false;
  /* ======================== */

  /*===============================
  Начало игры с выбором сцены
  ===============================*/
  onSelectScene(sscn: Scene): void {
    this.selectedScene = sscn;
    /* form scene group collection*/
    this.sceneGroups = [];
    var g: Group;
    this.selectedScene.groups.forEach((a) => {
      /* find group */
      g = this.groupset.find((x) => x.id == a) || this.emptyGroup;
      /* shuffle cards in group */
      this.shuffle(g.cards);
      /* add group in right place */
      if (g.id == 201) {
        this.sceneNews = g;
        this.sceneNews.cards = g.cards.slice(0, 13);
      } else if (g.id > G_LIMIT_MYT) {
        this.scenePanic = g;
      } else if (g.id > G_LIMIT_SCN) {
        this.sceneMyth = g;
      } else {
        this.sceneGroups?.push(g);
        this.clueCounter.push(0);
      }
    });
    console.log(this.sceneGroups);
    this.numlist = this.selectedScene.codex;    
  }

  onSelectRandomScene():void{
    this.onSelectScene(this.sceneset[Math.floor(Math.random() * this.sceneset.length)]);
  }

  onSelectGroup(sgp: Group): void {
    this.selectedGroup = sgp;
    this.selectedCard = sgp.cards.shift();    
    console.log(sgp);
    if(this.sceneGroups&&this.selectedCard){      
      if(this.selectedCard.sceneId>0){

      var a = this.sceneGroups.indexOf(sgp);
      console.log("selected group index "+a);
      this.clueCounter[a]=this.clueCounter[a]-1;
      this.setSelectedCardGroup();
      }
    }        
  }
  //if gate - shuffle discard and add to pool, if no cards - alert then shuffle discard
  onClue(): void {
    /* show first, then shuffle in top of right group */
    
    if(this.sceneMyth?.cards.length==0){
      alert("Положите жетон безысходности на лист сценария");
      this.shuffleDiscard();
    }
    else {    
    this.selectedCard = this.sceneMyth?.cards.shift();
    this.shuffleInTop(this.selectedCard||this.emptyCard);
    //console.log(this.sceneMyth);
    this.setSelectedCardGroup();
    }
    this.eventCount = this.sceneMyth?.cards.length || 0 ;
  }
  onMyth(mode: boolean): void {
    /* for gate show first, for doom show last, then discard */
    if (this.sceneMyth?.cards.length==0){
      alert("Положите жетон безысходности на лист сценария");
      this.shuffleDiscard();
    } else {
    if (mode) {
      this.selectedCard = this.sceneMyth?.cards.shift();
      this.selectedToDiscard();
      this.shuffleDiscard();
    } else {
      this.selectedCard = this.sceneMyth?.cards.pop();
      this.selectedToDiscard();
    }
    this.setSelectedCardGroup();
  }
  this.eventCount = this.sceneMyth?.cards.length || 0 ;
  }

  onMythPhase(): void{
    if(this.mythShow){
      this.mythShow=false;
    } else {
      this.mythShow = true;
      this.archiveShow = false;
    }
  }

  selectedToDiscard(): void{
    if (this.selectedCard) {
      this.discard.unshift(this.selectedCard);
    this.discardCount = this.discard.length;
  }
  //setunstable region
  this.unstableRegion=this.selectedCard;
  }

  shuffleDiscard(): void{
    //save last card in discard
    //shuffle discard
    //add discard to myth
    if (this.sceneMyth?.cards.length == 0) {
      //var tdc: Card = this.discard.shift()||this.emptyCard;
      this.sceneMyth.cards = this.discard;
      this.shuffle(this.sceneMyth.cards);
      this.discard=[];
      //this.discard.push(tdc);
      //this.discardCount = 0;
    }
    else {
      if(this.sceneMyth?.cards){
        this.shuffle(this.discard);
        this.sceneMyth.cards = this.sceneMyth.cards.concat(this.discard);
        this.discard=[];
      }
    }
    this.discardCount = 0;
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
    this.selectedCard = this.unstableRegion;
    this.setSelectedCardGroup();
  }

  onArchive(): void{
    if(this.archiveShow){
      this.archiveShow=false;
      this.selectedCard=undefined;
    } else {
      this.mythShow=false;
      this.archiveShow=true;
    }
  }
  onArchiveCard(sc: Card): void{
    if (this.selectedCard) {
      this.selectedCard = undefined;
    } else {
      this.selectedCard = sc;
    }
    //this.archiveShow=false;
  }
  onFlipArchive(c: Card): void{
    //flip selected card in archive
    //flip selected card onscreen
    if(c.id%2==0){
      c.id=c.id-1;
    } else {
      c.id=c.id+1;
    }
  }  
  addArchiveCard(){
    if(this.cardNum==0){
      this.showArchPool=false;
    } else {
      if(this.sceneArchive.find((x)=> x.id == this.cardNum*2-1+1000 || x.id == this.cardNum*2+1000) === undefined){
        this.sceneArchive.push({id:this.cardNum*2-1+1000,sceneId:0,groupId:0});
      } 
    }
  }
  
  addArchiveCardEvent(acn: number){
    this.cardNum=acn;
    this.addArchiveCard();
  }

  showArchivePool(){
    if(this.showArchPool){
      this.showArchPool=false;
    } else {
      this.showArchPool=true;
    }
  }

  deleteArchiveCard(){
    var tempArchive: Card[] = [];
    this.sceneArchive.forEach( aaa =>{
      if(aaa.id!=this.selectedCard?.id){
        tempArchive.push(aaa);
      }
    })
    this.sceneArchive = tempArchive;
  }

  onRoll(roll: boolean): void {
    /* myth, panic,new,discard,clue - do nothing */
    
    if (this.selectedGroup && this.selectedCard) {      
      if (this.selectedCard.sceneId > G_LIMIT_SCN) {
        /* clue from nbr + discard - shuffle in group */
        if (roll) {
          this.selectedToDiscard();
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
            console.log(a);
            this.sceneGroups[a].cards.unshift(this.selectedCard);
          }
        }
      }
      //Archive show block logic
    } else if (this.archiveShow){
      if(roll){
      this.onFlipArchive(this.selectedCard||this.sceneArchive[0]);
      }
      else{
        //delete card from archive
        this.deleteArchiveCard();
      }
    }
    /* flag resets */
    this.selectedCard = undefined;
    this.selectedGroup = undefined;
    this.selectedCardGroup = undefined;
  }

  getGroupIndex(c: Card): number{
    var a: number=0;        
    if(this.sceneGroups){
      a = this.sceneGroups.indexOf(
        this.sceneGroups.find((x) => x.id == c.groupId) || this.emptyGroup
        );
    }    
    return a;
  }
  setSelectedCardGroup(): void{
    this.selectedCardGroup = this.groupset.find(
      (x) => x.id == this.selectedCard?.groupId
      ) || undefined;
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
      // console.log("groupnum "+a+" ");
      console.log(this.sceneGroups[a]);
      this.clueCounter[a]=this.clueCounter[a]+1;
    }
  }

  resetGame():void{
    this.selectedScene=undefined;
    this.discard=[];
    this.selectedCard = undefined;
    this.selectedGroup = undefined;
    this.selectedCardGroup = undefined;
    this.sceneGroups = undefined;
    this.archiveShow=false;
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
