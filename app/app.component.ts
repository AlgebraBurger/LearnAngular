import{ Component } from '@angular/core';
import{ AppService } from './app.service';
import{ AutoGrowDirective} from './auto-grow.directive';
@Component({
   selector: 'my-app',
   template: `<div class="div"><h1>{{title}}</h1>
   <input type="text" autoGrow />
   <ul>
    <li *ngFor="let langx of languages">
      {{langx.name}} | {{langx.level}} 
    </li>
   </ul>
   </div><employees>Loading...</employees>`,
   styles: [`
    h1{
      background-color:black; 
      padding:10px;
    }
   `],
   providers: [AppService],
   directives: [AutoGrowDirective]
})
export class AppComponent{
    title = "Welcome Angular2!!!x";
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