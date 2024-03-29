function palindrom(str) {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}
console.log(palindrom('abba'));

//ES 6

const palindrom = str => {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
};

console.log(palindrom('ffefg'));