# E-Shop-React

## Requirements / Purpose

-   Create an e-commerce store, using React and retrieving data from a database (Firestore)
-   Created during Nology program to explore and understand React, as well as an introduction to using databases

---

## Design Goals / Approach

-   Using React to create multiple components and containers for home page and product page
-   All products are to be stored in Firestore and fetched
-   Home page to display a grid of the products along with a carousel
-   Product page to show specific product information, and include a favourite button and select product variants
-   I chose to create a store based on a specific author's books, with a range of dates and cover variants
-   Styling kept fairly minimalistic, but tried to make it pleasant to use and distinct

---

## Features

-   Carousel of items, timed and can also click through
-   Product page can add item to cart, favourite and select different variants (specifically different book covers)

---

## Known issues

-   Can't view items in cart, currently only exists as an array
-   Quantity of item doesn't change after added to cart
-   Favouriting item doesn't affect anything
-   Cover images are stored as a url, subject to external sites (could be invalid)

---

## Future Goals

-   Implement cart system, allowing to add or remove items
-   Use favourite to indicate which items to display in carousel
-   Add user data to prevent changing the base items within database (not persistent between sessions)

---

## Change logs

### 31/05/2022

-   Changed favourite button to use FontAwesome icon
-   Updated carousel to make navigation more visible
