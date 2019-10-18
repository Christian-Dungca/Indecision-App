
const isAdult = (age) => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const canDrink = (age) => {
    if (age >= 21) {
        return true;
    } else {
        return false;
    }
}

export default (age) => age > 64 ? true : false;

export {isAdult, canDrink}