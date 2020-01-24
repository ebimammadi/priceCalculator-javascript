describe('price calculator', function(){
  it('should calc price right', function(){
    const userType = 0;
    const productType = 0;
    const price = 1;
    const publishedDate = new Date();

    const expected = 16;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
});

describe('price calculator case 2', function(){
  it('should calc price right (case 2)', function(){
    const userType = 1;
    const productType = 1;
    const price = 10;
    const publishedDate = new Date();

    const expected = 40;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
});

describe('price calculator case 3 - Different Date', function(){
  it('should calc price right (case 2)', function(){
    const userType = 1;
    const productType = 0;
    const price = 100;
    const publishedDate = new Date("2020-01-01");

    const expected = 120;
    const priceCalculator = new PriceCalculator();
    const actual = priceCalculator.calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
});
