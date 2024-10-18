"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = /** @class */ (function () {
    function Member(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    Member.prototype.getMemberInfo = function () {
        return "".concat(this.name, " ").concat(this.email);
    };
    return Member;
}());
exports.Member = Member;
