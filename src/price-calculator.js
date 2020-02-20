/**
 * Class PriceCalculator Module
 * Revised from ES5 code to ES6+,
 * This class can be imported in any context
 */
class PriceCalculator {
  /**
   * Creates the priceCalculator
   */
  constructor() {
    this.moduleName = "Price Calculator"

    this.users = [
      {
        type: 0,
        typeName:"normal"
      },
      {
        type: 1,
        typeName:"company"
      }
    ];

    this.products = [
      {
        type: 0,
        typeName: "new",
        addedFee: 25
      },
      {
        type: 1,
        typeName: "old",
        addedFee: 35
      }
    ];
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
    if (value<0) return 0; //for negative numbers parameter validation
    if (!Number.isInteger(value)) return 0; //for decimal numbers parameter validation
    if (value === 0) return 1;

    // 1!= 1, n! = n*(n-1)!
    if (value === 1) return 1;
    return value * this.getFactorial(value-1)
  }

  /**
   * Prints the Factorial to the content
   * @param {Integer} value is an integer number
   */
  calcFactorial(value) {
    let factorialText = "";
    for (let i = value; i > 0; i -= 1) {
      factorialText += i + ((i > 1) ? "*" : "");  //revised: 5*4*3*2*1 is better that the previous version 1*2*3*4*5 :)
    }
    document.querySelector('.factorial').textContent = "Factorial of "
      + value + "! = (" + factorialText + ") = " + this.getFactorial(value);
  }

  /**
   * Calculates the Final price
   * @param {Integer} userType:  0 = normal, 1 = company
   * @param {Integer} productType: 0 = new product, 1 = old product
   * @param {Integer} price is the raw price of the product
   * @param {Date} publishedDate is the publishing day of product
   * @return {Integer}
   */
  calculatePrice(userType, productType, price, publishedDate) {
    try {

      if (price <= 0 ) throw "Not a valid price";
      if (publishedDate > new Date()) throw "Not a valid Date!";

      const product = this.products.find(product => productType === product.type );
      product.rawPrice = price;
      const user =this.users.find(user => userType === user.type );

      return product.rawPrice + product.addedFee - this.calculateRebate(user,product,publishedDate);

    } catch (ex) {
      console.log(ex);
    }
    return 0;
  }

  /**
   * Compares the current date with the publishedDate
   * @param {Date} publishedDate is the publishing day of product
   * @return {boolean}
   */
  sameDate(publishedDate) {
    if (publishedDate.toDateString() === new Date().toDateString()) return true;
    return false
  }

  /**
   * Calculates the Rebate price
   * @param {Object} user
   * @param {Object} product
   * @param {Date} publishedDate is the publishing day of product
   * @return {Integer}
   */
  calculateRebate(user,product,publishedDate){
    let rebate = 0;
    if (user.typeName === "company") rebate += 5;
    if ( (product.typeName === "new") && this.sameDate(publishedDate)) rebate += 10;
    return rebate;
  }

  /**
   * Generates the List for the given Prices
   * @param {Element} priceContainer is a DOM-element
   * @param {Array.<Number>} prices is an array of the calculated prices
   */
  generateList(priceContainer, prices) {
    const DELAY = 1000;
    let price;

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
