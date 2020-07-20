import { Component } from '@angular/core';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Thitipon';
  score = 100;
  firstName = '';
  lastName ='';
  name = '';
  colors = ['Red','Blue','Green'];

  inputYourname(event: any): void{
    this.firstName = event.target.value;
  }

  //inputLastname(event: any): void{
  //  this.lastName = event.target.value;
  //}

  inputLastname(input: string): void{
    this.lastName = input;
  }

  saveName(): void{
    this.name = this.firstName + ' ' + this.lastName;
  }
  //save(event){
   // result = firstName + lastName;
  //}

}
