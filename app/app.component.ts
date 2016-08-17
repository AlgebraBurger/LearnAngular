import{ Component } from '@angular/core';
import{ AppService } from './app.service';
@Component({
   selector: 'my-app',
   template: `<div class="div"><h1>{{title}}</h1>
   <ul>
    <li *ngFor="let langx of languages">
      {{langx.name}} | {{langx.level}} 
    </li>
   </ul>
   </div>`,
   styles: [`
    h1{
      background-color:black; 
      padding:10px;
    }
   `],
   providers: [AppService]
})
export class AppComponent{
    title = "Welcome Angular2!!!";
    languages;
    constructor(appService:AppService){
        this.languages = appService.getLanguages();
    }
}

export class Lang {
  id: number;
  name: string;
  level: number;
}

const xxx: Lang[] = [
    { id:1, name:'C#', level: 10 },
    { id:1, name:'Php', level: 7 },
    { id:1, name:'Java', level: 3 },
    { id:1, name:'Javascript', level: 10 }
];