const priceCalculator = new PriceCalculator();

describe('price calculator', ()=>{
  it('Case 1: Normal user, New product, Same Date, price=50, Expected = 65', ()=> {
    const userType = 0;
    const productType = 0;
    const price = 50;
    const publishedDate = new Date();
    const expected = 65;
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Case 2: Normal user, New product, Previous Date, price=50, Expected = 75', ()=> {
    const userType = 0;
    const productType = 0;
    const price = 50;
    const publishedDate = new Date("2010-03-25");
    const expected = 75;
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Case 3: Normal user, Old product, Same Date, price=50, Expected = 85', ()=> {
    const userType = 0;
    const productType = 1;
    const price = 50;
    const publishedDate = new Date();
    const expected = 85;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Case 4: Normal user, Old product, Previous Published Date, price=50, Expected = 85', ()=> {
    const userType = 0;
    const productType = 1;
    const price = 50;
    const publishedDate = new Date("2020-01-01");
    const expected = 85;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Case 5: Company user, New product, Same Date, price=50, Expected = 60', ()=> {
    const userType = 1;
    const productType = 0;
    const price = 50;
    const publishedDate = new Date();
    const expected = 60;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Case 6: Company user, New product, Previous Date, price=50, Expected = 70', ()=> {
    const userType = 1;
    const productType = 0;
    const price = 50;
    const publishedDate = new Date("2013-05-27");
    const expected = 70;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Case 7: Company user, Old product, Same Date, price=50, Expected = 80', ()=> {
    const userType = 1;
    const productType = 1;
    const price = 50;
    const publishedDate = new Date();
    const expected = 80;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Case 8: Company user, Old product, Same Date, price=50, Expected = 80', ()=> {
    const userType = 1;
    const productType = 1;
    const price = 50;
    const publishedDate = new Date();
    const expected = 80;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });

  it('Negative test 1: Invalid userType, Expected = 0, check console.log', () => {
    const userType = 2;
    const productType = 0;
    const price = 50;
    const publishedDate = new Date("2050-01-01");
    const expected = 0;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Negative test 2: Invalid productType, Expected = 0', () => {
    const userType = 0;
    const productType = -1;
    const price = 50;
    const publishedDate = new Date();
    const expected = 0;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Negative test 3: Invalid price, Expected = 0', () => {
    const userType = 0;
    const productType = 1;
    const price = -100;
    const publishedDate = new Date();
    const expected = 0;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it('Negative test 4: (published date: 2050-01-01)! Published date can\'t be after calculation date), Expected = 0', () => {
    const userType = 1;
    const productType = 0;
    const price = 50;
    const publishedDate = new Date("2050-01-01");
    const expected = 0;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
});

describe('Factorial calculator', function(){
  it('should calc factorial correctly, (examples: 0!, 1!, 5!, 14!)', function() {
    let value = 0;
    let expectedFactorial = 1;
    expect(expectedFactorial).to.equal(priceCalculator.getFactorial(value));

    value = 1;
    expectedFactorial = 1;
    expect(expectedFactorial).to.equal(priceCalculator.getFactorial(value));

    value = 5;
    expectedFactorial = 120;
    expect(expectedFactorial).to.equal(priceCalculator.getFactorial(value));

    value = 14;
    expectedFactorial = 87178291200;
    expect(expectedFactorial).to.equal(priceCalculator.getFactorial(value));
  });
  it('Negative test 1: should NOT calc factorial for negative parameter (-5!) Expected = 0', function(){
    let value = -1;
    let expectedFactorial = 0;
    expect(expectedFactorial).to.equal(priceCalculator.getFactorial(value));
  });
  it('Negative test 2: should NOT calc factorial decimal parameter! (3.14!) Expected = 0', function(){
    let value = 1.55;
    let expectedFactorial = 0;
    expect(expectedFactorial).to.equal(priceCalculator.getFactorial(value));
  });
});
