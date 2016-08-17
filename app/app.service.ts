import { Lang } from './app.component';

export class AppService{
    getLanguages() : Lang[] {
        return  [
            { id:1, name:'C#', level: 10 },
            { id:1, name:'Php', level: 7 },
            { id:1, name:'Java', level: 3 },
            { id:1, name:'Javascript', level: 10 }
        ];
    }
}