import checkVisa from "./visa";
import checkIP from "./ip";
import checkMac from "./mac";

const checker = {
    rules: {
        checkVisa,
        checkIP,
        checkMac,
    },

    validate(string, type) {
        if (type === 'visa') {
            return this.rules.checkVisa(string);
        }
        if (type === 'ip') {
            return this.rules.checkIP(string);
        }
        if (type === 'mac') {
            return this.rules.checkMac(string)
        }
    }
}

export default checker;