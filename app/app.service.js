"use strict";
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getLanguages = function () {
        return [
            { id: 1, name: 'C#', level: 10 },
            { id: 1, name: 'Php', level: 7 },
            { id: 1, name: 'Java', level: 3 },
            { id: 1, name: 'Javascript', level: 10 }
        ];
    };
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map