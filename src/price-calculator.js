/**
 * Class PriceCalculator Module
 * I revised the ES5 code to ES6+,
 * This class can easily be imported in any context
 */
class PriceCalculator {
  /**
   * Creates the priceCalculator
   */
  constructor() {
    this.moduleName = "Price Calculator" //the moduleName
  }

  /**
   * Prints name of this Module
   * @param {Element} span DOM-element to print name to
   */
  printModuleName(span) {
    span.textContent = "Will print module name in 3000ms: ";
    setTimeout( () => {
      span.textContent += "> " + this.moduleName
    }, 3000)
  }

  /**
   * Recursive Factorial function n! = n*(n-1)*...*3*2*1
   * @param {Integer} value is an integer number
   * @return {Integer}
   */
  getFactorial(value) {
    //TODO: Write function body that recursively calculates factorial of provided value
    if (value == 1) return 1;
    return value * this.getFactorial(value-1)
  }

  /**
   * Prints the Factorial to the content
   * @param value is an integer number
   */
  calcFactorial(value) {
    let factorialText = "";
    //revised to 5*4*3*2*1 instead of previous version 1*2*3*4*5 ;)
    for (let i = value; i > 0; i -= 1) {
      factorialText += i + ((i > 1) ? "*" : "");
    }
    document.querySelector('.factorial').textContent = "Factorial of " + value
      + "! = (" + factorialText + ") = " + this.getFactorial(value);
  }

  /**
   * Calculates the Final price the Factorial to the context
   * @param {Integer} userType:  0 = normal, 1 = company
   * @param {Integer} productType: 0 = new product, 1 = old product
   * @param {Integer} price is the raw price of the product
   * @param {Date} publishedDate is the publishing day of product
   * @return {Integer}
   */
  calculatePrice(userType, productType, price, publishedDate) {
    try {
      const typeFee = (productType === 0)? 25 : 35;
      let rebate = 0;
      if ( (productType === 0) && (publishedDate.toDateString() === new Date().toDateString()) ) rebate += 10;
      if (userType === 1 ) rebate += 5;
      return price + typeFee - rebate;
    } catch (ex) {
      console.log(ex);
    }
    return 0;
  }

  /**
   * Generates the List for the given Prices
   * @param {Element} priceContainer is a DOM-element
   * @param {Array.<Number>} prices is an array of the calculated prices
   */
  generateList(priceContainer, prices) {
    let DELAY = 1000;
    let price ;

    for (let i = 0; i < prices.length; i += 1) {
      price = prices[i];
      //I send (i & price) as variables for the callback using the es6 arrow function
      setTimeout( (i,price) => {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "Calculated price for item #" + i + " is: " + price;
        priceContainer.appendChild(paragraph);
      },  (DELAY * (i+1)),i+1,price);
    }
  }

  /**
   * Displays the prices to the context
   * @param {Array.<Number>} prices is an array of the calculated prices
   */
  displayPrices(prices){
    this.generateList(document.querySelector(".price-container"), prices)
  }
}
