const encrypt = require("./encrypt");
const decrypt = require("./decrypt");

function iterate(input, func, times){
    const t = times > 4 ? 4 : times;
    let rounds = 0;
    let result = input;
    while (rounds < t)
    {
        result = func(result);
        rounds++;
    }
    return result;
}

class Machine {
    constructor() { }

    encrypt(input, iterations, protocol) {
        return iterate(input, encrypt[protocol], iterations);
    }

    decrypt(input, iterations, protocol) {
        return iterate(input, decrypt[protocol], iterations);
    }
}

const machine = new Machine();
module.exports = machine;
