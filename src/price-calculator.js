/**
 * Bootstraps PriceCalculator by exposing its public API to provided context.
 * @param {Object} context Context to add module to
 */
(function (context) {
  "use strict";

  /**
   * Returns PriceCalculator's public API.
   * @return {Object} Public API
   */
  function priceCalculator() {
    var moduleInfo = {
      name: "Price Calculator",

      /**
       * Prints name of this module.
       * @param {Element} span DOM-lement to print name to
       */
      printName: function (span) {
        span.textContent = "Will print module name in 3000ms: ";

        setTimeout(function timeoutHandler() {
          span.textContent += "> " + this.name;
        }, 3000);
      }
    };

    // userType, 0 = normal, 1 = company
    // productType, 0 = new product, 1 = old product
    // price, the price of the product
    var calculatePrice = function (userType, productType, price, publishedDate) {
      try {
        switch (userType) {
        case 0: // normal
          if (productType == 0) { // new product
            var enddateDiscount = 0;
            if (publishedDate.toDateString() == new Date().toDateString()) enddateDiscount = 10;

            return price + 25 - enddateDiscount;
          } else if (productType == 1) { // old product
            return price + 35 - 0;
          }
          break;
        case 1: // company
          if (productType == 0) { // new product
            if (publishedDate.toDateString() === new Date().toDateString()) {
                return price + 25 - 15;// Enddate discount and company discount
            }

            return price + 25 - 5;// Only company discount
          } else if (productType == 1) { // old product
            return price + 35 - 5;
          }
          break;
        }
      } catch (ex) {
        console.log(ex);
      }
      return 0;
    }

    /**
     * Generates list of calculated prices.
     * @param {Element} priceContainer DOM-lement list prices in
     * @param {Array.<Number>} priceContainer List of prices to display
     */
    function generateList(priceContainer, prices) {
      var DELAY = 1000,
          price,
          i;

      for (i = 0; i < prices.length; i += 1) {
        price = prices[i];

        setTimeout(function () {
          var paragraph = document.createElement("p");
          paragraph.innerHTML = "Calculated price for item #" + i + " is: " + price;
          priceContainer.appendChild(paragraph);
        }, DELAY + (DELAY * i));
      }
    }

    /**
     * Recursively calculates factorial value.
     * @param {Integer} value Value to calculate factorial of
     * @return {Integer} Factorial value
     */
    function getFactorial(value) {
      // TODO: Write function body that recursively calculates factorial of provided value
    }

    // Public API
    return {
      printName: moduleInfo.printName,
      calculatePrice: calculatePrice,
      displayPrices: function (prices) {
        generateList(document.querySelector(".price-container"), prices);
      },

      /**
       * Calculates factorial value.
       * @param {Integer} value Value to calculate factorial of
       */
      calcFactorial: function (value) {
        var factorialText = "";

        for (var i = 0; i < value; i += 1) {
          factorialText += (i + 1) + ((i + 1 < value) ? "*" : "");
        }

        document.querySelector('.factorial').textContent = "Factorial of !" + value + " (" + factorialText + ") = " + getFactorial(value);
      }
    };
  }

  context.PriceCalculator = priceCalculator();
}(window));
