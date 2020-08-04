import { Component } from '@angular/core';
import { mailDatasSchema } from '../schema/mailDatas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Inputs of the mail component
  name: string;
  role: string;

   mailDatas: Array<mailDatasSchema> = [
     { name: 'Logida', role: 'Application developer' },
     { name: 'Poorva', role: 'Application designer' }
   ];
   
  constructor() {}

  //Adding elements

  addItem(){
    this.mailDatas.push({name : this.name, role: this.role});
  }
  
  //Deleting elements from child
  
  mailDatachild(item,i){
    this.mailDatas.splice(i);
  }
  
}


