# Adidas-Ratings-and-Reviews
----
  `Multiple endpoints for fetching, posting, updating, and deleting review/user data`

* **Method:**

  `GET`

    * **URL**

      `/api/getReviews`

    *  **URL Params**

      `None`

    *  **Required:**

      `None`

    *  **Optional:**

      `None`

    * **Data Params**

      <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

    * **Success Response:**

      <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

      * **Code:** 200 <br />

        **Content:**
        `[{
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
          }, ...]`

    * **Error Response:**

      <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

      * **Code:** 401 UNAUTHORIZED <br />
        **Content:** `{ error : "Log in" }`

      OR

      * **Code:** 404 NOT FOUND <br />
        **Content:** `{ error : "Email Invalid" }`

    * **Sample Call:**

      `axios.get("/api/getReviews")`

    * **Notes:**

      <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._>

* **-----------------------------------------------------------------------------------------------------------------------------------------------------------**

* **Method:**

  `POST`

    * **URL**

      `/api/postReview`

    *  **URL Params**

      `{
      user: user,
      user_email: user_email,
      product_id: 1337,
      review_title: review_title,
      description: description,
      review_date: faker.date.soon().toString().split('').slice(0, 15).join(''),
      verified: 'Yes',
      size: sizeRating,
      width: widthRating,
      comfort: comfortRating,
      quality: qualityRating,
      value: overallRating,
      recommended: recommendedRating,
      helpfulY: 0,
      helpfulN: 0
    }`

    *  **Required:**

      `{
      user: user,
      }`

    *  **Optional:**

      `{
      user: user,
      user_email: user_email,
      product_id: 1337,
      review_title: review_title,
      description: description,
      review_date: faker.date.soon().toString().split('').slice(0, 15).join(''),
      verified: 'Yes',
      size: sizeRating,
      width: widthRating,
      comfort: comfortRating,
      quality: qualityRating,
      value: overallRating,
      recommended: recommendedRating,
      helpfulY: 0,
      helpfulN: 0
      }`

    * **Data Params**

      <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

    * **Success Response:**

      <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

      * **Code:** 200 <br />

        **Content:**
        `SUCCESS`

    * **Error Response:**

      <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

      * **Code:** 401 UNAUTHORIZED <br />
        **Content:** `{ error : "Log in" }`

      OR

      * **Code:** 400 BAD REQUEST <br />
        **Content:** `{ error : "Bad Request" }`

    * **Sample Call:**

      `axios.post("/api/postReview", {
      user: user,
      user_email: user_email,
      product_id: 1337,
      review_title: review_title,
      description: description,
      review_date: faker.date.soon().toString().split('').slice(0, 15).join(''),
      verified: 'Yes',
      size: sizeRating,
      width: widthRating,
      comfort: comfortRating,
      quality: qualityRating,
      value: overallRating,
      recommended: recommendedRating,
      helpfulY: 0,
      helpfulN: 0
      })`

    * **Notes:**

      <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._>

* **-----------------------------------------------------------------------------------------------------------------------------------------------------------**

* **Method:**

  `PUT`

    * **URL**

      `/api/reviews`

    *  **URL Params**

      `{id: reviewId, helpful: e.target.innerText})`

    *  **Required:**

      `axios.put('/api/reviews', {id: reviewId, helpful: e.target.innerText})`

    *  **Optional:**

      `None`

    * **Data Params**

      <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

    * **Success Response:**

      <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

      * **Code:** 200 <br />

        **Content:**

        `SUCCESS`

    * **Error Response:**

      <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be listed here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

      * **Code:** 401 UNAUTHORIZED <br />
        **Content:** `{ error : "Log in" }`

      OR

      * **Code:** 400 BAD REQUEST <br />
        **Content:** `{ error : "Bad Request" }`

    * **Sample Call:**

      `axios.put('/api/reviews', {id: reviewId, helpful: e.target.innerText})`

    * **Notes:**

      <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._>

* **-----------------------------------------------------------------------------------------------------------------------------------------------------------**

* **Method:**

  `DELETE`

    * **URL**

      `/api/deleteReview`

    *  **URL Params**

      `id`

    *  **Required:**

      `{id: reviewID}`

    *  **Optional:**

      `None`

    * **Data Params**

      `{id: reviewID}`

    * **Success Response:**

      <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

      * **Code:** 200 <br />

        **Content:**

        `SUCCESS`

    * **Error Response:**

      <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be listed here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

      * **Code:** 401 UNAUTHORIZED <br />
        **Content:** `{ error : "Log in" }`

      OR

      * **Code:** 400 BAD REQUEST <br />
        **Content:** `{ error : "Bad Request" }`

    * **Sample Call:**

      `axios.delete('/api/deleteReview', {id: reviewId, helpful: e.target.innerText})`

    * **Notes:**

      <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._>