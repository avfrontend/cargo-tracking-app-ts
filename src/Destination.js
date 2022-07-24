"use strict";
exports.__esModule = true;
exports.Destination = void 0;
var faker_1 = require("@faker-js/faker");
var Destination = /** @class */ (function () {
    function Destination() {
        this.receiver = faker_1.faker.name.firstName();
        this.location = {
            lat: +faker_1.faker.address.latitude(),
            lon: +faker_1.faker.address.longitude()
        };
    }
    return Destination;
}());
exports.Destination = Destination;
