# README

[Checkout Kata](http://codekata.com/kata/kata09-back-to-the-checkout/)

# Tests

`> npm test` to run the tests.

`> npm test -- --watch` to run tests in watch mode.

# Checkout

## Design

Proposed design using [CRC cards](http://www.extremeprogramming.org/example/crcsim.html)

Candidate        | _
-----------------|--------------
Responsibilities | Collaborators

Checkout                         | _
---------------------------------|-----
Works out total of scanned items | Item
Keeps count of scanned items     |
Scans items                      |
Knows all items                  |

Item            | _
----------------|------
Knows its name  | Price
Knows its price |

Price               | _
--------------------|-------------
Knows its cost      | SpecialPrice
Knows special price |

SpecialPrice                                         | _
-----------------------------------------------------|--
Knows its cost                                       |
Knows how many items are needed to get special price |

## Pricing rules

  Item | Unit Price | Special Price
  -|-|-
  A | 50 | 3 for 130
  B | 30 | 2 for 45
  C | 20 | 
  D | 15 | 