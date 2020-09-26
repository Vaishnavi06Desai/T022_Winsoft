"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.Database = void 0;
class Database {
    constructor() {
        this.MilitaryDatabase = {
            "users": [
                {
                    userid: "MX12345678",
                    password: "mil123"
                }
            ],
            "insession": [
                "idk"
            ],
            "places": [
                "Lachulung La",
                "Sia La",
                "Tanglang La",
                "Khardung La",
                "Sasser Pass",
                "Zoji La",
                "Rezang La",
                "Marsimik La",
                "Gyong La",
                "Indira Col",
                "Pensi La"
            ]
        };
    }
}
exports.Database = Database;
exports.database = new Database();
//# sourceMappingURL=database.js.map