"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return (another !== undefined &&
            another.email === this.email &&
            another.password === this.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    "marcelo.silva@gmail.com": new User("marcelo.silva@gmail.com", "Marcelo Silva", "marcelo123"),
    "kiara.silva@gmail.com": new User("kiara.silva@gmail.com", "Kiara Silva", "kiara123")
};
