"use strict";
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2;
    }
    else {
        return parseInt(weight) * 5;
    }
}
console.log(kgToLbs("100"));
console.log(kgToLbs(200));
//# sourceMappingURL=index.js.map