class Decrypt {
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
const decrypt = new Decrypt();
module.exports = decrypt;