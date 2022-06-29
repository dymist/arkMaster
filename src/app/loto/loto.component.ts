import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-loto',
  templateUrl: './loto.component.html',
  styleUrls: ['./loto.component.css']
})
export class LotoComponent implements OnInit {
  @Input() lotolist?:number[];
  @Output() selcodcard = new EventEmitter<number>();
  
  selectedNum: number=0;

  //num button click event
  selectNum(num: number): void {
    this.selectedNum = num;
    //console.log("selected in child "+num);
    this.selcodcard.emit(this.selectedNum);
  }
  // this.numsString=this.numlist.toString();
  // this.nnl=this.numsString.split(',').map(x=>+x);

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
