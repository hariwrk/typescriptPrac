"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policy = void 0;
var User_1 = require("./User");
var Policy = /** @class */ (function () {
    function Policy(pid, user, amount) {
        this.pid = pid;
        this.user = user;
        this.amount = amount;
        this.baseno = 100;
    }
    Policy.prototype.calculatePremium = function () {
        var premium = this.baseno;
        if (this.user.age < 25) {
            premium += 50;
        }
        else if (this.user.age > 60) {
            premium += 100;
        }
        if (this.amount > 500000) {
            premium += 200;
        }
        return premium;
    };
    return Policy;
}());
exports.Policy = Policy;
var user1 = new User_1.User(1, 'hari', 22);
var user2 = new User_1.User(2, 'kishore', 45);
var user3 = new User_1.User(3, 'abc', 65);
var policy1 = new Policy('POL001', user1, 300000);
var policy2 = new Policy('POL002', user2, 600000);
console.log("Premium for ".concat(user1.name, ": ").concat(policy1.calculatePremium()));
console.log("Premium for ".concat(user2.name, ": ").concat(policy2.calculatePremium()));
