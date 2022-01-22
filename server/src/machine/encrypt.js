class Encrypt {
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

const encrypt = new Encrypt();
module.exports = encrypt;