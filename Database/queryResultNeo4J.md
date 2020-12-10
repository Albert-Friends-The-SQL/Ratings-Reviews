## Neo4J Query Efficiency ##

# Select From Reviews With User Join #

*Query* : `MATCH (review:Review {productId: 3486736}) -[:WRITTENFOR]-> (product:Product {id: 3486736})  RETURN review;`

# First Result #

```text
--------------------------------------------------------------------------------------------+
| review                                                                                                                                                                                                                                                                                                                                                                                                               |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| (:Review {productId: 3486736, reviewVerified: "undefined", helpfulNo: 18, helpfulYes: 22, qualityRating: 1, userId: 4938555, recommended: "Yes", reviewTitle: "Ergonomic dedicated interface", sizeRating: 5, reviewDescription: "Intuitive coherent moratorium", reviewDate: "Tue Dec 08 2020 02:20:20 GMT-0800 (Pacific Standard Time)", widthRating: 3, id: 25196904, comfortRating: 4, ratingsValue: 2})

+--------+

| (:Review {productId: 3486736, reviewVerified: "undefined", helpfulNo: 13, helpfulYes: 47, qualityRating: 4, userId: 9856080, recommended: "Yes", reviewTitle: "Phased client-driven product", sizeRating: 5, reviewDescription: "Cross-platform intermediate monitoring", reviewDate: "Mon Dec 07 2020 14:26:40 GMT-0800 (Pacific Standard Time)", widthRating: 2, id: 19075965, comfortRating: 2, ratingsValue: 4}) |


2 rows available after 24 ms, consumed after another 126 ms
```

# Second Result #

```text
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| review                                                                                                                                                                                                                                                                                                                                                                                                               |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| (:Review {productId: 3486736, reviewVerified: "undefined", helpfulNo: 18, helpfulYes: 22, qualityRating: 1, userId: 4938555, recommended: "Yes", reviewTitle: "Ergonomic dedicated interface", sizeRating: 5, reviewDescription: "Intuitive coherent moratorium", reviewDate: "Tue Dec 08 2020 02:20:20 GMT-0800 (Pacific Standard Time)", widthRating: 3, id: 25196904, comfortRating: 4, ratingsValue: 2})



| (:Review {productId: 3486736, reviewVerified: "undefined", helpfulNo: 13, helpfulYes: 47, qualityRating: 4, userId: 9856080, recommended: "Yes", reviewTitle: "Phased client-driven product", sizeRating: 5, reviewDescription: "Cross-platform intermediate monitoring", reviewDate: "Mon Dec 07 2020 14:26:40 GMT-0800 (Pacific Standard Time)", widthRating: 2, id: 19075965, comfortRating: 2, ratingsValue: 4}) |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

2 rows available after 2 ms, consumed after another 2 ms
```

# Second Select Statement For Specific Review #

*Query* : `MATCH (review:Review) -[:WRITTENFOR]-> (product:Product) WHERE product.id = 1253858 RETURN review.reviewTitle, review.reviewDescription, product.name`

# Result #

```text

+---------------------------------------------------------------------------------------------+
| review.reviewTitle                          | review.reviewDescription       | product.name |
+---------------------------------------------------------------------------------------------+
| "Public-key local Graphical User Interface" | "Horizontal dynamic framework" | "parse"      |
+---------------------------------------------------------------------------------------------+

1 row available after 36 ms, consumed after another 1 ms
```

# Second Result #

```text
+---------------------------------------------------------------------------------------------+
| review.reviewTitle                          | review.reviewDescription       | product.name |
+---------------------------------------------------------------------------------------------+
| "Public-key local Graphical User Interface" | "Horizontal dynamic framework" | "parse"      |
+---------------------------------------------------------------------------------------------+

1 row available after 15 ms, consumed after another 2 ms
```