# Adidas-Ratings-and-Reviews
----
  `Multiple endpoints for fetching, posting, updating, and deleting review/user data`

### Get review data for product
* GET `/api/reviews/:id`

**Path Parameters:**
  * `id` Product ID

**Success Status Code:** `200`

**Returns:** JSON

```json
    [{
      "id": 1,
      "user_name": "Efren68",
      "user_email": "Willie64@hotmail.com",
      "product_id": 1337,
      "review_title": "Adaptive heuristic flexibility",
      "description": "Quality-focused secondary architecture",
      "review_date": "Tue Dec 01 2020",
      "verified": "Yes",
      "size": 3,
      "width": 4,
      "comfort": 3,
      "quality": 3,
      "value": 2,
      "helpfuly": 38,
      "helpfuln": 47,
      "recommended": "Yes",
      "user_id": 4
    }]
```

### Add review for product id
  * POST `/api/reviews/:id`

  **Path Parameters:**
  * `id` Product ID


**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "googleMap": "String location",
      "cost": "Number"
    }
```


### Update review info
  * PUT `/api/reviews/:id/`

**Path Parameters:**
  * `id` product id
  * `helpful` type of vote (positive or negative)

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
  {
    "id": 1,
    "helpful": true
  }
```

**Success Status Code:** `204`

### Add image to review
  * POST `/api/reviews/:id/`

**Path Parameters:**

  * `id` review id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "user_name": "Efren68",
      "user_email": "Willie64@hotmail.com",
      "product_id": 1337,
      "review_title": "Adaptive heuristic flexibility",
      "description": "Quality-focused secondary architecture",
      "review_date": "Tue Dec 01 2020",
      "verified": "Yes",
      "size": 3,
      "width": 4,
      "comfort": 3,
      "quality": 3,
      "value": 2,
      "helpfuly": 38,
      "helpfuln": 47,
      "recommended": "Yes",
      "user_id": 4
    }
```

* ### Delete reviews
  * DELETE `/api/reviews/:id/`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `200`: Successfully deleted

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
  {
    "id": 1
  }
```

