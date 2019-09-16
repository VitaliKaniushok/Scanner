
const truthScanner = [
    "This is true",
    "This is false",
    "similar to the truth",
    "something is wrong but similar to the truth",
    "one hundred and two percent lies"
];

const alienScanner = [
    "This is an alien",
    "This is not an alien",
    "I feel stardust, attention, this is an alien!"
];
 
function chooseText(arg) {

    let l = arg.length;

    if (l === 1) {
        return arg[0]
    }

    let i = Math.floor(Math.random() * (l - 0));

    return arg[i];
}

export default textDefinition = (arg) => {

    switch (arg) {

        case 'truthScanner':
            return chooseText(truthScanner);
            break;

        case 'alienScanner':
            return chooseText(alienScanner);
            break;

        default:
            return chooseText(arg);
    }
}