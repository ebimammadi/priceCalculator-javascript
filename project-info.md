## Business rules PriceCalculator
The [PriceCalculator module](price-calculator.js) makes it possible to calculate the price for a product given attributes listed below. There is a type fee and rebate rules that affects the price.

### Attributes
1. User type - There are two types of users:
    - Company, a company user
    - Normal, all users that are not a company user
1. Product type - There are two product types:
  - New, a new product in the product line
  - Old, an existing product in the product line
1. Price
1. Publish date

### Type fee
There are two types of additional fees, on top of the original price:
- New, +25 SEK
- Old, +35 SEK

### Rebate rules
- If the product is new and was published the same day as the calculation occurs there is a 10 SEK rebate
- If the product price is calculated for a company user there is a 5 SEK rebate

### Price calculation formula
`User price = Price + Type fee - Rebate`

### Validation
__Do not__ spend any time at all on input parameter validation.

## File structure
```
├── assets                          - This is just assets, do not change anything in this folder.
├── index.html                      - The start page of the application
├── readme.md                       - What you are looking at =)
├── spec
│   ├── price-calculator.specs.js   - The test/specifications for the price calculation
│   └── runner.html                 - The test/specification runner using mocha test framework with expect assertion toolkit, do not change this file, just open it in a browser to run the tests.
└── src
    └── price-calculator.js         - The JavaScript for the price calculation
```

## Resources
__Note:__ The below resources are already part of this distribution and the source code can be found in [assets/libs](./assets/libs). Only refer to the links in search for any documentation.

- [mocha](https://mochajs.org/) - The test framework used to run the tests.
- [expect](https://github.com/LearnBoost/expect.js) - The assertion library used.
