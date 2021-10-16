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

class EncryptFuncs {
    constructor() { }

    ec(input, multiplier) {
        let output = [];
        let mt = 15;

        if (multiplier) mt = multiplier;

        for (let i = 0; i < input.length; i++) {
            output[i] = input.codePointAt(i).toString(2) * mt;
        }
        output.reverse();

        return output.join('/%~#\\');
    }

    ec00(input, multiplier) {
        let output = input.split('');
        let mt = 15;

        if (multiplier) mt = multiplier;

        output.forEach((el, i) => output[i] = el.charCodeAt(0) * mt);

        output.reverse();

        return output.join('/%~#\\');
    }

    ec01(input){
        let output = input.split('');
        output.forEach((el, i) => output[i] = el.charCodeAt(0).toString(16));
        output.reverse();
        return output.join('/%~#\\');
    }
}

class DecryptFuncs {
    constructor() { }

    ec(input, multiplier) {
        let output = input.split('/%~#\\');
        let mt = 15;

        if (multiplier) mt = multiplier;

        output.forEach((el, i) => {
            output[i] = el / mt;
            output[i] = String.fromCharCode(
                parseInt(output[i], 2).toString()
            );
        });
        output.reverse();
        return output.join('');
    }

    ec00(input, multiplier) {
        let output = input.split('/%~#\\');
        let mt = 15;

        if (multiplier) mt = multiplier;

        for (let i = 0; i < output.length; i++) {
            output[i] = output[i] / mt;
            output[i] = String.fromCharCode(output[i]);
        }
        return output.reverse().join('');
    }

    ec01(input){
        let output = input.split('/%~#\\');
        output.forEach((el, i) => output[i] = String.fromCharCode(
            parseInt(output[i], 16).toString()
        ));
        return output.reverse().join('');
    }
}

const funcs = {
    ef: new EncryptFuncs(),
    df: new DecryptFuncs(),
    iterate: iterate
}
module.exports = funcs;
