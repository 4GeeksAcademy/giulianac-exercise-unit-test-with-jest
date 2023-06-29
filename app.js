// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInUSD) {
    // convert the given valueInUSD to Euro
    let usdToEuro = (valueInUSD / oneEuroIs.USD);
    // convert usdToEuro to Yen value
    let valueInYen = usdToEuro * oneEuroIs.JPY;
    //return the yen value
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    // convert the given valueInYen to Euro
    let yenToEuro = (valueInYen / oneEuroIs.JPY);
    // convert yenToEuro to Pound value
    let valueInGBP = yenToEuro * oneEuroIs.GBP;
    //return the Pound value
    return valueInGBP;
}

//export the functions to be used on other files 
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}
