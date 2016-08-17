"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
var AppComponent = (function () {
    function AppComponent(appService) {
        this.title = "Welcome Angular2!!!";
        this.languages = xxx;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"div\"><h1>{{title}}</h1>\n   <ul>\n    <li *ngFor=\"let langx of languages\">\n      {{langx.name}} | {{langx.level}} \n    </li>\n   </ul>\n   </div>",
            styles: ["\n    h1{\n      background-color:black; \n      padding:10px;\n    }\n   "]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Lang = (function () {
    function Lang() {
    }
    return Lang;
}());
exports.Lang = Lang;
var xxx = [
    { id: 1, name: 'C#', level: 10 },
    { id: 1, name: 'Php', level: 7 },
    { id: 1, name: 'Java', level: 3 },
    { id: 1, name: 'Javascript', level: 10 }
];
//# sourceMappingURL=app.component.js.map