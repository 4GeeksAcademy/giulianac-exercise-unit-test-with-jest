// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(3)

    // if 1 dollar is 106.58 yens, then 3 dollars should be (3 * 106.58)
    const expected = 3 * 106.58; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3)).toBe(319.75); //1 dollar is 106.58 yens, then 3 dollars should be = (3 * 106.58)
})

test("One yen should be 0.0063 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromYenToPound(30)

    // if 1 yen is 0.0063 pounds, then 30 yens should be (30 * 0.0063)
    const expected = 30 * 0.0063; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(30)).toBe(0.18764659890539484); //1 yen is 0.0063 pounds, then 30 yens should be = (30 * 0.18764659890539484)
})