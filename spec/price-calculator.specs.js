const priceCalculator = new PriceCalculator();
const testCases = [
  {
    userType : 0,
    productType: 0,
    price: 50,
    publishedDate: new Date(),
    expected: 65,
    caption: "New product, for a Normal user, published today"
  },
  {
    userType : 0,
    productType: 0,
    price: 50,
    publishedDate: new Date("2020-01-01"),
    expected: 75,
    caption: "New product, for a Normal user, published earlier"
  },
  {
    userType : 0,
    productType: 1,
    price: 50,
    publishedDate: new Date(),
    expected: 85,
    caption: "Old product, for a Normal user, published today"
  },
  {
    userType : 0,
    productType: 1,
    price: 50,
    publishedDate: new Date("2020-01-01"),
    expected: 85,
    caption: "Old product, for a Normal user, published earlier"
  },
  {
    userType : 1,
    productType: 0,
    price: 50,
    publishedDate: new Date(),
    expected: 60,
    caption: "New product, for a Company, published today"
  },
  {
    userType : 1,
    productType: 0,
    price: 50,
    publishedDate: new Date("2020-01-01"),
    expected: 70,
    caption: "New product, for a Company, published earlier"
  },
  {
    userType : 1,
    productType: 1,
    price: 50,
    publishedDate: new Date(),
    expected: 80,
    caption: "Old product, for a Company, published today"
  },
  {
    userType : 1,
    productType: 1,
    price: 50,
    publishedDate: new Date("2020-01-01"),
    expected: 80,
    caption: "Old product, for a Company, published earlier"
  },
  ,
  {
    userType : 22,
    productType:0,
    price: 50,
    publishedDate: new Date("2020-01-01"),
    expected: 0,
    caption: "Negative test: Invalid userType"
  },
  {
    userType : 22,
    productType:0,
    price: 50,
    publishedDate: new Date("2020-01-01"),
    expected: 0,
    caption: "Negative test: Invalid userType"
  },
  {
    userType : 0,
    productType: -1,
    price: 50,
    publishedDate: new Date(),
    expected: 0,
    caption: "Negative test: Invalid productType"
  },
  {
    userType : 0,
    productType: 1,
    price: -500,
    publishedDate: new Date(),
    expected: 0,
    caption: "Negative test: Invalid Price"
  },
  {
    userType : 0,
    productType: 1,
    price: -500,
    publishedDate: new Date("2050-01-01"),
    expected: 0,
    caption: "Negative test: (published date: 2050-01-01)! Published date can\\'t be after calculation date"
  }
];
describe('price calculator', ()=> {
  testCases.forEach(testCase => {
    it(testCase.caption, () => {
      expect(testCase.expected).to.equal(
          priceCalculator.calculatePrice(testCase.userType, testCase.productType, testCase.price, testCase.publishedDate)
      );
    })
  })

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
