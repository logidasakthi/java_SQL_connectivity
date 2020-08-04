import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import { mailDatasSchema } from '../schema/mailDatas';
@Component({
  selector: 'app-mail-basic',
  templateUrl: './mail-basic.component.html',
  styleUrls: ['./mail-basic.component.scss'],
})
export class MailBasicComponent implements OnInit {

  @Input() maildata: object;
  @Output() sendToParent: EventEmitter<any> = new EventEmitter();
  constructor() { 
   }
  ngOnInit() {}

  //passing item to be deleted to parent
  emptyItem(){
  this.sendToParent.emit(this.maildata);
  }
}
