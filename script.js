
                                                    //DZ_16


function calc() {
    let i = 0;

    return function (a) {
        return i += a;
    }
}
const sum = calc();

console.log(sum(1));
console.log(sum(2));
console.log(sum(10));
